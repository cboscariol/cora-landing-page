import './style.css'
import Button from '../../Components/Button';
import logo from '../../assets/images/logo.svg'


function Header() {
  return <div className='header-container'>
    <div className='header-box'>
      <img src={logo} alt="Cora" />

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

  </div>;
}

export default Header;
