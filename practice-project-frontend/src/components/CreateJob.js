import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/jobs";

const CreateJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //prepare job data for post submission
    const job = {
      title: title,
      description: description,
      location: location,
      salary: salary,
    };

    //make a POST request to create a new job
    axios
      .post(API_URL, job)
      .then((response) => {
        console.log("Job created Successfully", response.data);
        setMessage("Job created successfully");
        setTitle("");
        setDescription("");
        setLocation("");
        setSalary("");
      })
      .catch((error) => {
        console.error("Error creating job:", error);
        setMessage("Error creating job");
      });
  };

  //Make form component
  return (
    <div>
      <h2>Create a Job Listing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Job Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">Create Job</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default CreateJob;