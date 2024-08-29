import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return(
        <div className='sidebar'>

            <header className='header'>
                <h1>
                    <a href='/' className='name'>Victor Lopez</a>
                </h1>
                <h2 className='title'>Frontend Developer</h2>
            </header>

            <div className='center-links'>
                <ul>
                    <li><a href='victor-lopez.dev' className='about'>About</a></li>
                    <li><a href='victor-lopez.dev' className='experience'>Experience</a></li>
                    <li><a href='victor-lopez.dev' className='projects'>Projects</a></li>
                </ul>
            </div>

            <footer className='footer-links'>
                <ul className='logos'>
                    <li><a href='https://github.com/victora-lopez/' className='github'><span className='label'>Github</span></a></li>
                    <li><a href='https://www.linkedin.com/in/victora-lopez/' className='linkedin'><span className='label'>Linkedin</span></a></li>
                    <li><a href='https://medium.com/@victorandreslopez314' className='medium'><span className='label'>Medium</span></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Sidebar;