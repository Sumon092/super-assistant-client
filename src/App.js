
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import NavBar from './Pages/NavBar/NavBar';
import GoogleSignIn from './Pages/GoogleSignIn/GoogleSignIn';

function App() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(224,242,254)" }}>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/googleSignIn' element={<GoogleSignIn />}></Route>
        </Routes>
      </div>

    </>



  );
}

export default App;
