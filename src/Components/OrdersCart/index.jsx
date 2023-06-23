import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCart = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center mb-3 border-black">
                <p className=''>
                    <span>01.02.23</span>
                    <span>{totalPrice}</span>
                    <span>{totalProducts}</span>
                </p>
        </div>
    )
}

export default OrdersCart