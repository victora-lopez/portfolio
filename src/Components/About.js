import React from "react";
import pfp from "../images/pfp.jpg";

function About() {
    return(
        <section className="">
            <h1 className="font-bold text-lg sm:text-2xl">About me</h1>
            <div className="flex my-4">
                <p>Culpa consequat ex proident proident laboris non esse pariatur commodo anim. Elit officia qui irure cupidatat deserunt consectetur anim esse in. Id commodo sunt ad commodo laboris mollit cillum sint amet quis amet id.</p>
                <img className="rounded-full hidden lg:inline" src={pfp} style={{height:150}} alt="Victor's Face"/>
            </div>
        </section>
    )
}

export default About