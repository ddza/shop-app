import Button from "../../components/Button/Button";
import ShopItem from "../../components/ShopItem/ShopItem";
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
        <div className="pointer-events-auto w-screen mx-auto  max-w-2xl ">
          <div className="flex h-full flex-col  bg-white ">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <ul className="-my-6 divide-y divide-gray-200">
                {products.map((product) => (
                  <ShopItem key={product.id} {...product} />
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
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 max-w-sm m-auto"
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