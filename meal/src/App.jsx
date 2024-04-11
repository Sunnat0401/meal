import React from 'react'
import HomePages from './Pages/HomePages/HomePages'
import './App.css'
import {Route ,Routes} from "react-router-dom";
import Fillial from './Pages/Fillial/Fillial';
import Info from './Pages/Info/Info';
import Contact from './Pages/Contact/Contact';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/fillial" element={<Fillial/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </div>
  )
}

export default App