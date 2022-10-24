import { images } from '../constants';
import Button from './Button';
import styles from '../style/styles';
import SocialIcons from './SocialIcons';

const Header = () => (
  <div className="relative">
    <div
      id="home"
      className="w-full md:py-[5rem] flex flex-col-reverse md:flex-row justify-center md:justify-between"
    >
      <div
        data-aos="fade-left"
        className={`${styles.flexColCenter} md:justify-start md:items-start m-4`}
      >
        <p className={`text-lg my-2 md:pb-6 text-accent2 dark:text-gray-400 font-light ${styles.textColor}`}>
          Hi, I'm
        </p>
        <div className={`${styles.flexColCenter} md:items-start`}>
          <h3 className="text-3xl mt-2 md:mt-0 md:text-6xl text-blue dark:text-white font-bold">
            Mela Wilson
          </h3>
          <p className={`text-xl  md:text-2xl dark:text-gray-400 md:pb-0 md:text-start font-normal my-4 text-center leading-[35px] ${styles.textColor}`}>
            Fullstack web, mobile and blockchain developer.
          </p>
        </div>
        <SocialIcons />
        <Button title="Some Works" href="#works" />
      </div>

      <div className="relative">
        <div
          className={`${styles.flexCenter} rounded-br-full rounded-bl-full
             overflow-hidden`}
        >
          <img
            data-aos="fade-right"
            src={images.passport}
            alt="MELA"
            className="md:w-[300px] md:h-[380px] w-[170px] h-[250px]
              object-cover z-[5]"
          />
          <div className="absolute z-[0] w-[30%] h-[35%] white__gradient" />
          <div className="absolute z-[2] w-[65%] h-[50%] blue__gradient top-30 right-5" />
        </div>
      </div>
    </div>

  </div>
);
export default Header;
