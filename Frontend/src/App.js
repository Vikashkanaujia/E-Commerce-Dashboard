
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import Addproduct from './Component/AddProduct';
import PrivateComponent from './Component/PrivateComponent';
import ProductList from './Component/ProductList';
import UpdateProduct from './Component/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<Addproduct/>}/>
        <Route path="/update/:id" element={<UpdateProduct/>}/>
        <Route path="/logout" element={<h1>Logout</h1>}/>
        <Route path="/profile" element={<h1> Profile</h1>}/>
        </Route>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        
       </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
