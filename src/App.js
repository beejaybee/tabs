import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchJobs = async() => {

    try {
        setLoading(true);
        const response = await ( await fetch(url)).json();

        setJobs(response);

        setLoading(false);

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchJobs();
  }, [])

  if (loading) {
    return (
      <section className="section loading"></section>
    )
  };

  const {company, duties, dates, title} = jobs[value];
  
  return (
    <section className="section">
      <div className="title">
        <h2> experience </h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        {/* btn container*/}
        <div className="btn-container">
        {jobs.map((job, index) => (
          <button 
          key={job.id} 
          className={`job-btn ${index === value && 'active-btn'}`}
          onClick={() => setValue(index)}
          > 
          {job.company} 
          
          </button>
        ))}
      </div>
        {/* job info*/}

        <article className="job-info">
          <h3> {title} </h3>
          <h4> {company} </h4>
          <p className="job-date"> {dates} </p>
          {duties.map((duty, index) => (
            <div  key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p> {duty} </p>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
  
}

export default App
