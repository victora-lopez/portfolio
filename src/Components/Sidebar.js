import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return(
        <div>

            <div className='side-header'>
                <h1>
                    <a href='/' className='name'>Victor Lopez</a>
                </h1>
                <h2 className='title'>Software engineer</h2>
            </div>

            <ul>
                <li><a href='victor-lopez.dev' className='about'><span>About</span></a></li>
                <li><a href='victor-lopez.dev' className='experience'><span>Experience</span></a></li>
                <li><a href='victor-lopez.dev' className='projects'><span>Projects</span></a></li>
            </ul>

            <ul>
                <li><a href='https://github.com/victora-lopez/' className='github'><span className='label'>Github</span></a></li>
                <li><a href='https://www.linkedin.com/in/victora-lopez/' className='linkedin'><span className='label'>Linkedin</span></a></li>
                <li><a href='https://medium.com/@victorandreslopez314' className='medium'><span className='label'>Medium</span></a></li>
            </ul>
        </div>
    )
}

export default Sidebar;