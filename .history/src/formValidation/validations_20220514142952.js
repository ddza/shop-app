const validations = (values) => {
    
    let errors = {isValid: false, serverError:null};
    console.log(values.password)
    if(Object.keys(values).length > 2) {
        if(!values.name) {
            errors.name = "Name is required.";
        }
        if(!values.password_confirmation) {
            errors.passwordConfirmation = "Password Confirmation is required.";
        }else if(values.password !== values.password_confirmation) {
            errors.passwordConfirmation = "Please, make sure your password match";
        }
    }
    
    if(!values.email) {
        errors.email = "Email is required.";
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
       errors.email = "Email is invalid";
    }

    if(!values.password) {
        errors.password= "Password is required.";
   }
   if(Object.keys(values).length === 1) {
        if(Object.keys(errors).length ===1){
            errors.isValid = true;
        }
   } else {
        if(Object.keys(errors).length ===2){
            errors.isValid = true;
        }
   }
   console.log(errors)
   return errors;
}
export default validations;