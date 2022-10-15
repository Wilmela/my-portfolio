import { images } from '../constants';

export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'works', title: 'Works' },
  { id: 'about', title: 'About' },
  { id: 'contact', title: 'Contact' },
];

export const works = [
  {
    id: 1,
    image: images.ogcoinmini,
    title: 'OGCOIN-MINI',
    desc: 'Built with Reactjs, Tailwindcss and Redux Toolkit',
    live: 'https://ogcoin-mini.netlify.app/',
    code: 'https://github.com/Wilmela/ogcoin_mini',
    preview: true,
  },
  {
    id: 2,
    image: images.buyMeACoffee,
    title: 'BUY ME A COFFEE DE-FI',
    desc: 'Built with Reactjs, Solidity and Hardhat',
    live: 'https://github.com/Wilmela/buyMeACoffee_De-fi',
    code: 'https://github.com/Wilmela/buyMeACoffee_De-fi',
    preview: false,
  },
  {
    id: 3,
    image: images.estate,
    title: 'REALESTATE',
    desc: 'Built with Nextjs and Chakra-UI',
    live: 'https://r-estate.vercel.app/',
    code: 'https://github.com/Wilmela/realestate',
    preview: true,
  },
  {
    id: 4,
    image: images.gym,
    title: 'KEEP FIT',
    desc: 'Built with React.js and material-UI',
    live: 'https://kiipfit.netlify.app',
    code: 'https://github.com/Wilmela/exercise_app',
    preview: true,
  },
  {
    id: 5,
    image: images.weather,
    title: 'F-CASTER',
    desc: 'Built with React.js, Css and Framer Motion',
    live: 'https://f-caster.netlify.app',
    code: 'https://github.com/Wilmela/weather-check',
    preview: true,
  },
  {
    id: 6,
    image: images.blogDesktop,
    title: 'Blogger',
    desc: 'Built with React.js, mongoDB and express.js.',
    live: 'Go live',
    code: 'https://github.com/Wilmela/blog',
    preview: false,
  },
];

export const frontEnd = [
  { id: 1, image: images.html },
  { id: 2, image: images.css },
  { id: 3, image: images.javascript },
  // { id: 4, image: images.typescript },
  { id: 5, image: images.react },
];
export const backEnd = [
  { id: 1, image: images.node },
  { id: 2, image: images.mongodb },
  { id: 4, image: images.express },
  { id: 5, image: images.graphql },
];
export const deployment = [
  { id: 1, image: images.git },
  { id: 2, image: images.github },
  // { id: 4, image: images.redux },
];
