import React, {useState} from "react";
import "./Experience.css"

function Experience() {

    const jobs = [
        {value: "JPMC", 
         label: "Software Engineer", 
         description: [
            "Joining JPMorgan's Software Engineer Program to develop scalable and innovative solutions.",
            "Advancing technical and leadership skills through mentorship and training.",
            "Collaborating with global teams to design and deliver high-quality software."]
        },
        {value: "TI",
         label: "Product Marketing Engineer",
         description: [
            "Redesigned Wireless Infrastructure’s webpage to make product information and specifications moreaccessible to prospective clients.",
            "Wrote two white papers detailing bandwidth results based on 50+ transceiver configurations.",
            "Presented product documentation to field engineers using email templates, increasing customer acquisition."]
        },
        {value: "IEEE",
         label: "Director of Technology",
          description: [
            "Directed embedded systems projects for 200+ students, introducing them to real life applications of EE concepts.",
            "Integrated hardware with analog-to-digital conversion and sensor data processing software for 10+ microcontroller projects using C++.",
            "Developed logic to analyze correct/incorrect user inputs, providing visual feedback mechanisms to indicate game status and progression."]
        },
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
                {jobs.map( (job) => (
                                <ul key={job.value} className={selectedJob === job.value ? "px-4 text-sm list-disc": "px-4 text-sm list-disc hidden"}>
                                    <li>{job.description[0]}</li>
                                    <li>{job.description[1]}</li>
                                    <li>{job.description[2]}</li>
                                </ul>
                            )
                        )
                    }
            </div>
        </section>
    )
}

export default Experience