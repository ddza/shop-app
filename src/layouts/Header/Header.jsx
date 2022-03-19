import { Outlet, Link } from "react-router-dom";

import Button from '../../components/Button/Button';
import { ReactComponent as MainLogo } from '../../img/main-logo.svg'

const Header = () => {
    return (
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <MainLogo className="h-8 w-auto sm:h-10"/>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-10 text-base font-medium text-gray-500 hover:text-gray-900">
                        <Link to="/women-collection">
                            Women
                        </Link>
                        <Link to="/men-collection">
                            Men
                        </Link>
                        <Link to="/shop">
                            Shop
                        </Link>
                </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 text-gray-500  font-medium">
                        <Link to="/sign-in" className="hover:text-gray-900">
                            Sign in
                        </Link>
                        <Link to="/sign-up" className="ml-8 items-center justify-center px-4 py-2 rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}
export default Header;