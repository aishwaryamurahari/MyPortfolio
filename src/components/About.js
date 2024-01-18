import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent text-[40px] font-extrabold">
              About me
            </h2>
            <h3 className="h3 mb-4">
              I have professional work experience of building and designing
              software. Currently, I love to work on web application using
              technologies like ReactJS, JavaScript, Angular, HTML, CSS ,
              Keycloak and OpenId Connect.
              <br />
            </h3>
            <p className="p mb-4">
              As a dedicated technology enthusiast, I am actively looking for
              opportunities to collaborate, learn, and contribute to
              cutting-edge projects. My expertise in employing a data-driven
              strategy and outstanding problem-solving skills are key in driving
              business success. I am enthusiastic about turning innovative ideas
              into tangible outcomes in the rapidly changing tech landscape.
            </p>
            <br />

            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] font-bold">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] font-bold">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={6} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] font-bold">
                  Technologies <br />
                </div>
              </div>
            </div>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="https://drive.google.com/file/d/1JcgL96LJwmwoYUeuDfDeL595N4mTAKFn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm text-[18px]">Resume</button>
              </a>
              <a
                href="https://drive.google.com/file/d/1cGIT_Xal8TDu4sqtcIcIt_8iwVlnw3L7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm text-[18px]">Cover Letter</button>
              </a>
              <a
                href="https://drive.google.com/file/d/1TSrSGi6V86G99DnFrHP63hZmdNAEOSSl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm text-[18px]">Nanodegree</button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
