import { BiArrowToTop } from 'react-icons/bi';
import Contact from './Contact';
import styles from '../style/styles';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const scrollToTop = () => {
    window.scroll({ top: 100, left: 100, behavior: 'smooth' });
  };
  return (
    <div id="contact" className="pt-[5rem]">
      <div className="w-full">
        <h1
          data-aos="fade-up"
          className={`${styles.headerText} mb-0 container`}
        >
          Get In Touch
        </h1>

        <Contact />
        <p
          onClick={scrollToTop}
          className={`w ${styles.flexEnd} mt-2 container`}
        >
          <BiArrowToTop className={`${styles.contactIcon} animate-bounce`} />
        </p>
      </div>
      <div
        className={` ${styles.flexColCenter} w-full h-[250px] text-primary bg-gray-400 dark:text-gray-400 text-lg dark:bg-primary2 mt-8`}
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
};

export default Footer;
