import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

import './styles/style.scss'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/">
            <Route index path="/" element={ <Home></Home> }/>
            <Route path="/sobremim" />
          </Route>
          <Route path="posts/:id" ></Route>
          <Route path="*" />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

