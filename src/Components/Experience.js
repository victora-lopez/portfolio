import React, {useState} from "react";
import "./Experience.css"

function Experience() {

    const jobs = [
        {value: "JPMC", label: "Software Engineer"},
        {value: "TI", label: "Product Marketing Engineer"},
        {value: "IEEE", label: "Director of Technology"},
    ]

    const descriptions = [
        {job: ""}
    ]

    const [selectedJob, setSelectedJob] = useState("JPMC");

    const handleChange = (event) => {
        setSelectedJob(event.target.value);
    }


    return (
        <section id="Experience">
            <h1 className="font-bold text-lg mb-8 sm:text-2xl">Work Experience</h1>
            <div className="flex flex-col">
                <form className="flex gap-8 text-sm justify-between border-b border-black job-group">
                    {jobs.map( (job) => (
                                <label key={job.value} className={selectedJob === job.value ? "font-bold": ""}>
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
                <ul className="px-4 list-disc">
                    <li>filler 1</li>
                    <li>filler 1</li>
                    <li>filler 1</li>
                </ul>
                <ul className="px-4 list-disc hidden">
                    <li>filler 2</li>
                    <li>filler 2</li>
                    <li>filler 2</li>
                </ul>
                <ul className="px-4 list-disc hidden">
                    <li>filler 3</li>
                    <li>filler 3</li>
                    <li>filler 3</li>
                </ul>
            </div>
        </section>
    )
}

export default Experience