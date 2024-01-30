
import './App.css'
import Button from './components/button/Button'
import Product from './components/product/Product'

function App() {
 const products=[
   {
     id:1,
     name:'máy tính',
     price:100000,
     description: "đẹp"

   },
   {
     id:2,
     name:'điện thoại',
     price:777000,
     description: "bình thường"

   },
   {
     id:3,
     name:'đồng hồ',
     price:500000,
     description: "xấu"

   },
 ]
  return (
    <div >
      <h1>hello ae</h1>
      <Button size="small" />
      <Button size="medium" />
      <Button size="large" />

      {products.map((product)=> <Product key={product.id} {...product}/>) }
    </div>
  )
}

export default App
