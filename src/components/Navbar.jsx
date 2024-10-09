import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="fixed top-0 right-0 p-4 z-20"
        >
            <nav>
                <ul className="flex flex-col space-y-4">
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link
                                to="hero"
                                smooth={true}
                                duration={500}
                                className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-xl lg:text-2xl tracking-tight text-transparent cursor-pointer"
                            >
                                Home
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-xl lg:text-2xl tracking-tight text-transparent cursor-pointer"
                            >
                                About Me
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-xl lg:text-2xl tracking-tight text-transparent cursor-pointer"
                            >
                                Projects
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-xl lg:text-2xl tracking-tight text-transparent cursor-pointer"
                            >
                                Get In Touch
                            </Link>
                        </motion.div>
                    </li>
                </ul>
            </nav>
        </motion.div>
    );
};

export default Navbar;
