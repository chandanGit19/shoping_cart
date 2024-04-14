import './App.css';
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
      <div className='bg-slate-900'>
      <Navbar/>
      </div>
      <div>
        <Routes>
           <Route path="/" element ={<Home/>}/>
           <Route path="/cart" element ={<Cart/>}/>
           <Route path ="/shop/:id" element={<Shop/>}/>


        </Routes>

      </div>
       
    </div>
  );
}

export default App;
