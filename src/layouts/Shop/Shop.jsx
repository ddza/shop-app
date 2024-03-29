import { useContext, useState} from "react";
import { useSelector } from "react-redux";

//import { CartContext } from "../../contexts/CartContext";
import { selectCartItems, selectPrice } from "../../store/cart/cart.selector";
import Button from "../../components/Button/Button";
import ShopItem from "../../components/ShopItem/ShopItem";
import EmptyCartMessage from "../../components/EmptyCartMessage/EmptyCartMessage";
import { ReactComponent as GiftLogo } from '../../img/gift.svg'
import FormInput from "../../components/FormInput/FormInput";
import constants from "../../config/constants";
import { axiosInstance } from "../../axios/axios";



const Shop = () => {
  //const { cartItems, totalPrice } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectPrice);
  const [values, setValues] = useState({
    couponCode: "", 
    total: totalPrice 
  }); 
  const [errors, setErrors] = useState();
  const [coupon, setCoupon] = useState();

  const handleChange = (e) => {
    setValues({
      ...values, 
      [e.target.name]: e.target.value,
    })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    // setValues({
    //   ...values, 
    //   total: totalPrice,
    // })
    applayCoupon()
  }

  async function applayCoupon() {
    try {
      const csrf =  await axiosInstance.get(constants.CSRF_URL);
      const applayCoupon = await axiosInstance.post(constants.APPLY_COUPON, values);
   
      setCoupon(applayCoupon.data);
      setErrors(applayCoupon.data.msg)

    } catch (error) {
      const err = error;

      if (err.response) {
        if(Object.keys(err.response.data).length === 2){
          setErrors(err.response.data.errors.couponCode[0]);
        } else {
          setErrors(err.response.data.msg);
          //console.log(err.response.data)
        }
      }
    }
  }

    return (
        <div className=" flex max-w-full  py-12 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-auto w-screen mx-auto  max-w-2xl ">
          {cartItems.length ? (
              <div className="flex h-full flex-col  bg-white ">
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <ul className="-my-6 divide-y divide-gray-200">
                  {cartItems.map((product) => (
                    <ShopItem key={product.id} {...product} />
                  ))}
              </ul>
              </div>
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${totalPrice}</p>
                </div>
                <div>
                  <p className="mb-4 mt-4 italic text-sm">If you have a coupon code, please enter it in the box below</p>
                  {errors ?  <p className="text-red-600">{errors}</p> : null}
                  <div className="md:flex max-w-xs">
                    <form action="" method="POST">
                        <div className="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border ">
                          <FormInput 
                              id="coupon"
                              name="couponCode"
                              type="coupon"
                              placeholder="Apply coupon"
                              className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none text-xs"
                              onChange={handleChange}
                          />
                             <FormInput 
                              id="total"
                              name="total"
                              type="hidden"
                              
                          />
                          <Button
                               type="submit"
                                className="text-xs flex items-center px-3 py-1 text-white bg-indigo-600  outline-nonemd:hover:bg-gray-700 focus:outline-none active:outline-none"
                                onClick={onSubmit}
                           >
                              <GiftLogo />
                                <span className="font-medium">Apply coupon</span>
                          </Button>
                        </div>
                    </form>
                  </div>
                </div>
                    {
                      coupon ?
                       <div>
                          <div className="flex justify-between text-base font-medium text-red-600 mt-4">
                            <p>Discount {coupon.couponPercentOff ? `${coupon.couponPercentOff}%` : null}</p>
                            <p>-${coupon.discount}</p>
                          </div>
                          <div className="flex justify-between text-xl font-medium text-gray-900 mt-4">
                            <p>Final Price</p>
                            <p>${coupon.finalPrice}</p>
                          </div> 
                       </div>
                      : null
                    }
                <div className="mt-6"> 
                   <Button
                      type="button"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 max-w-sm m-auto"
                   >
                        Checkout
                  </Button>
                </div>
              </div>
            </div>
          ) : <EmptyCartMessage />
        }
        </div>
    </div>
    );
}
export default Shop;