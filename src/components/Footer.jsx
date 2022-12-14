import Contact from './Contact';
import styles from '../style/styles';
import SocialIcons from './SocialIcons';

const Footer = () => (
  <div id="contact" className="pt-[5rem]">
    <div className="w-full">
      <h1
        data-aos="fade-up"
        className={`${styles.headerText} mb-0 container`}
      >
        Get In Touch
      </h1>

      <Contact />
    </div>
    <div
      className={` ${styles.flexColCenter} w-full h-[250px] md:h-[350px] text-primary bg-gray-400 dark:text-gray-400 text-lg dark:bg-primary2 mt-8`}
    >
      <a href="https://github.com/Wilmela/my-portfolio" target="_blank" rel="noopener noreferrer">
        &copy;
        {new Date().getFullYear()}
        {' '}
        Made with ❤️ by Mela
      </a>
      <SocialIcons className="text-sm bg-inherit" />
    </div>
  </div>
);

export default Footer;
