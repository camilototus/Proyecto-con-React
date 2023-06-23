import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import Layout from "../../Components/Layout"
import OrderCart from '../../Components/OrderCart'

function MyOrder() {
  const context = useContext(ShoppingCartContext)

    return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-6'>
          <Link to='/my-orders' className='absolute left-0'>
        <ChevronDoubleLeftIcon 
          className="cursor-pointer h-6 w-6 text-black"/>
          </Link>
          <h1>My Order</h1>
        </div>
        <div className='flex flex-col w-80'>                
            {
                context.order?.slice(-1)[0].products.map(product => (
                    <OrderCart 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    />
                ))
            }
            </div>
      </Layout>
    )
  }
  
  export default MyOrder