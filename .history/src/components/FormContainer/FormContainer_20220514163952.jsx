import { Link } from "react-router-dom";
const FormContainer = ({ children, formTitle }) => {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto w-full space-y-8">
                <div>
                    <Link to="/">
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                    </Link>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{formTitle}</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    {children}
                </form>
            </div>
        </div>
    );
}
export default FormContainer;