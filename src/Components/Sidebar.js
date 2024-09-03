import React from 'react';

function Sidebar() {
    return(
                <header className='lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
                        <div>
                            <h1>
                                <a href='/' className='text-4xl font-bold tracking-tight sm:text-5xl'>Victor Lopez</a>
                            </h1>
                            <h2 className='mt-3 text-lg font-medium tracking-tight sm:text-xl'>Frontend Developer</h2>
                        

                            <div className=''>
                                <nav className='hidden lg:block'>
                                    <ul>
                                        <li><a href='#about' className='about'>About</a></li>
                                        <li><a href='#experience' className='experience'>Experience</a></li>
                                        <li><a href='#projects' className='projects'>Projects</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <ul className='flex '>
                            <li><a href='https://github.com/victora-lopez/' className='github'><span className='label'>Github</span></a></li>
                            <li><a href='https://www.linkedin.com/in/victora-lopez/' className='linkedin'><span className='label'>Linkedin</span></a></li>
                            <li><a href='https://medium.com/@victorandreslopez314' className='medium'><span className='label'>Medium</span></a></li>
                        </ul>
                </header>
    )
}

export default Sidebar;