import './style.css'
import Container from '../../../Components/Container'
import Nav from './Nav'
import DownloadBtn from './Download-btn';
import appAple from './assets/app-store.svg'
import playStore from './assets/play-store.svg'

function Navigation() {
  return (
    <div className='nav'>
      <Container className='nav-container'>
        <div>
          <Nav title='Cora' links={['Sobre Nós', 'Carreiras']} />
          <Nav title='Produtos' links={['Conta PJ', 'Cartão', 'Gestão de Cobranças', 'Boletos', 'Integrações']} />
          <Nav title='Explore' links={['Blog', 'Compre dos Pequenos', 'Por que não cobramos tarifas?']} />
          <Nav title='Suporte' links={['Central de Ajuda', 'meajuda@cora.com.br']} />
        </div>

        <div>
          <div className='download-app'>
            <h4>Baixe o App</h4>
            <div className='download-app-btns'>
              <DownloadBtn text='Play Store' icon={playStore} />
              <DownloadBtn text='App Store' icon={appAple} />
            </div>
          </div>
          <Nav title='Transparência' links={['Termos e condições', 'Política de privacidade']} />
        </div>


      </Container>
    </div>
  );
}

export default Navigation;
