
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SingleProduct from './pages/SingleProduct'
import ShoppingCart from './pages/ShoppingCart'
import Checkout from './pages/Checkout'
import ContactDetailsPage from './pages/ContactDetailsPage'
import OrderConfirmed from './pages/OrderConfirmed'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/cart' Component={ShoppingCart} />
          <Route path='/cart/checkout' Component={Checkout} />
          <Route path='/contact-details' Component={ContactDetailsPage} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/order-confirmed' element={<OrderConfirmed />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
