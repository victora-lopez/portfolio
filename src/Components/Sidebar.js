import { render } from '@testing-library/react';
import React from 'react';

function Sidebar() {
    render(
        <div>
            <a href='victor-lopez.dev' className='name'><span>Victor Lopez</span></a>
            <a href='victor-lopez.dev' className='title'><span>Software Engineer</span></a>

            <ul>
                <a href='victor-lopez.dev' className='about'><span>About</span></a>
                <a href='victor-lopez.dev' className='experience'><span>Experience</span></a>
                <a href='victor-lopez.dev' className='projects'><span>Projects</span></a>
            </ul>

            <ul>
                <a href='https://github.com/victora-lopez/' className='github'></a>
                <a href='https://www.linkedin.com/in/victora-lopez/' className='linkedin'></a>
                <a href='https://medium.com/@victorandreslopez314' className='medium'></a>
            </ul>
        </div>
    )
}

export default Sidebar;