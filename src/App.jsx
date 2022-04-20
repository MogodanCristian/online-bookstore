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
            <Route path='/' element={<Home/>} />
            <Route path='/products/categories' element={<ProductList/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/Cart' element={<Cart/>}/>
        </Routes>
     </Router>
  );
};

export default App;