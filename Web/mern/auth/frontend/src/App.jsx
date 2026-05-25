import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from "./login";
import { Dashbord } from "./dashbord";
import { Register } from "./register";
import { Navbar } from './components/navbar';


function App()
{
  return(
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Dashbord/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>


    </BrowserRouter>
  );
}

export default App;