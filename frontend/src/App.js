
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <div className=''>
          
              <Router>  
              <Navbar />
               <Routes>
               <Route path='/' element={<Shop></Shop>} />
               <Route path='/men' element={<ShopCategory category="men"/>}/>
               <Route path='/women' element={<ShopCategory category="women"/>}/>
               <Route path='/kids' element={<ShopCategory category="kids"/>}/>
               <Route path='/products' element={<Product/>}> 
                  <Route path=':id' element={<Product/>}/>
               </Route>
               <Route path='/cart' element={<Cart/>}/> 
               <Route path='/login' element={<LoginSignup/>}/> 
               </Routes>
              </Router>
    </div>
  );
}

export default App;
