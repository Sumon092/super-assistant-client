
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import NavBar from './Pages/NavBar/NavBar';
import GoogleSignIn from './Pages/GoogleSignIn/GoogleSignIn';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequiredAuth from "./Pages/Dashboard/Dashboard"
import Mcq from './Pages/Dashboard/Mcq';
import ShortQ from './Pages/Dashboard/ShortQ';
import AddQ from './Pages/Dashboard/AddQ';

function App() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(224,242,254)" }} className='h-screen'>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/googleSignIn' element={<GoogleSignIn />}></Route>

          <Route path='/dashboard' element={
            <RequiredAuth>
              <Dashboard></Dashboard>
            </RequiredAuth>}>
            <Route path='mcq' element={<Mcq />}></Route>
            <Route path='shortQ' element={<ShortQ />}></Route>
            <Route path='questions' element={<AddQ />}></Route>
          </Route>
        </Routes>
      </div>

    </>



  );
}

export default App;
