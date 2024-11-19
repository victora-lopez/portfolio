import React, {useState} from "react";
import "./Experience.css"

function Experience() {

    const jobs = [
        {value: "JPMC", label: "Software Engineer"},
        {value: "TI", label: "Product Marketing Engineer"},
        {value: "IEEE", label: "Director of Technology"},
    ]  

    const [selectedJob, setSelectedJob] = useState("JPMC");

    const handleChange = (event) => {
        setSelectedJob(event.target.value);
    }


    return (
        <section id="Experience">
            <h1 className="font-bold text-lg mb-8 sm:text-2xl">Work Experience</h1>
            <div className="flex flex-col">
                <form className="flex gap-8 text-sm justify-evenly border-b border-black job-group">
                    {jobs.map( (job) => (
                                <label key={job.value} className={selectedJob === job.value ? "selected hover:cursor-pointer": "hover:cursor-pointer"}>
                                    <input
                                    type="radio"
                                    name="jobs"
                                    value={job.value}
                                    checked={job.value === selectedJob}
                                    onChange={handleChange}
                                    className="hidden"
                                    />
                                    {job.label}
                                </label>
                            )
                        )
                    }
                </form>
                <ul className= {selectedJob === jobs[0].value ? "px-4 text-sm list-disc" :"px-4 text-sm list-disc hidden" }>
                    <li>Joining JPMorgan's Software Engineer Program to develop scalable and innovative solutions.</li>
                    <li>Advancing technical and leadership skills through mentorship and training.</li>
                    <li>Collaborating with global teams to design and deliver high-quality software.</li>
                </ul>
                <ul className="px-4 text-sm list-disc hidden">
                    <li>filler 2</li>
                    <li>filler 2</li>
                    <li>filler 2</li>
                </ul>
                <ul className="px-4 text-sm list-disc hidden">
                    <li>filler 3</li>
                    <li>filler 3</li>
                    <li>filler 3</li>
                </ul>
            </div>
        </section>
    )
}

export default Experience