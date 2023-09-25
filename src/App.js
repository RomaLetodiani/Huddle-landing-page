import { Content } from './Components/Styled';
import logo from './images/logo.svg';
import illustration from './images/illustration-mockups.svg';
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
} from 'react-icons/bi';

function App() {
  return (
    <>
      <Content>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <main>
          <img src={illustration} alt="illustration" />
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button>Register</button>
          </div>
        </main>
        <footer>
          <div>
            <a target="__blank" href="https://www.facebook.com/LetodianiRoma">
              <BiLogoFacebook />
            </a>
            <a
              target="__blank"
              href="https://www.linkedin.com/in/letodiani-roma/"
            >
              <BiLogoLinkedin />
            </a>
            <a
              target="__blank"
              href="https://www.instagram.com/roma.letodiani/"
            >
              <BiLogoInstagram />
            </a>
          </div>
        </footer>
      </Content>
    </>
  );
}

export default App;
