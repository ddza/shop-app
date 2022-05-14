import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import FormContainer from "../../components/FormContainer/FormContainer";
import TextRow from "../../components/TextRow/TextRow";
import constants from "../../config/constants";
import validations from "../../formValidation/validations";
import { axiosInstance } from "../../axios/axios";


const ForgotPassword = () => {
  const [email, setEmail] = useState({
    email: "",
  });
  const [serverStatus, setServerStatus] = useState();
  const [errors, setErrors] = useState({});
 

  const handleChange = (e) => {
    setEmail({
      email: e.target.value,
    })
  }

  async function resetPasswordMail() {
    try {
      const csrf = await axiosInstance.get(constants.CSRF_URL);
      const forgotPasswordMessage = await axiosInstance.post("/api/forgot-password", email);
      setServerStatus(forgotPasswordMessage.data.status);
      console.log(forgotPasswordMessage.data.status);
      console.log("in")
      // redirect('/');

    } catch (error) {
      const err = error
      if (err.response) {
        setErrors({ ...errors, serverError: err.response.data });
        //console.log(err.response.data)
      }
    }
  }

  useEffect(() => {
    if (errors.isValid && !errors.serverError) {
      resetPasswordMail();
    }
  }, [errors]);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validations(email));
  }

  return (
    <FormContainer formTitle="Forgot your password?">
       <TextRow>
        Don't fret! Just type in your email and we will send you a code to reset your password!
      </TextRow>
      <div className="rounded-md shadow-sm -space-y-px">
        {serverStatus ? <p className="text-red-600">{errors.serverError.message}</p> : null}
        <TextRow>
          Your email
        </TextRow>
        <FormInput
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          onChange={handleChange}
        />
        {errors.email ? <p className="text-red-600">{errors.email}</p> : null}
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
export default ForgotPassword;