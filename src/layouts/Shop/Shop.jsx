import Button from "../../components/Button/Button";
import './Shop.style.scss';


const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]


const Shop = () => {
    return (
        <div className=" flex max-w-full  py-12 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-auto w-screen mx-auto  max-w-md ">
          <div className="flex h-full flex-col  bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {products.map((product) => (
                <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                    />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href={product.href}> {product.name} </a>
                        </h3>
                        <p className="ml-4">{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
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
                ))}
            </ul>
            </div>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <div className="mt-6"> 
                 <Button
                    type="button"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                 >
                      Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
}
export default Shop;