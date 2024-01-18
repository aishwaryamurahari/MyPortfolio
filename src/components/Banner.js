import React from 'react';
// images
import Image from '../assets/my_picture.jpg';
// icons
import { FaGithub, FaLinkedin, FaEnvelopeOpenText } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[25px] font-bold leading-[0.8] lg:text-[30px]"
            >
              Hello, Welcome
              <br />
              <br />
              <br />
            </motion.h1>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[25px] font-bold leading-[0.8] lg:text-[50px]"
            >
              I'm Aishwarya <span>Murahari</span>
              <br />
              <br />
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold leading-[1]"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Senior Software Engineer',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href="contact">
                <button className="btn btn-sm text-[18px]">Contact me</button>
              </a>
              <a href="work">
                <button className="btn btn-sm text-[18px]">My Portfolio</button>
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/aishwarya-murahari-1b6048106/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/aishwaryamurahari"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="https://drive.google.com/file/d/1JcgL96LJwmwoYUeuDfDeL595N4mTAKFn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-200"
              >
                <FaEnvelopeOpenText />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="flex flex-1 justify-center items-center w-full max-w-[320px] lg:max-w-[482px]"
          >
            <img
              src={Image}
              alt=""
              className="w-full h-auto object-contain rounded-lg z-20 hover:scale-105 transition-transform duration-200"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
