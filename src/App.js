import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Shop />}></Route>
       <Route path='/home' element={<Shop />}></Route>
       <Route path='/inventory' element={<Inventory />}></Route>
       <Route path='/order' element={<Order />}></Route>
       <Route path='/about' element={<About />}></Route>
     </Routes>
    </div>
  );
}

export default App;
