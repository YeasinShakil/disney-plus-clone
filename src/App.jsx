
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Details from './components/Details'


function App() {
  


  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/details' element={<Details></Details>}></Route>
     </Routes>
    </div>
  )
}

export default App
