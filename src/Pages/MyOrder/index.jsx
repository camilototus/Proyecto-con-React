import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from "../../Components/Layout"
import OrderCart from '../../Components/OrderCart'

function MyOrder() {
  const context = useContext(ShoppingCartContext)

    return (
      <Layout>
        My Order
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