import { ChevronRightIcon, CalendarDaysIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

const OrdersCart = props => {
    const { totalPrice, totalProducts } = props

    const currentDate = () => {
        let date = new Date().toLocaleDateString();
        return date
    }

    return (
        <div className="flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4">
                <div className='flex justify-between w-full'>
                    <p className='flex flex-col'>
                        <p className='flex gap-1'>
                        <CalendarDaysIcon className="cursor-pointer h-6 w-6 text-black"/>
                        <span className='font-ligth'>{currentDate()}</span>
                        </p>
                        <p className='flex gap-1'>
                        <ShoppingCartIcon className="cursor-pointer h-6 w-6 text-black"/>
                        <span className='font-ligth'>{totalProducts} Articles</span>
                        </p>
                    </p>
                    <p className='flex items-center gap-2'>
                        <span className='font-medium text-2xl'>$ {totalPrice}</span>
                        <ChevronRightIcon className="cursor-pointer h-6 w-6 text-black"/>
                    </p>
                </div>
        </div>
    )
}

export default OrdersCart