import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/home' element={<Home/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/register' element={<Register/>} />
     <Route path='/about' element={<About/>} />
     <Route path = '/blog' element={<Blog/>}/>
     <Route path="/checkout" element={
       <RequireAuth>
         <Checkout/>
       </RequireAuth>
     }/>
   </Routes>
    </div>
  );
}

export default App;
