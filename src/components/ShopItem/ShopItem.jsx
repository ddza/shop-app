import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import Button from "../../components/Button/Button";
import { 
    Quantity, 
    Arrow, 
    Value
} from "./ShopItem.style";

const ShopItem = (product) => {
    const {img_url, name, href, price, quantity} = product;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } =  useContext(CartContext);

    const handleIncreaseQuantity = () => addItemToCart(product);
    const handleDecreaseQuantity = () => removeItemFromCart(product);
    const handleClearItemFromCart = () => clearItemFromCart(product);

    return ( 
        <li  className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
                src={img_url}
                alt="Product"
                className="h-full w-full object-cover object-center"
            />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href={href}> {name} </a>
                        </h3>
                        <p className="ml-4">{price}$</p>
                    </div>
                    {/* <p className="mt-1 text-sm text-gray-500">{color}</p> */}
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty</p>
                    <Quantity>
                        <Arrow
                            onClick={handleDecreaseQuantity} 
                            >&#10094;
                        </Arrow>
                            <Value>{quantity}</Value>
                        <Arrow
                            onClick={handleIncreaseQuantity}
                            >&#10095;
                        </Arrow>
                    </Quantity>
                    <div className="flex">
                        <Button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={handleClearItemFromCart}
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default ShopItem;