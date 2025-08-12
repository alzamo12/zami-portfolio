import { Link, useLocation } from "react-router";

const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    // const route = useRout
    const location = useLocation();
    return (
        <div className="navbar max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl mx-auto px-0 ">
           <div className="flex flex-row justify-between w-full">
             <div className="navbar-start block lg:hidden justify-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {
                        location.pathname === "/" ?
                            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                            :
                            <li><Link onClick={() => scrollToSection('home')}>Home</Link></li>
                    }
                    <li><button onClick={() => scrollToSection('about')}>About</button></li>
                    <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                    <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <Link to="/" className="btn btn-ghost normal-case text-xl">My Portfolio</Link>
            </div>
           </div>
            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal px-1 hidden md:flex">
                    {
                        location.pathname === "/" ?
                            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                            :
                            <li><Link onClick={() => scrollToSection('home')}>Home</Link></li>
                    }
                    <li><button onClick={() => scrollToSection('about')}>About</button></li>
                    <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                    <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar