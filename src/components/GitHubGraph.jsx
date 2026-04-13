import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const githubUsername = "lilpapa123";
const activityGraphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=151030&color=e6deff&line=915eff&point=ffffff&area=true&hide_border=true`;
const activityStats = [
  { label: "Commits", value: "Active" },
  { label: "Repos", value: "Growing" },
  { label: "Profile", value: "Live" },
];

const GitHubGraph = () => {
  const [graphRefreshKey, setGraphRefreshKey] = useState(0);
  const graphImageUrl = useMemo(
    () => `${activityGraphUrl}&refresh=${graphRefreshKey}`,
    [graphRefreshKey]
  );

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
        This section shows my recent GitHub contribution activity with a more
        active visual treatment.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className='relative mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-black-100 p-4 sm:p-6'
        onHoverStart={() => setGraphRefreshKey((current) => current + 1)}
      >
        <motion.div
          aria-hidden='true'
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["0%", "8%", "0%"],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className='pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full bg-[#915eff]/20 blur-3xl'
        />

        <div className='relative z-10 flex flex-col gap-5'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-white'>
                Live Feed
              </p>
              <h3 className='mt-2 text-2xl font-bold text-white'>
                GitHub activity at a glance
              </h3>
            </div>

            <div className='inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300'>
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className='h-2.5 w-2.5 rounded-full bg-emerald-400'
              />
              Activity sync enabled
            </div>
          </div>

          <div className='grid gap-3 sm:grid-cols-3'>
            {activityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className='rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm'
              >
                <p className='text-xs uppercase tracking-[0.25em] text-secondary'>
                  {stat.label}
                </p>
                <p className='mt-2 text-lg font-semibold text-white'>
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>

          <a
            href={`https://github.com/${githubUsername}`}
            target='_blank'
            rel='noreferrer'
            className='inline-flex w-fit text-sm font-medium text-white transition hover:text-[#e6deff]'
          >
            View profile on GitHub
          </a>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className='relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0b1f]/80 p-3'
          >
            <motion.div
              aria-hidden='true'
              initial={{ x: "-140%", opacity: 0 }}
              whileHover={{ x: "140%", opacity: [0, 0.7, 0] }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className='pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md'
            />
            <img
              src={graphImageUrl}
              alt={`${githubUsername} GitHub activity graph`}
              className='w-full rounded-xl'
              loading='lazy'
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(GitHubGraph, "github");
