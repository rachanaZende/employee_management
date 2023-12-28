
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Layout/Navbar';
import EmpolyeeData from './pages/EmpolyeeData';
import EmpolyeeList from './pages/EmpolyeeList';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Update from './pages/Update';
import Delete from './pages/Delete';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/empolyeedata' element={<EmpolyeeData/>}></Route>
        <Route path='/empolyeelist'element={<EmpolyeeList/>}></Route>
        <Route path='/empolyee/update/:empolyeeId' element={<Update/>}></Route>
        <Route path='/empolyee/delete/:empolyeeId' element={<Delete/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
