import { useEffect, useState } from 'react';
import AOS from 'aos';
import { Toaster } from 'react-hot-toast';
import {
  Navbar, Header, Works, About, Footer,
} from './components';
import styles from './style/styles';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [darkTheme, setDarkTheme] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <div className={`w-full overflow-hidden ${darkTheme ? 'dark' : ''}`}>

      <Toaster
        position="topRight"
        toastOptions={{
          style: {
            fontSize: '1rem',
          },
        }}
      />

      <div className="bg-[#fafafa] dark:bg-primary dark:text-white">

        <Navbar darkTheme={darkTheme} visible={visible} setVisible={setVisible} setDarkTheme={setDarkTheme} />

        <div className="container">
          <Header visible={visible} />
        </div>

        <div className={`w-full bg-[#eee] dark:bg-[rgba(0,0,0,0.1)] ${styles.flexCenter} dark:bg-transparent`}>
          <div className="container">
            <Works />
          </div>
        </div>

        <div className="container">
          <About />
        </div>

        <div className="w-full bg-[#eee] dark:bg-primary">
          <Footer visible={visible} />
        </div>
      </div>
    </div>
  );
};

export default App;
