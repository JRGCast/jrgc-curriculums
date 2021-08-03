import Emoji from './Emoji';
const PersonalData = () => {
  const fontWeight = { fontWeight: '700' };
  const allIdioms = ['Português - nativo', 'Inglês - avançado', 'Alemão - iniciante'];
  const mapIdioms = allIdioms.map((idiom, index) => {
    if (index === allIdioms.length - 1) return `${idiom}.`;
    return `${idiom}, `;
  });
  return (
    <section>
      <h2 className='title'>JOÃO RALPH GONÇALVES CASTALDI</h2>
      <p>
        <span style={ fontWeight }>Endereço: </span>
        SHIS QL 24, conjunto 06, casa 15, bairro Lago Sul, CEP 71.665-065, Brasília-DF
      </p>
      <p>
        <span style={ fontWeight }>Telefones: </span>
        <Emoji unicode='U+1F4F2' label='mobile phone' /> (61) 9 8242-3750 / { '' }
        <Emoji unicode='U+260E' label='phone' /> (61) 3367-1247;
      </p>
      <p>
        <span style={ fontWeight }>Endereço eletrônico: </span>
        joao.ralph1@gmail.com
      </p>
      <p>
        <span style={ fontWeight }>Idiomas: </span>
        { mapIdioms }
      </p>
    </section>);
};

export default PersonalData;
