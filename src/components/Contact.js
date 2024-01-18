import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';


export const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('true');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  if (!name.trim() || !email.trim() || !message.trim()) {
    setNotificationMessage('Please enter details !');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
    return;
  }

    emailjs.sendForm('service_cinu1ab', 'template_npe5tf5', form.current, 'sfj8vyq4e_obbNEVW')
      .then((result) => {
        console.log(result.text);
        setNotificationMessage('Message Sent !');
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
      }, (error) => {
        console.log(error.text);
        setNotificationMessage('Oops! Message not sent !')
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  const notificationStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#000000', 
    color: '#ffffff', 
    padding: '15px',
    border: '1px solid #000000',
    borderRadius: '4px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0)',
    zIndex: 1000,
    textAlign: 'center',
    maxWidth: '500px'
  };


  return (

    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          {showNotification && (
            <div style={notificationStyle}>
              {notificationMessage}
            </div>
          )}
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-[32px] uppercase text-accent mb-2 tracking-wide font-bold'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Contact<br /> Me !
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-gray focus:border-accent transition-all'
              type='text'
              name='from_name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Your name'
              style={{ borderBottomColor: '#000000' }}
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-gray focus:border-accent transition-all'
              type='email'
              name='email'
              placeholder='Your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderBottomColor: '#000000' }}
            />
            <textarea
              className='bg-transparent border-b py-10 outline-none w-full placeholder:text-gray focus:border-accent transition-all resize-none mb-12'
              name='message'
              placeholder='Your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ borderBottomColor: '#000000' }}
            ></textarea>
            <button type="submit" className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
