import React from 'react';
import { SocialIcons, Title } from '../Components';
import PersonalData from '../Components/PersonalData';
import '../Styles/CurrAdv.css';

const CurrAdv = () => {
  const advUrls = [
    'https://www.linkedin.com/in/joao-ralph-castaldi/',
    'https://www.facebook.com/jcastaldiadv',
    'https://www.instagram.com/jcastaldiadv/'];
  const qualifications = ['Especialização na área criminal', 'Atuação majoritária nas áreas criminal, consumidor e família', 'Experiência em todas as demais áreas', 'Experiência em escritórios (1 ano como advogado associado)', 'Transporte próprio'];
  const academicFormation = ['2015 - Bacharelado em direito Instituto de Educação Superior de Brasília', '2018 - Pós-graduação em Direito Penal e Direito Processual Penal pela Verbo Jurídico', '2018 - Pós-graduação em Direito Processual Civil pela Verbo Jurídico'];
  const mapping = (array) => array.map(elem => <li style={ {
    paddingRight: '0',
    textAlign: 'left'
  } }>{ elem };</li>);
  return (
    <main className='CurrAdv'>
      <h1>EM CONSTRUÇÃO</h1>
      <Title job="adv" />
      <fieldset>
        <legend>Dados pessoais</legend>
        <PersonalData />
        <SocialIcons urls={ advUrls } />
      </fieldset>
      <fieldset>
        <legend>Dados profissionais</legend>
        <section className='section-container'>
          <aside >
            <h4 > Síntese das qualificações profissionais:</h4>
            <ul >
              { mapping(qualifications) }
            </ul>
          </aside>
          <aside>
            <h4>Formação Academica: </h4>
            <ul >
              { mapping(academicFormation) }
            </ul>
          </aside>
        </section>
      </fieldset>
    </main>
  );
};

export default CurrAdv;
