import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";


import Button from '../../components/Button/Button';
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { ReactComponent as MainLogo } from '../../img/main-logo.svg'
import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/CartContext";
import constants from "../../config/constants";
import { axiosInstance } from "../../axios/axios";



const Header = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartHidden} = useContext(CartContext);
  
    const onSignOut =  (e) => {
        
        try {  
            const interceptors =   axiosInstance.interceptors.request.use(function(config){
                const token =  currentUser?.token;
                config.headers.Authorization = token ? `Bearer ${token}` : '';

                return config;
            });
            
            axiosInstance.get(constants.CSRF_URL);
            axiosInstance.post(constants.LOGOUT_USER).then(res => {
                        setCurrentUser(null);
                        axiosInstance.interceptors.request.eject(interceptors);
                    }).catch(err => console.log(err));
                
            } catch (error) {
                const err = error 
                if (err.response) {
                    console.log(err.response.status);
                    console.log(err.response.data);
                    console.log(err.response.data.errors);
                }
            }
    }

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
                       
                      { currentUser ?   
                            <Button
                                type="button"
                                className="group relative w-full flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-23 max-w-md"
                                onClick={onSignOut}
                            > Sign Out 
                            </Button> 
                         :
                            ( <div>
                                <Link to="/sign-in" className="hover:text-gray-900">
                                    Sign in
                                </Link>
                                <Link to="/sign-up" className="ml-8 items-center justify-center px-4 py-2 rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                    Sign Up
                                </Link>
                            </div>
                            )
                        }
                         <CartIcon/>
                    </div>
                </div>
                {
                    // !isCartHidden ?  <CartDropdown/> : null
                    !isCartHidden && <CartDropdown/> 
                }
                
            </div>
            <Outlet/>
        </div>
    );
}
export default Header;