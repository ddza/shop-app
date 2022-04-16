const CartItem = ({img_url, price, name, quantity}) => {
    return (
        <li  className="flex py-3">
            <div className="h-14 w-14 flex-shrink-0 overflow-hidden">
                <img
                    src={img_url}
                    alt="Product"
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div className="flex justify-between text-sm font-medium text-gray-900">
                    <p>{name} </p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p>{quantity} x {price}$</p>
                </div>
            </div>
        </li>
    )
}
export default CartItem;