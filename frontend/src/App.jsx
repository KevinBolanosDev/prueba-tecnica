import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Articles from './components/Articles'
import Home from './components/Home'
import FormAdd from './components/FormAdd'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/add" element={<FormAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
