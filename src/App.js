import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Error from './pages/Error';
import Menu from './pages/Menu';
import Starters from './pages/Starters';
import Icecream  from './pages/IceCream';
function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Routes>
    
          <Route exact path='/' element={<Login/>}/>
 
          
          <Route element={<Navbar/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/menu' element={<Menu/>}/>
          <Route exact path='/starters' element={<Starters/>}/>
          <Route exact path='/ice-drinks' element={<Icecream/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        
    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
