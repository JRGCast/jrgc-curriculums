import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <header>
        <h1>Olá, seja muito bem-vindo ou bem-vinda à minha página curricular! <span role='img' aria-label='beaming face with smiling eyes'>😁</span></h1>
      </header>
      <nav >
        <Link to='/curr-dev'>Ver currículo desenvolvedor</Link> <br />
        <Link to='/curr-adv'>Ver currículo advogado</Link>
      </nav>
    </main>
  );
}

export default Home;
