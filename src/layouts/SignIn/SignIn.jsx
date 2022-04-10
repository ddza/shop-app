import { useState, useContext, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";

import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import FormContainer from "../../components/FormContainer/FormContainer";
import TextRow from "../../components/TextRow/TextRow";
import { UserContext } from "../../contexts/user.context";
import constants from "../../config/constants";
import validations from "../../formValidation/validations";
import { axiosInstance } from "../../axios/axios";


const SingIn = () => {
  const [values, setValues] = useState({
    email: "", 
    password: ""
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

  async function getUser() {
      try {
        const csrf =  await axiosInstance.get(constants.CSRF_URL);
        const login = await axiosInstance.post(constants.LOGIN_USER, values);
        setCurrentUser(login.data);
        redirect('/');
        
      } catch (error) {
        const err = error 
        if (err.response) {
         setErrors({...errors, serverError:err.response.data});
           //console.log(err.response.data)
        }
      }
  }

  useEffect(()=>{
      if(errors.isValid && !errors.serverError){
        getUser();
      }
  }, [errors]);

  const onSubmit = (e) => {
      e.preventDefault();
      setErrors(validations(values));
  }

    return (
      <FormContainer formTitle="Sign in to your account">
          <div className="rounded-md shadow-sm -space-y-px">
          {errors.serverError ?  <p className="text-red-600">{errors.serverError.message}</p> : null}
            <FormInput 
                id ="email-address"
                 name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                // onChange={ e => setEmail(e.target.value)}
                onChange={handleChange}
            />
            {errors.email ?  <p className="text-red-600">{errors.email}</p> : null}
            <FormInput 
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
               // onChange={ e => setPassord(e.target.value)}
               onChange={handleChange}
            />
            {errors.password ?  <p className="text-red-600">{errors.password}</p> : null}
          </div>
          <TextRow>
              <a href="#" className=" text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                </a>
          </TextRow>
          <div>
            <Button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={onSubmit}
            > 
                Sign in
            </Button>
          </div>
          <TextRow>
            Don't have an account?  
            <Link to="/sign-up" className="text-indigo-600 hover:text-indigo-500 "> Sign up</Link>
          </TextRow>
      </FormContainer>
 
    );
}
export default SingIn;