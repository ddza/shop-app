import { Link } from "react-router-dom";

import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import FormContainer from "../../components/FormContainer/FormContainer";
import TextRow from "../../components/TextRow/TextRow";


const SingIn = () => {
    return (
      <FormContainer formTitle="Sign in to your account">
          <div className="rounded-md shadow-sm -space-y-px">
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
          <TextRow>
              <a href="#" className=" text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                </a>
          </TextRow>
          <div>
            <Button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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