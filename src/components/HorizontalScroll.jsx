import { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';
import styles from '../style/styles';
import { works } from '../data';
import Work from './Work';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <BiArrowToLeft
      className={`${styles.contactIcon} ${styles.scrollIcon} right-[80px]`}
      onClick={() => scrollPrev()}
    />
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <BiArrowToRight
      className={`${styles.contactIcon} ${styles.scrollIcon} right-[20px]`}
      onClick={() => scrollNext()}
    />
  );
};

const HorizontalScroll = () => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {works.map((work, index) => (
      <Work
        index={index}
        key={work.id}
        image={work.image}
        title={work.title}
        desc={work.desc}
        live={work.preview ? work.live : 'Not live'}
        code={work.code}
      />
    ))}
  </ScrollMenu>
);

export default HorizontalScroll;
