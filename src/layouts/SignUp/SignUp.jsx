import FormContainer from "../../components/FormContainer/FormContainer";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import TextRow from "../../components/TextRow/TextRow";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
      <FormContainer formTitle="Sign up">
        <div className="rounded-md shadow-sm -space-y-px">
          <FormInput 
              id ="username"
              name="Name"
              type="text"
              placeholder="Username"
          />
          <FormInput 
              id ="email-address"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email address"
          />
          <FormInput 
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
          />
        </div>
        <div>
          <Button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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