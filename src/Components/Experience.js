import React from "react";

function handleClick() {
    console.log("clicked")
}

function Experience() {
    return (
        <section id="Experience">
            <h1 className="font-bold text-lg mb-8 sm:text-2xl">Work Experience</h1>
            <div className="flex">
                <form className="flex flex-col gap-8 text-sm">
                    <label>
                        <input
                          type="radio"
                          name="jobs"
                          value="Texas Instruments"
                          className="hidden"
                          onClick={handleClick}
                          defaultChecked
                        />
                        Product Marketing Engineer
                    </label>

                    <label>
                        <input
                          type="radio"
                          name="jobs"
                          value="IEEE"
                          className="hidden"
                        />
                        Director Of Technology
                    </label>

                    <label>
                        <input
                          type="radio"
                          name="jobs"
                          value="Independent"
                          className="hidden"
                        />
                        Independent Developer
                    </label>
                </form>
                <div className="mx-6 w-0 border-l border-black"></div>
                
            </div>
        </section>
    )
}

export default Experience