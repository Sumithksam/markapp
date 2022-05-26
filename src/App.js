import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Studentadd from './components/Studentadd';
import Studentview from './components/Studentview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
  
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Studentadd/>}/>
  <Route path="/view" exact element={<Studentview/>}/>
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
