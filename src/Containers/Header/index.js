import './style.css'
import Button from '../../Components/Button';
import logo from './assets/logo.svg'
import Container from '../../Components/Container';
import menuOpen from './assets/menu-burguer.svg'
import closeMenu from './assets/close.svg'
import { useState } from 'react'


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header className='header'>
      <Container className='header-container'>

        <img className='header-container-img' src={logo} alt="Cora" />

        <div className={`header-menu ${showMenu ? 'open' : ''}`}>
          <ul className='hearder-navigate'>
            <li><a href="/">Conta digital</a></li>
            <li><a href="/">Cartão</a></li>
            <li><a href="/">Gestão de cobranças</a></li>
            <li><a href="/">Sobre nós</a></li>
            <li><a href="/">Soluções Integradas</a></li>
          </ul>

          <div className='header-actions'>
            <a href="/">Login</a>
            <Button textButton='Quero Ser Cora' color='primary' />
          </div>

        </div >
        <button className='responsive-menu-button' onClick={toggleMenu}>
          <img src={showMenu ? closeMenu : menuOpen} alt="menu" />
        </button>

      </Container>

    </header>
  );
}

export default Header;
