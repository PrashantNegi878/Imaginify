import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AboutUs from './about/about';
import HaveAStory from './haveastory/haveastory';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="myApp">
      <img className="bg" src="./bg.jpg" alt=""></img>
      <div className="content">
      <Routes>
        <Route path="/" element={<HaveAStory/>} />
        <Route path="about" element={<AboutUs />} />
        {/* </Route> */}
      </Routes>
      </div>
    </div>
  )
}

export default App
