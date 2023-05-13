import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Searchbar from './Compoents/searchbar/Searchbar';
import Secondpart from './Compoents/secondpart/Secondpart';
import Lastpart from './Compoents/lastpart/Lastpart';
import Home from './pages/Home';
import Loader from './Compoents/loader/Loader';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Searchbar/>}/>
        <Route path='/secondpart' element={<Secondpart/>}/>
        <Route path='/lastpart' element={<Lastpart/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/loader' element={<Loader/>}/>

        
        
      


      </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
