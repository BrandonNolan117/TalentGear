import { useState, useEffect } from "react";

import axios from "axios";

const API_URL = "http://localhost:8080/jobs";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect( () => {
    axios.get(API_URL)
    .then( (response) => {
        setJobs(response.data);
        setError(null);
    })
    .catch( (error) => {
        console.error("Error fetching jobs:", error);
        setError(error.message);
    });
  }, []);

  return (
    <div>
      <h2>Available Job Listings</h2>
      {error && <p>{error}</p>} {/* Show error if any */}
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>Description: {job.description}</p>
              <p>Location: {job.location}</p>
              <p>Salary: ${job.salary}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
}
  
export default AllJobs;
