import './style.css';
import Container from '../../../Components/Container'
import facebookIcon from '../assets/ic_facebook.svg'
import instagramIcon from '../assets/ic_instagram.svg'
import linkedinIcon from '../assets/ic_linkedin.svg'

function Footer() {
  return (
    <footer className='footer'>
      <Container className='footer-container'>
        <span><strong className='strong'>Cora Pagamentos LTDA.</strong> 4.052.649/0001-78 - Rua Gomes de Carvalho, 1629 - 2º andar - Vila Olímpia, São Paulo, SP</span>
        <div className='social-media-nav'>
          <ul>
            <li>
              <a href="https://www.instagram.com/seja.cora/">
                <img src={instagramIcon} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/seja.cora/">
                <img src={facebookIcon} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/seja-cora/">
                <img src={linkedinIcon} alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
