import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center coffee-background sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0"><h1 className="sitename">Song Family Remix</h1></NavLink>
        {/* <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> --> */}

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
            {/* <li><NavLink to="/home2" activeclassname="active">Home 2</NavLink></li> */}
            {/* <li><NavLink to="/home3" activeclassname="active">Home 3</NavLink></li> */}
            <li><NavLink to="/our-story" activeclassname="active">Our Story</NavLink></li>
            <li><NavLink to="/activity" activeclassname="active">Activity</NavLink></li>
            <li><NavLink to="/events" activeclassname="active">Events</NavLink></li>
            <li><NavLink to="/gallery" activeclassname="active">Gallery</NavLink></li>
            {/* <li><NavLink to="/journey" activeclassname="active">Journey</NavLink></li> */}
            <li className="dropdown"><a href="#"><span>Journey</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
              <li><a href="/america">America</a></li>
                <li><a href="/california">California</a></li>
                <li><a href="/korea">Korea</a></li>
                <li><a href="/mexico">Mexico</a></li>
                {/* <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li> */}
              </ul>
            </li>
            <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            {/* <nav id="navbar" className="navbar">
              <ul>
                <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/our-story" activeclassname="active">Out Story</NavLink></li>
                <li><NavLink to="/events" activeclassname="active">Events</NavLink></li>
                <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                  </ul>
                </li>
                <li><a className="nav-NavLink scrollto" href="#contact">Contact</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav> */}

          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div className="header-social-links d-none d-sm-block">
          <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/ivansong/" className="linkedin" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
        </div>

      </div>
    </header>
  )
}

export default Header