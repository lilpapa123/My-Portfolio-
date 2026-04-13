import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const githubUsername = "lilpapa123";
const activityGraphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=151030&color=e6deff&line=915eff&point=ffffff&area=true&hide_border=true`;

const GitHubGraph = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Open source activity</p>
        <h2 className={styles.sectionHeadText}>GitHub Graph.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary'
      >
        This section shows my recent GitHub contribution activity.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className='mt-12 rounded-2xl border border-white/10 bg-black-100 p-4 sm:p-6'
      >
        <a
          href={`https://github.com/${githubUsername}`}
          target='_blank'
          rel='noreferrer'
          className='mb-4 inline-flex text-sm font-medium text-[#915eff] transition hover:text-white'
        >
          View profile on GitHub
        </a>

        <img
          src={activityGraphUrl}
          alt={`${githubUsername} GitHub activity graph`}
          className='w-full rounded-xl'
          loading='lazy'
        />
      </motion.div>
    </>
  );
};

export default SectionWrapper(GitHubGraph, "github");
