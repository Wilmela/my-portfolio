import styles from '../style/styles';
import { works } from '../data';

const Work = ({
  index, image, title, desc, live, code,
}) => (
  <div
    className={`w-[200px] xs:w-[255px] h-[400px] max-h-[400px] lg:w-[300px] my-12 ${
      index !== works.length - 1 ? 'mr-12' : 'mr-0'
    } max-h-[350px] ${styles.flexColCenter} p-4
    dark:border-[0.01px] dark:border-blue dark:border-opacity-[0.25]  rounded-md shadow-md hover:scale-105 cursor-pointer bg-[#fafafa] dark:bg-gradient-to-r from-primary2 to-gray-900`}
  >
    <a href={live} target="_blank" rel="noopener noreferrer">
      <div className="pb-4">
        <img src={image} alt="project" className="max-h-[250px] w-full" />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-blue dark:text-white">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-dimWhite font-normal pb-4 text-center">
          {desc}
        </p>
      </div>
    </a>
    <div className={`w-full flex ${styles.flexCenter} py-4 px-4`}>
      <a
        href={code}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-gray-700 dark:text-dimWhite py-2 rounded-md border-2 w-full hove:scale-105"
      >
        code
      </a>
    </div>
  </div>
);

export default Work;
