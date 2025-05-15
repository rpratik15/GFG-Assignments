import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Feedback from './Pages/Feedback'

function App() {


  return (
    <>
    <h2>Todo App</h2>
   
      <nav>
      <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">contact </Link>
        <Link to="/feedback">feedback </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
      </Routes>
    </>
  )
}

export default App
