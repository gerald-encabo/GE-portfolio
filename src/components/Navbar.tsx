import { useState } from 'react'
import '@/styles/navbar.scss'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState<boolean>(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <div className='navbar-container container'>
                     <div className='navbar-icon'>
                         <span className='navbar-logo'>G</span>
                         Gerald Encabo
                    </div>
                    <div className="navbar-mini-device" onClick={handleClick}>
                      { click ? <FaTimes /> : <FaBars /> }
                    </div>
                    <ul className={ click ? 'navbar-menu active' : 'navbar-menu' }>
                         <li className='navbar-item'>
                            <NavLink to='/' onClick={closeMobileMenu} className={(navData) => navData.isActive ? 'navbar-links current' : 'navbar-links' }>About Me</NavLink>
                         </li>
                         <li className='navbar-item'>
                            <NavLink to='/resume' onClick={closeMobileMenu} className={(navData) => navData.isActive ? 'navbar-links current' : 'navbar-links' }>Resume</NavLink>
                         </li>
                         <li className='navbar-item'>
                            <NavLink to='/project'  onClick={closeMobileMenu} className={(navData) => navData.isActive ? 'navbar-links current' : 'navbar-links' }>Project</NavLink>
                         </li>
                         <li className='navbar-item'>
                            <NavLink to='/contact' onClick={closeMobileMenu} className={(navData) => navData.isActive ? 'navbar-links current' : 'navbar-links' }>Contact</NavLink>
                         </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
