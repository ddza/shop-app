import { useState , useContext, useEffect, useLayoutEffect} from "react";
import { Link } from "react-router-dom";

import FormContainer from "../../components/FormContainer/FormContainer";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import TextRow from "../../components/TextRow/TextRow";
import { UserContext } from "../../contexts/userContext";
import constants from "../../config/constants";
import validations from "../../formValidation/validations";
import SuccessfulRegistratioMessage from "../../components/SuccessfulRegistrationmessage/SuccessfulRegistrationMessage";

import { axiosInstance } from "../../axios/axios";



const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "", 
    password: "", 
    password_confirmation:""
  });
  const [errors, setErrors] = useState({});
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);
  const { setCurrentUser } = useContext(UserContext);
 

  const handleChange = (e) => {
    setValues({
      ...values, 
      [e.target.name]: e.target.value,
    })
  }

  async function createUser() {
    try {
      const csrf =  await axiosInstance.get(constants.CSRF_URL);
      const singUp = await axiosInstance.post(constants.REGISTER_USER, values);
   
      setCurrentUser(singUp.data);
      setSuccessfulRegistration(true);
      //redirect('/');

    } catch (error) {
      const err = error;

      if (err.response) {
        setErrors({...errors, serverError:err.response.data});
      }
    }
  }
  useEffect(()=>{
    if(errors.isValid && !errors.serverError){
      createUser();
    }
  }, [errors]);
  // useLayoutEffect(() => {

  // }, [successfulRegistration]);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validations(values));
  }

    return (
      !successfulRegistration 
        ?  <FormContainer formTitle="Sign up">
            <div className="rounded-md shadow-sm -space-y-px">
            {errors.serverError ?  <p className="text-red-600">{errors.serverError.message}</p> : null}
              <FormInput 
                  id ="username"
                  name="name"
                  type="text"
                  placeholder="Username"       
                  onChange={handleChange}
              />
              {errors.name ?  <p className="text-red-600">{errors.name}</p> : null}
              <FormInput 
                  id ="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email address"
                  onChange={handleChange}
              />
              {errors.email ?  <p className="text-red-600">{errors.email}</p> : null}
              <FormInput 
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  onChange={handleChange}
              />
              {errors.password ?  <p className="text-red-600">{errors.password}</p> : null}
              <FormInput 
                  id="confirm-password"
                  name="password_confirmation"
                  type="password"
                  autoComplete="current-password"
                  placeholder=" Confirm Password"
                  onChange={handleChange}
              />
              {errors.passwordConfirmation ?  <p className="text-red-600">{errors.passwordConfirmation}</p> : null}
            </div>
            <div>
              <Button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick = {onSubmit}
              > 
                Register
              </Button>
            </div>
            <TextRow>
                Have an account?  
                <Link to="/sign-in" className="text-indigo-600 hover:text-indigo-500 "> Sing in</Link>
              </TextRow>
          </FormContainer>

        : <SuccessfulRegistratioMessage/>
    );
}
export default SignUp;