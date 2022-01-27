import Button from '../../Components/Button'
import bannerImage from '../../assets/images/banner-image.png'
import Container from '../../Components/Container';
import './style.css'

function Main() {
  return (
    <Container className='main-container'>
      <div className='main'>
        <h1>Lorem ipsum dolor sit adipiscing elit.</h1>
        <Button textButton='Quero Ser Cora' color='secondary' />
      </div>
      <img className='main-img' src={bannerImage} alt="banner" />
    </Container>
  );
}

export default Main;
