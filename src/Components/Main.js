import React from "react";
import About from "./About";
import Footer from "./Footer";

function Main(){
    return(
        <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Footer />
        </main>
    )
}

export default Main