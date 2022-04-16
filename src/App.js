import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/home' element={<Home/>} />
   </Routes>
    </div>
  );
}

export default App;
