package com.brandon.practice.practice_project.services;

import com.brandon.practice.practice_project.models.Job;
import java.util.List;

public interface JobService {

    List<Job> getAllJobs();
    Job getJobById(Long id);
    Job createJob(Job job);
    void deleteJob(Long id);
}
