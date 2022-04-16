import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext"
import Button from "../Button/Button";

const CardItem = (item) => {
    const { img_url, name, price  } = item;
    const { addItemToCart  } = useContext(CartContext);

    const addItem = () => addItemToCart(item);
    

    return (
        <div  className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={img_url}
                    alt="Product"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <p>{name}</p>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{price}$</p>
            </div>
            <div>
                <Button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
                    onClick={addItem}
                > 
                    Add to bag
                </Button>
        </div>
      </div>
    );
}
export default CardItem;