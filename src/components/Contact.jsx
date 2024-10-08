import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 

const Contact = () => {
    return (
        <div>
            <h1 className="text-center text-7xl mb-10">Get In Touch</h1>

            <div className="flex items-center justify-center gap-8 text-7xl pb-10">
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
				
            </div>

            <div className="text-center text-sm text-neutral-400 pb-30 mb-20">
                <p>Created by Sebastian Nieto using React.js</p>
			</div>
        </div>
    );
};

export default Contact;
