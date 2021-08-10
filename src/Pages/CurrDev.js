import React, { useState } from 'react';
import { SocialIcons } from '../Components';
import PersonalData from '../Components/PersonalData';
import Title from '../Components/Title';
import allImages from '../Images/imgSources';
import '../Styles/CurrDev.css';


const CurrDev = () => {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const courses = ['DevSamurai - Meu primeiro aplicativo', 'Trybe Full-stack Developer (cursando)'];
  const coursesMapping = courses.map((course, index) => <li key={ `${index}-${course}` }>{ course };</li>);
  const logoStyles = {
    objectFit: 'scale-down',
    width: '5em'
  };

  const imgTdGenerate = (imgArr) => imgArr.map(({ src, alt }) =>

    <img style={ logoStyles } src={ src } alt={ alt } />

  );
  const fundImgs = imgTdGenerate(allImages.fundsImg);
  const frontEndLogos = imgTdGenerate(allImages.frontEndImg);
  const backEndLogos = imgTdGenerate(allImages.backEndImg);
  const devUrls = [
    'https://www.github.com/JRGCast',
    'https://www.linkedin.com/in/joao-ralph-castaldi/',
    'https://www.facebook.com/jcastaldiadv',
    'https://www.instagram.com/jcastaldiadv/'];
  return (
    <main >
      <header>
        <h1 >EM CONSTRUÇÃO</h1>
        <Title job="dev" />
        <fieldset>
          <legend>Dados pessoais</legend>
          <section>
            <PersonalData />
            <SocialIcons urls={ devUrls } />
          </section>
        </fieldset>
      </header>
      <fieldset>
        <ul>Dicas aula 09/08/21:
          <li>Retratar como está sendo feita transição de carreira</li>
          <li>Criar página linkedin em inglês também</li>
        </ul>
        <legend>Dados profissionais</legend>
        <h3>Objetivo: Desenvolvedor Jr.</h3>
        <main className='CurrDev-data-container'>
          <section className='CurrDev-aside-container'>
            <h4 className='CurrDev-aside-title' > Aprendizado: </h4>
            <ul className='CurrDev-courses-ul'>{ coursesMapping }</ul>
          </section>
          <section className='CurrDev-aside-container'>
            <h4 className='CurrDev-aside-title'>Tecnologias aprendidas: </h4>
            <section className='CurrDev-grid-container'>
              <div className='CurrDev-tec-title-container'>
                <h5 style={ { color: 'white' } }>Fundamentos</h5>
              </div>
              <button type='button' onClick={ () => setShowDetails1(!showDetails1) }>{ !showDetails1 ? 'Ver detalhes' : 'Esconder' }</button>
              { showDetails1 ? <div className='CurrDev-grid-fundamentals CurrDev-content-grid-container' > { fundImgs }
              </div> : '' }
            </section>
            <section className='CurrDev-grid-container'>
              <h5>Front-End</h5>
              <div className='CurrDev-grid-front-end CurrDev-content-grid-container'>{ frontEndLogos }</div>
            </section>
            <section className='CurrDev-grid-container'>
              <h5>Back-End</h5>
              <div className='CurrDev-grid-back-end CurrDev-content-grid-container'>{ backEndLogos }</div>
            </section>
          </section>
        </main>
      </fieldset>
    </main>
  );
};

export default CurrDev;
