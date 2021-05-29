import React from 'react';
import { Emoji, SocialIcons, Title } from '../Components';


const CurrAdv = () => {
  const qualifications = ['Especialização na área criminal', 'Atuação majoritária nas áreas criminal, consumidor e família', 'Experiência em todas as demais áreas', 'Experiência em escritórios (1 ano como advogado associado)', 'Transporte próprio'];
  const academicFormation = ['Bacharel em direito desde 2015 pelo IESB (Instituto de Educação Superior de Brasília)', 'Pós-graduação em Direito Penal e Direito Processual Penal pela Verbo Jurídico'];
  const idioms = ['Inglês'];
  const mapping = (array) => array.map(qual => <li style={{ listStyleType: 'disclosure-closed', textAlign: 'left' }}>{qual};</li>)
  return (
    <main>
      <h1>EM CONSTRUÇÃO</h1>
      <Title job="adv">
      </Title>
      <fieldset>
        <legend>Dados pessoais</legend>
        <section>
          <h2>JOÃO RALPH GONÇALVES CASTALDI</h2>
          <p><span style={{ fontWeight: 'bold' }}>Endereço: </span>SHIS QL 24, conjunto 06, casa 15, bairro Lago Sul, CEP 71.665-065, Brasília-DF</p>
          <p><span style={{ fontWeight: 'bold' }}>Telefones: <Emoji unicode='U+1F4F2' label='mobile phone'></Emoji> </span>(61) 9 8242-3750 ; <Emoji unicode='U+260E' label='phone'></Emoji> (61) 3367-1247</p>
          <p><span style={{ fontWeight: 'bold' }}>Endereço eletrônico: </span>  joao.ralph1@gmail.com </p>
          <section style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto', width: '20vw' }}>
            <SocialIcons url='https://github.com/JRGCast' />
            <SocialIcons url='https://www.linkedin.com/in/joao-ralph-castaldi/' />
            <SocialIcons url='https://www.facebook.com/jcastaldiadv' />
            <SocialIcons url='https://www.instagram.com/jcastaldiadv/' />
          </section>
        </section>
      </fieldset>
      <fieldset>
        <legend>Dados profissionais</legend>
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <aside style={{ border: '1px solid black', padding: '5px', width: 'fit-content' }}>
            <h4 > Síntese das qualificações profissionais:</h4>
            <ul style={{ display: 'flex', flexFlow: 'column nowrap' }}>
              {mapping(qualifications)}
            </ul>
          </aside>
          <aside style={{ border: '1px solid black', padding: '5px', width: 'fit-content' }}>
            <h4>Formação Academica: </h4>
            <ul style={{ display: 'flex', flexFlow: 'column nowrap' }}>
              {mapping(academicFormation)}
            </ul>
          </aside>
        </section>
      </fieldset>
    </main >
  );
}

export default CurrAdv;
