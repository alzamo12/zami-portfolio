const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="navbar max-w-screen-2xl mx-auto px-0">
            <div className="flex-1">
                <button onClick={() => scrollToSection('home')} className="btn btn-ghost normal-case text-xl">My Portfolio</button>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 hidden md:flex">
                    <li><button onClick={() => scrollToSection('home')}>Home</button></li>
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