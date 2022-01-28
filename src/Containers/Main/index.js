import Button from '../../Components/Button'
import initialImage from '../../assets/images/initial-image.png'
import Container from '../../Components/Container';
import './style.css'

function Main() {
  return (
    <div className='main'>
      <Container className='main-container'>
        <div className='main-text'>
          <h1>Lorem ipsum dolor sit adipiscing elit.</h1>
          <Button textButton='Quero Ser Cora' color='secondary' />
        </div>
        <img className='main-img' src={initialImage} alt="banner" />
      </Container>
    </div>
  );
}

export default Main;
