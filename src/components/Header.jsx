import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px - [5%] bg-black">
      <h1 className= "logo p-2 text - [2rem] font-bold cursor-pointer">
        LOJA <span className= "text-green-400">GAMER</span></h1>
      <nav>
        <ul className= 'flex list-none items-center py-6 px- [5%] bg-black'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jogos">Jogos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
