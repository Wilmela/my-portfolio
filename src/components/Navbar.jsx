import { useState } from 'react';
import { HiX, HiMenu } from 'react-icons/hi';
import styles from '../style/styles';
import { navLinks } from '../data';
import RESUME from '../assets/blogDesktop.png';

function Navbar({ darkTheme, setDarkTheme }) {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState('Home');

  return (
    <nav className="w-full p-4 md:px-16 z-10 flex justify-between items-center  lg:justify-between bg-white md:bg-[#fafafa] dark:bg-primary">

      <div className="md:hidden">
        {toggle ? (
          <HiX
            size={32}
            className="text-blue dark:text-dimWhite cursor-pointer"
            cursor="pointer"
            onClick={() => setToggle(false)}
          />
        ) : (
          <HiMenu
            size={32}
            className="text-blue dark:text-dimWhite cursor-pointer"
            cursor="pointer"
            onClick={() => setToggle(true)}
          />
        )}

        {/* Mobile */}
        <div>
          {toggle && (
          <div
            data-aos="fade-right"
            className={`${!toggle ? 'hidden' : 'flex'} w-[80%] h-screen pt-4 px-8 absolute top-[65px]
            left-0 bg-gray-300 dark:bg-primary2 shadow-md z-10 rounded-sm`}
          >

            <ul className={`w-full h-full ${styles.flexColCenter}`}>
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  onClick={() => {
                    setIsActive(item.title);
                    setToggle((prev) => !prev);
                  }}
                  className={`m-6 ${styles.navText} ${
                    isActive === item.title
                      ? 'border-b-2 border-secondary dark:border-gray-400'
                      : ''
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </ul>
          </div>
          )}
        </div>
      </div>

      {/* Desktop */}
      <div className={`flex-1 hidden md:flex ${styles.flexStart}`}>
        {navLinks.map((item, i) => (
          <a
            key={i}
            href={`#${item.id}`}
            onClick={() => {
              setIsActive(item.title);
              setToggle((prev) => !prev);
            }}
            className={`mr-8 ${styles.navText} ${
              isActive === item.title ? 'border-b-2 border-gray-400' : ''
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>

      <div className="flex justify-end items-center">
        <a href={RESUME} download className={`${styles.navText}`}><p className="font-normal py-[0.7px] dark:hover:text-blue">RESUME</p></a>
        <div className={`${styles.flexCenter} cursor-pointer ml-2 }`}>
          <button type="button" onClick={() => setDarkTheme((prev) => !prev)}>
            {darkTheme ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
