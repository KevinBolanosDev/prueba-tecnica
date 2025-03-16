import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Articles from './components/Articles'
import NavBar from './components/NavBar'
import FormAdd from './components/FormAdd'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/add" element={<FormAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
