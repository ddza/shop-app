import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import Button from "../../components/Button/Button";
import ShopItem from "../../components/ShopItem/ShopItem";
import EmptyCartMessage from "../../components/EmptyCartMessage/EmptyCartMessage";
import './Shop.style.scss';


const Shop = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

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