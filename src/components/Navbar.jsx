import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="fixed top-0 right-0 p-4 z-20"> 
            <nav>
                <ul className="flex flex-col space-y-4">
                    <li>
                        <Link 
                            to="hero" 
                            smooth={true} 
                            duration={500} 
                            className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent
                            cursor-pointer"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent
                            cursor-pointer"
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="projects" 
                            smooth={true} 
                            duration={500} 
                            className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent
                            cursor-pointer"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="contact" 
                            smooth={true} 
                            duration={500} 
                            className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent
                            cursor-pointer"
                        >
                            Get In Touch
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
