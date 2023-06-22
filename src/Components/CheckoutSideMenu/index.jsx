import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCart from '../OrderCart'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log('cart: ', context.cartProducts)

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                <XMarkIcon 
                    className="cursor-pointer h-6 w-6 text-black-500" 
                    onClick={context.closeCheckoutSideMenu}/>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>                
            {
                context.cartProducts.map(product => (
                    <OrderCart 
                    key={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    />
                ))
            }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu