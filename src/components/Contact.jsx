import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div>

            <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView = {{ opacity: 1,}}
                    transition={{ duration: 2}}
                    viewport={{once: true }}
                     className="text-center text-7xl mb-10">Get In Touch</motion.h1>

            <motion.div
                    initial={{ opacity: 0 }}
                    whileInView = {{ opacity: 1,}}
                    transition={{ duration: 2}}
                    viewport={{once: true }} className="flex items-center justify-center gap-8 text-7xl pb-10">
                <a 
                    href="https://www.linkedin.com/in/sebastian-nieto-tech/?trk=opento_sprofile_topcard" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="https://github.com/sebastian-nieto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a 
                    href="mailto:sebastian.nieto.tech@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaEnvelope />
                </a>
				
            </motion.div>

            <motion.div className="text-center text-sm text-neutral-400 pb-30 mb-20">
                <motion.p
                        initial={{ opacity: 0 }}
                        whileInView = {{ opacity: 1,}}
                        transition={{ duration: 2}}
                        viewport={{once: true }}>
                        Created by Sebastian Nieto using React.js</motion.p>
			</motion.div>
        </div>
    );
};

export default Contact;
