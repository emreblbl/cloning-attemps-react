import React from 'react';
import './Header.css';
import logo from '../../assets/tesla_logo.svg'; // Adjust the path as necessary
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {navItems, headerIcons} from '../../config/header/headerConfig'; // Updated import path

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Tesla"/>
            </div>
            <ol className="tds-site-nav-items tds-align--center dx-nav-item-group">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ol>
            <ol className="icon-group">
                {headerIcons.map((item, index) => (
                    <li key={index}>
                        <a href={item.href} aria-label={item.ariaLabel} className="icon-link">
                            <svg className="icon">
                                <FontAwesomeIcon icon={item.icon}/>
                            </svg>
                        </a>
                    </li>
                ))}
            </ol>
        </header>
    );
};

export default Header;
