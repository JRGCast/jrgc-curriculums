import { SocialIcon } from 'react-social-icons';
const SocialIcons = ({ urls }) => {
  const iconStyle = {
    height: '30px',
    width: '30px'
  };
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
    width: '20vw'
  };
  const generateIcons = urls.map(url => {
    const separation = url.split('.');
    const theKey = separation[1];
    return (<SocialIcon key={ theKey } url={ url } fgColor='#fff' bgColor='#000'
      style={ iconStyle } />);
  }
  );
  return (
    <section style={ sectionStyle }>
      { generateIcons }
    </section>
  );
};

export default SocialIcons;
