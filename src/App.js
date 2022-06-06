import "./App.css";
import {Route,Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Products} from "./components/Products";
import {Product} from "./components/Products/Product";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";
function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
            <Route path='/' element={<RequiredAuth><Home/></RequiredAuth>}></Route>
            <Route path="/products/*" element={<Products/>}>
              <Route path=":id" element={<Product/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
