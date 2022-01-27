import './style.css'
import Container from '../../Components/Container'
import secondaryLogo from '../../assets/images/secondary-logo.png'


function SubMain() {
  return (
    <Container className="sub-main-container">

      <div className="sub-text-box">
        <p> Aenean pretium varius posuere.
          Aenean porttitor elementum tristique.
          Etiam eget metus lobortis.
        </p>
        <p> Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
      </div>

      <img src={secondaryLogo} alt="cora-logo" />

    </Container>
  );
}

export default SubMain;
