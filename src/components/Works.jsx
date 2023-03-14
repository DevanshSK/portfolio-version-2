import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" options={{max: 45, scale: 1, speed: 450}} >
        <div className="relative w-full h-[230px] ">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* Add another div for additional icons */}
            <div onClick={() => window.open(source_code_link, "_black")} className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <img src={github} alt="Github" className="w-1/2 h-1/2 object-contain" />
            </div>
            {/* Add another div for additional icons */}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]" >{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p className={`text-[14px] ${tag.color}`} key={tag.name}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work Portfolio.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          My portfolio features several real-world projects and open-source
          contributions that demonstrate my skills and experience as a web
          developer. Each project is accompanied by a brief description and
          links to its code repository and live demos. These works reflect my
          proficiency in solving intricate problems, adapting to different
          technologies, and managing projects efficiently.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
