import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './Contact';
import Movies from './components/Movies';
import Api from './components/Api';




function App() {
  return (
    <>
<Router>

  <Navbar/>
  <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/About'element={<About/>}/>
    <Route path='/Movies' element={<Movies/>}/>
    <Route path='/Service'element={<Service/>}/>
    <Route path='/Api'element={<Api/>}/>
    <Route path='/Contact'element={<Contact/>}/>
    

     </Routes>
</Router>
    </>
     );
}

export default App;
