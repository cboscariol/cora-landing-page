import './style.css'
import Container from '../Container'

function About(props) {
  return (
    <div className='about'>
      <Container className={`about-container ${props.reverse ? 'flex-reverse' : ''}`}>
        <div className='about-text-box'>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
        <img src={props.image} alt="imagem" />
      </Container>
    </div>
  );
}

export default About;
