import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../Components/Layout"
import OrdersCart from "../../Components/OrdersCart"
import { ShoppingCartContext } from '../../Context'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

    return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>          
          <h1 className='font-mendium text-xl'>My Orders</h1>
        </div>
        {
          context.order.map((order, index) => ( 
            <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCart 
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            />
            </Link>           
          ))
        }
      </Layout>
    )
  }
  
  export default MyOrders