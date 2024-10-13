import { faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pfp from "../images/pfp.jpg";
import React from 'react';

function Sidebar() {
    return(
                <header className='flex lg:w-1/2 lg:sticky lg:top-0'>
                    <div className='flex-grow lg:flex lg:min-h-screen lg:flex-col lg:justify-between lg:py-24'>
                        <div>
                            <h1>
                                <a href='/' className='text-4xl font-bold tracking-tight sm:text-5xl'>Victor Lopez</a>
                            </h1>
                            <h2 className='mt-3 text-lg font-medium tracking-tight sm:text-xl'>Software Engineer</h2>
                        </div>

                        <div>
                            <nav className='hidden lg:block'>
                                <ul>
                                    <li><a href='#about' className='about'>About</a></li>
                                    <li><a href='#experience' className='experience'>Experience</a></li>
                                    <li><a href='#projects' className='projects'>Projects</a></li>
                                </ul>
                            </nav>
                        </div>
                        
                        <div className='flex gap-8 text-2xl'>
                            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/victora-lopez/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a target='_blank' rel='noreferrer' href='https://github.com/victora-lopez/'><FontAwesomeIcon icon={faGithub} /></a>
                            <a target='_blank' rel='noreferrer' href='https://medium.com/@victorandreslopez314'><FontAwesomeIcon icon={faMedium} /></a>
                        </div>
                    </div>
                    <img src={pfp} className='rounded-full w-32 justify-end lg:hidden sm:w-40' alt="Victor's Face"/>
                </header>
    )
}

export default Sidebar;