import React from 'react';
import logo_dark from '../../assets/images/prologo.jpg';
import logo_light from '../../assets/images/prologo.jpg';
import '../../assets/libs/@mdi/font/css/materialdesignicons.min.css';
import '../../assets/css/tailwind.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
    let { navClass, navJustify } = props;
    let [isMenu, setisMenu] = useState(false);
    let [manu, setManu] = useState('');
    let location = useLocation();

    useEffect(() => {
        let current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        setManu(current)

        function windowScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                if (navbar !== null) {
                    navbar?.classList.add("nav-sticky");
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    }, [location.pathname.substring(location.pathname.lastIndexOf('/') + 1)])


    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };


    return (
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
            'bg-white dark:bg-slate-900' : ''}`}>
            <div className="container relative flex justify-between items-center">
                <div>
                    <Link className="logo" to="/">
                        <span className="inline-block dark:hidden">
                            <img src={logo_dark} className="l-dark" height="40" style={{ marginTop: "20px" }} width="40" alt="" />
                            <img src={logo_light} className="l-light" height="40" width="40" style={{ marginTop: "20px" }} alt="" />
                        </span>
                        <img src={logo_light} height="40" width="40" style={{ marginTop: "20px" }} className="hidden dark:inline-block" alt="" />
                    </Link>
                </div>

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={`navigation-menu ${navClass} ${navJustify}`}>
                        <li><Link to="/contact" className="sub-menu-item font-bold ml-[10px]">Contact Me</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
