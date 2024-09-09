import React from "react";
import About from "./About";
import Footer from "./Footer";
import Experience from "./Experience";

function Main(){
    return(
        <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Footer />
        </main>
    )
}

export default Main