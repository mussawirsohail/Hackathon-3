
import { getProducts } from '@/sanity/lib/sanity'
import Products from './component/Products'
import Home2 from './MainPage/page'


export default async function Home() {
  const products = await getProducts()

  return (
    <>
  
     <Home2/>
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Product Catalog</h1>
      <Products products={products}/>

    </main>
    </>
  )
}

