import { useState, useEffect } from "react";

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
      axiosInstance.interceptors.response.use(res => {
        console.log(`res status ---> ${res.status}`)
       // resolve(res)
        return res;
    }, (error)=>{
        console.log(`This is the error status ---> ${error.response.status}`)
        // if(error.response.status === 401){
        //    resolve(error.response);
        // }
    })
      const forgotPasswordMessage = await axiosInstance.post("/api/forgot-password", email);
      console.log(forgotPasswordMessage)
      setServerStatus(forgotPasswordMessage.data.status);
    
    } catch (error) {
      const err = error
      if (err.response) {
        setErrors({ ...errors, serverError: err.response.data });
      }
    }
//     try {
//       const response = await fetch('http://127.0.0.1:5000/upload-img', {
//           method: 'POST',
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({fileData, fileName})
//       });
//       if (!response.ok) {
//           throw new Error(`HTTP error: ${response.status}`);
//       }
//       const data = await response.json();

//       //const dateWithoutTime = new Date(Math.floor(new Date().getTime() / 86400000) * 86400000).toISOString();
//       // if(data) {
//       //     setTimeout(()=>{
//       //         getImagesFromMailchimp(dateWithoutTime)
//       //     }, 1800)
//       // }
//       mailchimpImages = data;
//       return data;
//   } catch (error) {
//       console.error(error);
//   }
//     fetch('http://127.0.0.1:8000/api/forgot-password', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(email),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
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
        {serverStatus ? <p className="bg-indigo-600 text-white text-center mb-2.5">{serverStatus}</p> : null}
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