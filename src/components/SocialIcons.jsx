import { FaGithub, FaTwitter, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from '../style/styles';

const SocialIcons = ({ className }) => (
  <div className={`${styles.flexCenter} mt-4 pb-12 gap-5`}>
    <div
      data-aos="fade-left"
      className={`${styles.socialStyle} ${className}`}
    >
      <a
        href="https://github.com/Wilmela"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
    <div
      data-aos="fade-up"
      className={`${styles.socialStyle} ${className}`}
    >
      <a
        href="https://twitter.com/tunizzle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
    <div
      data-aos="fade-down"
      className={`${styles.socialStyle} ${className}`}
    >
      <a href="mailto:chukumelawilson@gmail.com">
        <MdEmail />
      </a>
    </div>
    <div
      data-aos="fade-up"
      className={`${styles.socialStyle} ${className}`}
    >
      <a href="tel:(+234)8038888192" target="_blank" rel="noopener noreferrer">
        <FaPhone />
      </a>
    </div>
  </div>
);

export default SocialIcons;
