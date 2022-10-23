const Button = ({ title, width, href }) => (
  <a
    href={href}
    data-aos="fade-left"
    className={`w-${width} py-2 px-4 my-2 text-blue rounded-md bg-transparent 
    border-text-gradient dark:border-gray-200 border-2 hover:text-gray-400 ease-in duration-300`}
  >
    {title}
  </a>
);

export default Button;
