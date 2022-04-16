import Button from "../../components/Button/Button";

const ShopItem = ({imageAlt, imageSrc, name, href, price, color}) => {
    return ( 
        <li  className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover object-center"
            />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
            <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                    <a href={href}> {name} </a>
                </h3>
                <p className="ml-4">{price}</p>
                </div>
                {/* <p className="mt-1 text-sm text-gray-500">{color}</p> */}
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty</p>
                <span className="quantity">
                    <div className="arrow" >&#10094;</div>
                    <span className="value">1</span>
                    <div className="arrow" >&#10095;</div>
                </span>

                <div className="flex">
                    <Button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
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