import logo from 'assets/images/logo-white.png';
import { Wrapper, Logo, Contact } from './style';

const Footer = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Contact>
        <div>support@dropshirt.com</div>
        <div>Amsterdam</div>
      </Contact>
    </Wrapper>
  )
};

export default Footer;
