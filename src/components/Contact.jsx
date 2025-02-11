import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedin } from "../assets";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // QmVUrm57rqN2UQt8C
    // template_pjxm624
    // service_1cwyzhw

    emailjs.send(
      'service_1cwyzhw', 
      'template_pjxm624',
      {
        from_name: form.name,
        to_name: 'Hakim',
        from_email: form.email,
        to_email: 'hakimmabike@gmail.com',
        message: form.message,
      },
      'QmVUrm57rqN2UQt8C'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Something went wrong.');
    })
  }

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
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
  )
}

export default SectionWrapper(Contact, "contact")