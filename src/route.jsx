import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'

import './styles/style.scss'
import Login from "pages/Login";
import Dashboard from "components/Dashboard";
import Screen1 from "pages/Register/Screen1";
import Screen2 from "pages/Register/Screen2";
import Screen3 from "pages/Register/Screen3";
import Screen4 from "pages/Register/Screen4";
import NotFound from "pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <Home></Home> }/>
          <Route path="/login" element={ <Login></Login> }/>
          <Route path="/register" > 
            <Route path="screen1" index element={<Screen1></Screen1>}></Route>
            <Route path="screen2" element={<Screen2></Screen2>}></Route>
            <Route path="screen3" element={<Screen3></Screen3>}></Route>
            <Route path="screen4" element={<Screen4></Screen4>}></Route>
          </Route>
          <Route path="/dashboard" element={ <Dashboard></Dashboard> }/>
          <Route path="*" element={<NotFound></NotFound>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

