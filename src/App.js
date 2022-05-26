
import './css/App.css';
import './css/myStyle.css';
import MyHeader from './components/MyHeader';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Aboutus from './components/Aboutus';
import Form from './components/Form';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
   
   <MyHeader/>
   <Nav />
   <Routes>
   <Route path="/about" element={<Aboutus/>}/>
   <Route path="/" element={<Home/>}/>
   <Route path="/fish" element={<Form/>}/>
   </Routes>
   
   <Footer/>
    </BrowserRouter>
  
  </>
  );
}

export default App;
