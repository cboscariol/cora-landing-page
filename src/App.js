import './App.css';
import Header from './Containers/Header';
import Main from './Containers/Main';
import SubMain from './Containers/SubMain';
import Banner from './Containers/Banner'
import About from './Components/About';
import Footer from './Containers/Footer'
import about01 from './assets/image/about-01.png'
import about02 from './assets/image/about-02.png'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SubMain />
      <Banner />
      <About
        title='Vivamus at vestibulum tellus. Phasellus sit amet.'
        text='Aenean pretium varius posuere. Aenean porttitor elementum tristique. Etiam eget metus lobortis, 
        ultricies nisl vitae, tempus felis. Proin lacinia justo non elit semper consequat.'
        image={about01} />
      <About
        title='Ut vel laoreet magna, tempor finibus augue.'
        text='Aenean pretium varius posuere. Aenean porttitor elementum tristique. Etiam eget metus lobortis, 
      ultricies nisl vitae, tempus felis. Proin lacinia justo non elit semper consequat.'
        image={about02}
        reverse />
      <Footer />
    </div>
  );
}

export default App;
