import { useState } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { send } from 'emailjs-com';
import { toast } from 'react-hot-toast';
import styles from '../style/styles';

const Contact = () => {
  const [toSend, setToSend] = useState({
    user_name: '',
    user_email: '',
    message: '',
    // reply_to: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!toSend.user_name || !toSend.user_email || !toSend.message) {
      return toast.error('Please fill out the form');
    }

    try {
      await send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        toSend,
        process.env.REACT_APP_PUBLIC_KEY,
      );

      toast.success('Email sent successful');
      return setToSend({
        user_nam: '',
        user_email: '',
        message: '',
      });
    } catch (error) {
      console.log(error);
      return toast.error('Failed');
    }
  };

  return (
    <div className="flex flex-col md:flex-row pb-4 container">
      <div className={`${styles.flexColCenter} md:mr-12 mb-8`}>
        <p data-aos="fade-up" className={`dark:text-gray-400  ${styles.paragraph}`}>
          Please, fill out the form in this section. Or place a call between
          8:00a.m. and 7:00p.m. Monday through Saturday.
        </p>
        <div className="w-full mt-[20px]">
          <span data-aos="fade-right" className={styles.contactIconWrapper}>
            <BiCurrentLocation className={`${styles.contactIcon}`} />
            <p className={`${styles.textColor} dark:text-gray-400`}>Port Harcourt, Nigeria</p>
          </span>
          <span data-aos="fade-right" className={styles.contactIconWrapper}>
            <BsTelephoneFill className={`${styles.contactIcon}`} />
            <a href="tel:+2340838888192">
              <p className={`${styles.textColor} dark:text-gray-400`}>+234 803 8888 192</p>
            </a>
          </span>
          <span data-aos="fade-right" className={styles.contactIconWrapper}>
            <MdEmail className={`${styles.contactIcon}`} />
            <a href="mailto:chukumelawilson@gmail.com">
              <p className={`${styles.textColor} dark:text-gray-400`}>wilmela2@gmail.com</p>
            </a>
          </span>
        </div>
      </div>

      <form data-aos="fade-left" onSubmit={submitForm} className="md:ml-12 lg:ml-20">
        <label htmlFor="name" className={`${styles.formLabel}`}>
          Name
          <input
            className={styles.inputStyle}
            value={toSend.user_name}
            type="text"
            name="user_name"
            placeholder="Full Name"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email" className={`${styles.formLabel}`}>
          Email
          <input
            className={styles.inputStyle}
            value={toSend.user_email}
            type="email"
            name="user_email"
            placeholder="email"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="message" className={`${styles.formLabel}`}>
          Message
          <textarea
            className={styles.inputStyle}
            value={toSend.message}
            type="text"
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
          />
        </label>
        <button
          className="w-full py-2 mt-4 px-4 text-white bg-blue border-none hover:bg-[#4296df] ease-in duration-300"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>

  );
};

export default Contact;
