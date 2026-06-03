import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from "./login";
import { Dashbord } from "./dashbord";
import { Register } from "./register";
import { Navbar } from './components/navbar';
import { Logout } from './logout';


function App()
{
  return(
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Dashbord/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/logout' element={<Logout/>} />
    </Routes>


    </BrowserRouter>
  );
}

export default App;