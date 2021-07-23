import React from 'react';
import home1 from '../img/home1.png';
import {About, Description, Hide, Image} from '../styles';
//framer
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';
import Wave from './Wave';
function AboutSection() {
  return (
    <About>
      <Wave />
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We Work To Make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>True</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          initial="hidden"
          animate="show"
          alt="camera-guy"
        />
      </Image>
    </About>
  );
}

//styled-components

export default AboutSection;
