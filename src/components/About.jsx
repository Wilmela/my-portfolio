// import { images } from '../constants';
import Button from './Button';
import Skills from './Skills';
import styles from '../style/styles';

const About = () => (
  <div
    id="about"
    className={`w-full ${styles.flexColCenter} md:flex-row `}
  >
    <div className={`${styles.flexColCenter}`}>
      <h1
        data-aos="fade-up"
        className={styles.headerText}
      >
        About Me
      </h1>
      <p
        data-aos="fade-up"
        className={styles.paragraph}
      >
        I strive for excellence and precision at all time, contributing the
        best of my ability and quota to improving organizational objective and
        achieving all goals set and target.
      </p>
      <Skills />
      <p
        data-aos="fade-right"
        className="w-full my-4 md:mb-6 md:mt-8 text-start
         font-normal text-black dark:text-gray-400 text-xl"
      >
        Do you need your job completed in an elegant fashion?
      </p>

      <span className="mt-12 md:my-6 self-start">
        <Button title="Reach Me" href="#contact" />
      </span>
    </div>
  </div>
);

export default About;
