
import React from 'react'
import { motion } from 'framer-motion';
import { styles } from "../styles";
import Tilt from 'react-parallax-tilt'; // ✅ default export - correct // ✅ correct
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon}) => {
  return (
<Tilt
  tiltMaxAngleX={45}
  tiltMaxAngleY={45}
  scale={1}
  transitionSpeed={450}
  className='xs:w-[250px] w-full'
>
        <motion.div 
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card' 
        >
          <div
              className='bg-tertiary rounded-[20px]
               py-5 px-12 min-h-[280px]
                flex justify-evenly
                 items-center flex-col'>
           
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
   </Tilt>
  )
}
const About = () => {
  return (
    <>
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}
    >Introduction</p>
    <h2 className={styles.sectionHeadText}
    >Overview.</h2>
   </motion.div>

   <motion.p 
   variants={fadeIn("","",0.1,1)}
   className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
   >
    i am a front-end developer with experience in building responsive websites and mobile applications.
     i have a strong understanding of HTML, CSS, JavaScript, Dart and React. i am also familiar with other front-end frameworks such as Angular Flutter and Vue.js. i am a quick learner and a team player. i am always looking for new challenges and opportunities to grow my skills.
   </motion.p>

   <div className='mt-20 flex flex-wrap justify-center gap-10'>
      {services.map((service,index)=> (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
   </div>
   </>
  )
}

export default SectionWrapper(About, "about");
