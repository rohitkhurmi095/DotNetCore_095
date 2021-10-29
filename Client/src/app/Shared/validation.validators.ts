//**************************
// Custom Form Validators
//**************************
//::::: REGX :::::
// only alphanumeric & space : /^[0-9a-zA-Z ]+$/
// only numbers : /[0-9]+/
// char & space only : /^[a-zA-Z ]+$/
// Email Validation : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
// _________________________
//input = fc.value
//regx.test(fc.value) - to check if input pattern matches regx
//Single Control => class (FormControl)
//Multiple Contols => function (FormGroup)

import { FormControl,FormGroup } from "@angular/forms";


//_________________________________
// Allow AlphaNumeric & space only
//_________________________________
//TextFieldValidator.validTextField
export class TextFieldValidator{

    //Function
    static validTextField(fc:FormControl){
        
        //input = fc.value (formControl.value)
        //Apply validators only if input is there
        if(fc.value!=undefined && fc.value!=''){

            //regx to check for alphanumeric + space
            const regx = /^[0-9a-zA-Z ]+$/;

            //CHECK IF input pattern matches regx
            //------------------------------------
            if(regx.test(fc.value)){
                //pattern matches -> no error
                return null;
            }else{
                //error => input pattern does not matches regx
                //return {obj:true} => error
                return {validTextField:true};
            }

        }else{
            //input is required => do nothing (Validators.required applied in this case)
            return null;
        }
    }
}




//__________________________________
// Allow Numeric only
//___________________________________
export class NumericFieldValidator{

    //Function
    static validNumericField(fc:FormControl){

        //input = fc.value (formControl.value)
        //Apply validators only if input is there
        if(fc.value!=undefined && fc.value!=''){

            //regx to check for numeric
            const regx = /[0-9]+/;

            //CHECK IF input pattern matches regx
            //------------------------------------
            if(regx.test(fc.value)){
                //pattern matches -> no error
                return null;
            }else{
                //error => input pattern does not matches regx
                //return {obj:true} => error
                return {validNumericField:true};
            }

        }else{
            //input is required => do nothing (Validators.required applied in this case)
            return null;
        }
    }
}



//__________________________________
// Allow char & space only
//___________________________________
export class OnlyCharFieldValidator{

    //Function
    static validOnlyCharField(fc:FormControl){
        
        //input = fc.value (formControl.value)
        //Apply validators only if input is there
        if(fc.value!=undefined && fc.value!=''){

            //regx for char + space
            const regx = /^[a-zA-Z ]+$/;

            //CHECK IF input pattern matches regx
            //------------------------------------
            if(regx.test(fc.value)){
                //pattern matches -> no error
                return null;
            }else{
                //error => input pattern does not matches regx
                //return {obj:true} => error
                return {validOnlyCharField:true};
            }

        }else{
            //input is required => do nothing (Validators.required applied in this case)
            return null;
        }
    }

}



//__________________________________
// Allow Valid Email only
//___________________________________
export class EmailValidator{

    //Function
    static validEmail(fc:FormControl){

        
        //input = fc.value (formControl.value)
        //Apply validators only if input is there
        if(fc.value!=undefined && fc.value!=''){

            //regx for email 
            const regx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

            //CHECK IF input pattern matches regx
            //------------------------------------
            if(regx.test(fc.value)){
                //pattern matches -> no error
                return null;
            }else{
                //error => input pattern does not matches regx
                //return {obj:true} => error
                return {validOnlyCharField:true};
            }

        }else{
            //input is required => do nothing (Validators.required applied in this case)
            return null;
        }
    }
}



//__________________________________
// Dont allow only Whitespaces 
//___________________________________
export class NoWhiteSpaceValidator{

    //Function
    static noWhiteSpaceValidator(fc:FormControl){

         //input = fc.value (formControl.value)
        //Apply validators only if input is there
        if(fc.value!=undefined && fc.value!='' && fc.value!=null){

            //Check For WhiteSpace
            //Convert input(fc.value) -> string + trim() & check if length == 0
            //trim() removes whiteSpaces from both end of string
            const isWhiteSpace = (fc.value.toString().trim().length ===0);

            //If No WhiteSpace
            if(!isWhiteSpace){
                //if whiteSpace does not exists => no error
                return;
            }else{
                //if whiteSpace exists => error
                return {noWhiteSpaceValidator:true};
            }

        }else{
            //input is required => do nothing (Validators.required applied in this case)
            return null;
        }

    }

}



//===============================================
// ** Check password & confirmPassword matches **
//================================================
//CHECK IF 2 formControls match OR not
//password & confirmPassword 
//MustMatchValidator(password,confirmPassword);
//formControlName = password, confirmPassword
//use as: this.form.controls.confirmPassword.mustMatch

export function MustMatchValidator(controlName:string, matchingControlName:string){

    //FormControl Names:
    //ControlName = password
    //matchingControlName = confirmPassword

    //return FormGroup instance:
    return (fg:FormGroup)=>{
        
        //We have formGroup instance + FormControlName -> Get FormControl instance
        //Get FormControl instance (fc) from FormGroup [formGroup.controls[FormControlName]]
        //-------------------------
        const control = fg.controls[controlName];
        const matchingControl = fg.controls[matchingControlName];

        //CASE1: If mustMatch condition is not there
        //-----
        //we have to put mustMatch condition on confirmPassword(matchingControl)
        //validator has found error on matchingControl
        if(matchingControl.errors && !matchingControl.errors.mustMatch){
            //do nothing
            return
        }


        //CASE2: If mustMatch condition is there
        //------
        //(compare control & matchingControl values)
        //Password & confirmPassword dont matches => setError()
        if(control.value != matchingControl.value){
            matchingControl.setErrors({mustMatch:true});
        }else{
            //Password & controlPassword matches => noError
            matchingControl.setErrors(null);
        }
    }

}