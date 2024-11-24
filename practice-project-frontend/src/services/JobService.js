import axios from "axios";

const API_URL = "http://localhost:8080/jobs";

export const getJobs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export const createJob = async (jobData) => {
  try {
    const response = await axios.post(API_URL, jobData);
    return response.data;
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
};

export const updateJob = async (jobId, updatedJobData) => {
    try {
        const response = await axios.put(`${API_URL}/${jobId}`, updatedJobData);
        return response.data;
    } catch (error) {
        console.error("Error updating job:", error);
        throw error;
    }
};

export const deleteJob = async (jobId) => {
    try {
        await axios.delete(`${API_URL}/${jobId}`);
    } catch (error) {
        console.error("Error deleting job:", error);
        throw error;
    }
};

