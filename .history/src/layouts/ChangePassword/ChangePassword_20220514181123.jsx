import { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";

import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import FormContainer from "../../components/FormContainer/FormContainer";
import TextRow from "../../components/TextRow/TextRow";
import constants from "../../config/constants";
import validations from "../../formValidation/validations";
import { axiosInstance } from "../../axios/axios";


const ChangePassword = () => {
  const [values, setValues] = useState({
    email: "", 
    password: "", 
    password_confirmation:""
  });
  const [serverStatus, setServerStatus] = useState();
  const [errors, setErrors] = useState({});
  const redirect = useNavigate();
 

  const handleChange = (e) => {
    setValues({
      ...values, 
      [e.target.name]: e.target.value,
    })
  }

  async function ChangePassword() {
    try {
      const csrf =  await axiosInstance.get(constants.CSRF_URL);
      const changePassword = await axiosInstance.post(constants.REGISTER_USER, values);
      console.log(changePassword)
     
      //redirect('/');

    } catch (error) {
      const err = error;

      if (err.response) {
        setErrors({...errors, serverError:err.response.data});
      }
    }

    // try {
    //     const response = await fetch(constants.FORGOT_PASSWORD, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(values)
    //     });
    //     if (!response.ok) {
    //         throw new Error(`HTTP error: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setServerStatus(data.status);
   
    // } catch (error) {
    //     const err = error
    //     if (err.response) {
    //       setErrors({ ...errors, serverError: err.response.data });
    //     }
    // }

  }

  useEffect(() => {
    if (errors.isValid && !errors.serverError) {
      ChangePassword();
    }
  }, [errors]);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validations(values));
  }

  return (
    <FormContainer formTitle="Change your password">
      <div className="rounded-md shadow-sm -space-y-px">
        {serverStatus ? <p className="bg-indigo-600 text-white text-center mb-2.5">{serverStatus}</p> : null}
       
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
                  placeholder=" New Password"
                  onChange={handleChange}
              />
              {errors.password ?  <p className="text-red-600">{errors.password}</p> : null}
              <FormInput 
                  id="confirm-password"
                  name="password_confirmation"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Confirm New Password"
                  onChange={handleChange}
              />
         {errors.passwordConfirmation ?  <p className="text-red-600">{errors.passwordConfirmation}</p> : null}
      </div>
      <div>
        <Button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onSubmit}
        >
          Reset Password
        </Button>
      </div>
    </FormContainer>

  );
}
export default ChangePassword;