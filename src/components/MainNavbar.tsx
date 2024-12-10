const MainNavbar = () => {
    return (
        <nav className="navbar justify-between">
            <div className="container">
                <h1 className="site-title">SassyFusion Designs</h1>
                <ul className="display-f">
                    <li className="ml-1 text-hover-secondary">
                        <a href="#work">Our Work</a>
                    </li>
                    <li className="ml-1 text-hover-secondary">
                        <a href="#about">About Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MainNavbar;
