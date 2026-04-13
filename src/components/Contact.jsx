import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import instagramIcon from '../assets/instgram.png';
import linkedInIcon from '../assets/linkedin.png';
import { EarthCanvas } from './canvas';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_78y4lfs',
      'template_24ks04h',
      {
        from_name: form.name,
        to_name: 'Khaled',
        from_email: form.email,
        to_email: 'khaledwaled@gmail.com',
        message: form.message,
      },
      'Zi_hFJ8w4w0dB-_nb'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong. Please try again.');
      });
  };

  const openSocialLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch </p>

        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='What is your email?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What Do You Want To Say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className='flex flex-wrap items-center gap-4'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>

            <button
              type='button'
              onClick={() => openSocialLink('https://www.instagram.com/khaledwaled17/')}
              className='bg-tertiary p-3 rounded-xl shadow-md shadow-primary transition hover:scale-105'
              aria-label='Open Instagram profile'
            >
              <img
                src={instagramIcon}
                alt='Instagram'
                className='h-6 w-6 object-contain brightness-0 invert'
              />
            </button>

            <button
              type='button'
              onClick={() => openSocialLink('https://www.linkedin.com/in/khaled-waled-5bb562268')}
              className='bg-tertiary p-3 rounded-xl shadow-md shadow-primary transition hover:scale-105'
              aria-label='Open LinkedIn profile'
            >
              <img
                src={linkedInIcon}
                alt='LinkedIn'
                className='h-6 w-6 object-contain brightness-0 invert'
              />
            </button>
          </div>
        </form>
      </div>

      <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
