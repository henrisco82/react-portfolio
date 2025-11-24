import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const socialLinks = [
        { icon: FaTwitter, href: "https://twitter.com/unahhenry" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/henry-unah-b70934ab/" },
        { icon: FaGithub, href: "https://github.com/henrisco82" },
    ];

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/resume', label: 'Resume' },
        { to: '/projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="bg-primary-dark">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-4 relative">
                    {/* Social Icons */}
                    <ul className="hidden md:flex space-x-4">
                        {socialLinks.map(({ icon: Icon, href }, index) => (
                            <li key={index}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-foreground hover:bg-black/20 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Toggle Button */}
                    <button
                        className="md:hidden text-primary-foreground z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Nav Menu */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-primary-dark md:bg-transparent z-40`}>
                        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0 uppercase text-sm font-medium">
                            {navLinks.map(({ to, label }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        onClick={() => setIsMenuOpen(false)} // close on click
                                        className={`relative block py-2 md:py-0 transition-colors ${isActive(to)
                                            ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:content-[""]'
                                            : 'text-primary-foreground hover:text-white'
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
