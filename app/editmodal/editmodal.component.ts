import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { TextField } from "tns-core-modules/ui/text-field";
import { SnackBar } from "nativescript-snackbar";
import { BatchesService } from '../home/batches.service';
import { Batch } from '../home/batch.model';

import { Location } from "@angular/common";
//import * as ApplicationSettings from "application-settings";
import * as ApplicationSettings from "tns-core-modules/application-settings";
@Component({
    selector: "modal", 
    template: `
    <StackLayout margin="10" verticalAlignment="center">
    <StackLayout class="form" padding="15" backgroundColor="#FFFFFF">
        <StackLayout class="input-field">
            <Label text="Company Name" class="label font-weight-bold m-b-5"></Label>
            <TextField class="input" [(ngModel)]="input.companyname"></TextField>
            <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <StackLayout class="input-field">
            <Label [text]="Phone Number" class="label font-weight-bold m-b-5"></Label>
            <TextField class="input" [(ngModel)]="input.phonenumber"></TextField>
            <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
       

 
        <Button class="btn btn-primary w-full" text="Update" (tap)="register_update()"></Button>
    </StackLayout>
</StackLayout>
        


	`
})
export class EditModalComponent implements OnInit {
    public input: any;
    public firstname: any;
    public CompnayTx: string = "";
    public PhoneTx: string = "";

    constructor(private params: ModalDialogParams,private _batchesService: BatchesService) {

        // alert("test1="+options);
        // alert("test2="+options.data);
        // alert("test3="+options.data._id);

        this.input = {
            "companyname": "",
            "phonenumber": "",
            "id":"",
          
        }
    }

    ngOnInit() {

        this.params = this.params.context;    
    }

    public onTextChange(args) {
        let textField = <TextField>args.object;

        console.log("onTextChange");
        this.CompnayTx = textField.text;
        this.PhoneTx = textField.text;
        alert("Text: " + this.PhoneTx);

}

    close() {
        this.params.closeCallback();
    }
  
    register_update() {

//alert("tetete="+this.params.id);  

        if(this.input.companyname) { 
            //ApplicationSettings.setString("account", JSON.stringify(this.input));

            this._batchesService.update(this.input).subscribe(data=> { 
                var res = JSON.parse(data['_body']);
                alert(data);

                //   if(data.status == 200){
                
                //   }
              
                },(err) => {
                   // console.log(err)
                   alert("err: " + err);

                 });
               

        } else {
            //(new SnackBar()).simple("All Fields Required!");
        }
    }

    public Add(result) {

        alert("Text: " + this.PhoneTx);
        alert("Text: " + this.input); 
}

}

