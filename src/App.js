
import './css/App.css';
import './css/myStyle.css';
import MyHeader from './components/MyHeader';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Aboutus from './components/Aboutus';
import Form from './components/Form.jsx';
import Bar from './components/Bar';
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
   <Route path="/bar" element={<Bar />}/>
   </Routes>
   
   <Footer/>
    </BrowserRouter>
  
  </>
  );
}

export default App;
