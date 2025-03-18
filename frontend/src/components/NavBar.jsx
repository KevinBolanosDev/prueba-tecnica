import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
      <div>
          <nav className='my-4 border-b-blue-800 border-b-3 text-2xl '>
        <ul className='flex justify-center gap-20 my-2'>
          <button className='bg-blue-500 rounded w-36 h-10'>
            <Link to="/">Inicio</Link>
          </button>
          <button className='bg-blue-500 rounded w-36 h-10'>
              <Link to="/articles">Articulos</Link>
          </button>
            <button className='bg-blue-500 rounded w-36 h-10'>
              <Link to="/add">Agregar</Link>
            </button>
          </ul>
      </nav>
    </div>
  )
}
