import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'

import './styles/style.scss'
import Login from "pages/Login";
import Register from "pages/Register";
import Dashboard from "components/Dashboard";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <Home></Home> }/>
          <Route path="/login" element={ <Login></Login> }/>
          <Route path="/register" element={ <Register></Register> }/>
          <Route path="/dashboard" element={ <Dashboard></Dashboard> }/>
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

