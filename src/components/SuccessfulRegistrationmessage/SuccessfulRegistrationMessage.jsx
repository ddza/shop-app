import {Link} from "react-router-dom";
import { ReactComponent as ChecKMark} from '../../img/check-icon.svg';

const SuccessfulRegistratioMessage = () => {
    return (
        <div className='text-center content-center flex justify-center flex-col' style={{height: "90vh"}}>
            <ChecKMark className='w-52 m-auto w-full'/>
            <h2 className='text-5xl font-extrabold tracking-tight text-indigo-600 pb-4'>Success</h2>
            <p className='pb-4 text-lg'>Congratulation, your account has been successfully created.</p>
            <Link
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-56 m-auto"
                to="/"
            >Go To Home</Link>
        </div>
    );
}

export default SuccessfulRegistratioMessage;