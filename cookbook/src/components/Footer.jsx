import Logo from "../img/Logo.png";
import dribbble from "../img/dribbble.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import youtube from "../img/youtube.png";
import instagram from "../img/instagram.png";

const Footer = () => {
  return (
    <footer id="contact" className="flex flex-col items-center gap-5 pt-10 pb-10  text-center bg-footer">
      <div>
        <img className="w-20" src={Logo} />
      </div>
      <div>
        <h3>Stay in touch</h3>
        <div className="flex gap-3">
          <img src={dribbble} />
          <img src={facebook} />
          <img src={twitter} />
          <img src={youtube} />
          <img src={instagram} />
        </div>
      </div>
      <div className="">
        <p> All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
