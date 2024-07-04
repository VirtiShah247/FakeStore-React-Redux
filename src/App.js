import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from "./components/Header";
import { Login } from './components/login';
import { ProductDetails } from './components/ProductDetails';
import { Products } from './components/Products';
import { Cart } from './components/Cart';
import { useSelector } from 'react-redux';
function App() {
  const auth = useSelector(state => state.authReducer.isAuth);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path="/cart" element={auth ? <Cart /> : <Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
