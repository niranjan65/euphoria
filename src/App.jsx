
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SingleProduct from './pages/SingleProduct'
import ShoppingCart from './pages/ShoppingCart'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/cart' Component={ShoppingCart} />
          <Route path='/productlist' element={<ProductList />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
