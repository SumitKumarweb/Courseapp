import './app.css'

function Navbar() {
    return(
        <>
            <nav class="navbar">
                <span class="navbar-logo">Online Course</span>
                <div class="navbar-menu">
                    <a href="#about" class="navbar-link">About Us</a>
                    <a href="#contact" class="navbar-link">Contact Us</a>
                    <a href="#courses" class="navbar-link">Courses</a>
                    <button class="navbar-link">Login</button>
                </div>
                <button class="navbar-toggle" onclick="toggleMobileMenu()">☰</button>
            </nav>


            <div class="navbar-menu-mobile" id="mobileMenu">
                <a href="#about" class="navbar-link">About Us</a>
                <a href="#contact" class="navbar-link">Contact Us</a>
                <a href="#courses" class="navbar-link">Courses</a>
                <button class="navbar-link">Login</button>
            </div>
        </>
    );
}

export default Navbar;