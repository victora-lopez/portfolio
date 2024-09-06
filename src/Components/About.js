import React from "react";
import pfp from "../images/pfp.jpg";

function About() {
    return(
        <section className="flex ">
            <p>Culpa consequat ex proident proident laboris non esse pariatur commodo anim. Elit officia qui irure cupidatat deserunt consectetur anim esse in. Id commodo sunt ad commodo laboris mollit cillum sint amet quis amet id.</p>
            <img className="rounded-full hidden lg:inline" src={pfp} style={{height:150}} alt="Victor's Profile Picture"/>
        </section>
    )
}

export default About