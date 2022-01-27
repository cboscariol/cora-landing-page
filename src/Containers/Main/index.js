import Button from '../../Components/Button'
import bannerImage from '../../assets/images/banner-image.png'
import Container from '../../Components/Container';

function Main() {
  return (
    <div>
      <Container>
        <div>
          <p></p>
          <Button textButton='Quero Ser Cora' color='secondary' />
        </div>
        <img src={bannerImage} alt="banner" />
      </Container>
    </div>
  );
}

export default Main;
