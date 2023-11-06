import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Home } from './components/Home';
import { Login } from './components/login';
import { ProductDetails } from './components/ProductDetails';
import { Products } from './components/Products';
function App() {
  return (
  
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path = '/login' element = {<Login/>} />
        <Route path='/' element = {<Products/>} />
        <Route path = '/products/:id' element = {<ProductDetails />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
