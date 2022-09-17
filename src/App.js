
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import NavBar from './Pages/NavBar/NavBar';
import GoogleSignIn from './Pages/GoogleSignIn/GoogleSignIn';
import Quiz from './Pages/Dashboard/Quiz';
import Mcq from './Pages/Dashboard/Mcq';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequiredAuth from "./Pages/Dashboard/Dashboard"

function App() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(224,242,254)" }} className='h-screen'>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/googleSignIn' element={<GoogleSignIn />}></Route>
          <Route path='/quiz' element={<Quiz />}></Route>
          <Route path='/mcq' element={<Mcq></Mcq>}></Route>
          <Route path='/dashboard' element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}></Route>
        </Routes>
      </div>

    </>



  );
}

export default App;
