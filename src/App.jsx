import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom"

const App = () => {
  return (
     <Router>
         <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/products/:category' element={<ProductList/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<Product/>}/>
        </Routes> 
     </Router>
  );
};

export default App;