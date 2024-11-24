import React from "react";
import pfp from "../images/pfp.jpg";

function About() {
    return(
        <section className="">
            <div className="flex justify-end">
                <img className="rounded-full hidden lg:inline" src={pfp} style={{height:150}} alt="Victor's Face"/>
            </div>
            
            <h1 className="font-bold text-lg sm:text-2xl">About me</h1>
            
            <div className="my-4">
                <p>
                    Hi, I'm Victor, a passionate programmer with a journey that started five years ago when I first dived into coding with C++. 
                    Over time, my curiosity and enthusiasm for technology led me to explore other powerful languages like Python and JavaScript. 
                    Whether it's solving complex problems or creating intuitive user experiences, I love the process of turning ideas into reality through code.
                    <br /><br />

                    When I'm not coding, you can often find me rock climbing or exploring the outdoors with my dog and girlfriend. 
                    These moments recharge me and fuel my creativity. 
                    In the evenings, I enjoy unwinding by discovering new media to watch, always on the lookout for a great story or captivating visuals.
                    <br /> <br />

                    Feel free to explore my portfolio and connect with me—I'd love to share ideas and collaborate on exciting projects!</p>
                
            </div>
        </section>
    )
}

export default About