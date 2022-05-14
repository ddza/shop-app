const validations = (values) => {
    console.log(Object.keys(errors.password))
    let errors = {isValid: false, serverError:null};
  
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

   if(Object.keys(errors).length ===2){
       errors.isValid = true;
   }
   return errors;
}
export default validations;