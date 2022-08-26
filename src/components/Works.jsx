// import Work from './Work';
// import { works } from '../data';
import styles from '../style/styles';
import HorizontalScroll from './HorizontalScroll';

const Works = () => (
  <div id="works" className={`w-full ${styles.flexColCenter}`}>
    <h1
      data-aos="fade-up"
      className={styles.headerText}
    >
      Recent Works
    </h1>
    {/* <div className="w-full py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 "> */}
    <div className="w-full relative h-[450px]">
      <HorizontalScroll />
    </div>
    {/* </div> */}
    <hr className="w-full bg-blue" />
  </div>
);

export default Works;
