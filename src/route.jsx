import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'

import './styles/style.scss'
import Login from "pages/Login";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <Home></Home> }/>
          <Route path="/login" element={ <Login></Login> }/>
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

