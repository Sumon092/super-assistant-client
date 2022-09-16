
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import NavBar from './Pages/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/home' element={<Home></Home>}></Route> */}

      </Routes>
    </>



  );
}

export default App;
