import React from 'react';
import { SocialIcons } from '../Components';
import PersonalData from '../Components/PersonalData';
import Title from '../Components/Title';
import allImages from '../Images/imgSources';
import '../Styles/CurrDev.css';


const CurrDev = () => {
  const courses = ['Trybe Full-stack Developer (cursando)'];
  const coursesMapping = courses.map((course, index) => <li key={ `${index}-${course}` }>{ course }</li>);
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
    <main className='CurrDev-main' >
      <h1 >EM CONSTRUÇÃO</h1>
      <Title job="dev" />
      <fieldset>
        <legend>Dados pessoais</legend>
        <section>
          <PersonalData />
          <SocialIcons urls={ devUrls } />
        </section>
      </fieldset>
      <fieldset>
        <legend>Dados profissionais</legend>
        <h3>Objetivo: Desenvolvedor Jr.</h3>
        <section className='CurrDev-data-container'>
          <aside className='CurrDev-aside-container'>
            <h4 className='CurrDev-aside-title' > Curso programação: </h4>
            <ul className='CurrDev-courses-ul'>{ coursesMapping }</ul>
          </aside>
          <aside className='CurrDev-aside-container'>
            <h4 className='CurrDev-aside-title'>Tecnologias aprendidas: </h4>
            <section className='CurrDev-grid-container'>
              <h5 style={ { color: 'white' } }>Fundamentos</h5>
              <div className='CurrDev-grid-fundamentals CurrDev-content-grid-container' >
                { fundImgs }
              </div>
            </section>
            <section className='CurrDev-grid-container'>
              <h5>Front-End</h5>
              <div className='CurrDev-grid-front-end CurrDev-content-grid-container'>{ frontEndLogos }</div>
            </section>
            <section className='CurrDev-grid-container'>
              <h5>Back-End</h5>
              <div className='CurrDev-grid-back-end CurrDev-content-grid-container'>{ backEndLogos }</div>
            </section>
          </aside>
        </section>
      </fieldset>
    </main>
  );
};

export default CurrDev;
