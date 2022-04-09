import { useState , useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import FormContainer from "../../components/FormContainer/FormContainer";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import TextRow from "../../components/TextRow/TextRow";
import { UserContext } from "../../contexts/user.context";
import constants from "../../config/constants";
import validations from "../../formValidation/validations";
import   "../../axios/axios";



const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "", 
    password: "", 
    password_confirmation:""
  });
  const [errors, setErrors] = useState({});
  const { setCurrentUser } = useContext(UserContext);
  const redirect = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values, 
      [e.target.name]: e.target.value,
    })
  }

  async function createUser() {
    try {
      const csrf =  await axios.get(constants.CSRF_URL);
      const singUp = await axios.post(constants.REGISTER_USER, values);
   
      setCurrentUser(singUp.data)
      redirect('/');

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

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validations(values));
  }

    return (
      <FormContainer formTitle="Sign up">
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
              placeholder=" Confirme Password"
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
    );
}
export default SignUp;