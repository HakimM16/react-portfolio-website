import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedin } from "../assets";

const Contact = () => {  // Define Contact as a functional component
  return ( // The return is now INSIDE the function
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center ml-4">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 pb-[-4px] rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <a href="https://www.linkedin.com/in/hakim-mabike-643848214" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-30 h-30 object-contain" />
          <p className="text-white mt-4">Connect with me on LinkedIn</p>
        </a>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");