import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProducDetail from "../../Components/ProducDetail"
import { ShoppingCartContext } from "../../Context"


function Home() {

  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map((item) =>  (
            <Card key={item.id} data={item}/>
            ))
        )
      } else {
        return (
          <div>No Se Encontro Lo Buscado</div>
        )
      }
    } else {
      return (
        context.items?.map((item) =>  (
          <Card key={item.id} data={item}/>
          ))
      )
    }
  }
  

  return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>          
          <h1 className='font-mendium text-xl'>Exclusive Products</h1>
        </div>
        <input 
          type="text" 
          placeholder="Search a product" 
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
          />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
        </div>
        <ProducDetail/>
      </Layout>
  )
}

export default Home