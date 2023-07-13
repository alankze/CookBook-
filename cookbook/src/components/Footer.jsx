import Logo from "../img/Logo.png";
import dribbble from "../img/dribbble.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import youtube from "../img/youtube.png";
import instagram from "../img/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={Logo} />
      </div>
      <div>
        <h3>Stay in touch</h3>
        <div>
          <img src={dribbble} />
          <img src={facebook} />
          <img src={twitter} />
          <img src={youtube} />
          <img src={instagram} />
        </div>
      </div>
      <div>
        <p> All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
