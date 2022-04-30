import {Link} from "react-router-dom";
import { ReactComponent as CartIcon} from '../../img/cart.svg';

const EmptyCartMessage = () => {
    return (
        <div className='text-center'>
            <CartIcon className='w-52 m-auto w-full'/>
            <h2 className='text-2xl font-extrabold tracking-tight text-gray-900 pb-4'>Your cart is curentlly empty</h2>
            <p className='pb-4'> Please add something in your cart.</p>
            <Link
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-56 m-auto"
                to="/"
            >Home</Link>
        </div>
    );
}

export default EmptyCartMessage;