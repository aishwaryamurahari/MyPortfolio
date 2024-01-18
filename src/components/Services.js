import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaNode,
  FaDatabase,
  FaAngular,
} from 'react-icons/fa';
import { fadeIn } from '../variants';

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {' '}
        {/* Added responsive padding */}
        {/* Top Center Heading */}
        <div className="flex justify-center mt-4 lg:mt-8 mb-10">
          <h2 className="text-[32px] sm:text-[40px] font-extrabold text-accent mb-10">
            MY SKILLS
          </h2>{' '}
          {/* Responsive text size */}
        </div>
        {/* Rest of the content
        <div className='flex flex-col lg:flex-row'> */}
        {/* First Row of Icons */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="flex flex-wrap justify-center gap-5">
            {/* React Icon */}
            <motion.div className="mb-[88px] mx-10">
              <div className="btn w-100 h-100 mb-[88px] flex justify-center items-center">
                <FaReact size={100} />
              </div>
              <h2 className="h2 text-accent mb-2 text-[20px] font-extrabold">
                {' '}
              </h2>
            </motion.div>
            {/* Angular Icon */}
            <motion.div className="mb-[88px] mx-10">
              <div className="btn w-100 h-100 mb-[88px] flex justify-center items-center">
                <FaAngular size={100} />
              </div>
              <h2 className="h2 text-accent mb-2 text-[20px] font-extrabold">
                {' '}
              </h2>
            </motion.div>

            {/* JavaScript Icon */}
            <motion.div className="mb-[88px] mx-10">
              <div className="btn w-100 h-100 mb-[88px] flex justify-center items-center">
                <FaJs size={100} />
              </div>
              <h2 className="h2 text-accent mb-2 text-[20px] font-extrabold">
                {' '}
              </h2>
            </motion.div>

            {/* HTML5 Icon */}
            <motion.div className="mb-[88px] mx-10">
              <div className="btn w-100 h-100 mb-[88px] flex justify-center items-center">
                <FaHtml5 size={100} />
              </div>
              <h2 className="h2 text-accent mb-2 text-[20px] font-extrabold">
                {' '}
              </h2>
            </motion.div>
          </div>

          {/* Second Row of Icons */}
          <div className="flex flex-wrap justify-center">
            {/* CSS3 Icon */}
            <motion.div className="mb-[88px] mx-10">
              <div className="btn w-100 h-100 mb-[88px] flex justify-center items-center">
                <FaCss3Alt size={100} />
              </div>
              <h2 className="h2 text-accent mb-2 text-[20px] font-extrabold">
                {' '}
              </h2>
            </motion.div>
            {/* NodeJS Icon */}
            <motion.div className="mb-[88px] mx-10">
              <div className="btn w-100 h-100 mb-[88px] flex justify-center items-center">
                <FaNode size={100} />
              </div>
              <h2 className="h2 text-accent mb-2 text-[20px] font-extrabold">
                {' '}
              </h2>
            </motion.div>

            <motion.div>
              <div className="btn w-100 h-100 mb-[88px] flex justify-center items-center">
                <FaDatabase size={100} />
              </div>
              <h2 className="h2 text-accent mb-2 text-[20px] font-extrabold">
                {' '}
              </h2>
            </motion.div>
            <motion.div className="mb-[88px] mx-10">
              <div className="btn w-100 h-100 mb-[88px] flex justify-center items-center">
                <FaDocker size={100} />
              </div>
              <h2 className="h2 text-accent mb-2 text-[20px] font-extrabold">
                {' '}
              </h2>
            </motion.div>
          </div>
        </motion.div>
        {/* Docker Icon */}
      </div>
    </section>
  );
};

export default Services;
