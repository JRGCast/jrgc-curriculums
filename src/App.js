import { Link } from 'react-router-dom';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <main style={{ textAlign: 'center' }}>
      <nav className='navBar'>
        <Link to='/'>Home</Link>
        <Link to='/curr-adv'>Curriculum Advogado</Link>
        <Link to='/curr-dev'>Curriculum Desenvolvedor</Link>
      </nav>
      <Routes />
    </main>
  );
}

export default App;
