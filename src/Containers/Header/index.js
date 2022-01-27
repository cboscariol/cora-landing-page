import './style.css'
import Button from '../../Components/Button';
import logo from '../../assets/images/logo.svg'
import Container from '../../Components/Container';


function Header() {
  return (
    <header className='header'>
      <Container className='header-container'>

        <img src={logo} alt="Cora" />

        <div className='header-menu'>
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
        </div>
      </Container>

    </header>
  );
}

export default Header;
