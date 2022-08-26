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
      <div className="w-[80%] m-auto">
        <h1 data-aos="fade-up" className={`${styles.headerText} `}>
          Get In Touch
        </h1>
        <div
          className=" flex flex-col justify-center md:flex-row items-center"
        >
          <Contact />
        </div>
        <p onClick={scrollToTop} className={`w ${styles.flexEnd} mt-2`}>
          <BiArrowToTop className={`${styles.contactIcon} animate-bounce`} />
        </p>
      </div>
      <div
        className={` ${styles.flexColCenter} w-full h-[250px] text-primary bg-gray-400 dark:text-gray-400 text-lg dark:bg-primary2 mt-8`}
      >
        &copy;
        {new Date().getFullYear()}
        {' '}
        Made with ❤️ by Mela
        <SocialIcons className="text-sm bg-inherit" />
      </div>
    </div>
  );
};

export default Footer;
