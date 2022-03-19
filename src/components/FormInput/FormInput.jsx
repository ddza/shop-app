const FormInput = ({ id, ...otherProps }) => {
    return (
        <div>
            <label htmlFor={id}className="sr-only">
                Email address
            </label>
            <input
                id={id}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                {...otherProps}
            />
      </div>  
    );
}
export default FormInput;