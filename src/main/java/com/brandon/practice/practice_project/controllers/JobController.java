package com.brandon.practice.practice_project.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.brandon.practice.practice_project.models.Job;
import com.brandon.practice.practice_project.services.JobService;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/jobs") // this maps requests to /jobs
public class JobController {

    private static final Logger logger = LoggerFactory.getLogger(JobController.class);

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    // GET /jobs - fetch all jobs
    @GetMapping
    public List<Job> getAllJobs() {
        // log to fetch all jobs from database
        return jobService.getAllJobs();
    }

    // POST /jobs - create a new job
    @PostMapping
    public Job createJob(@RequestBody Job job) {
        // log to create a new job in database
        logger.info("Creating job: {}", job);
        return jobService.createJob(job);
    }

    // GET /jobs/{id} - fetch a specific job by id
    @GetMapping("/{id}")
    public Job getJobById(@PathVariable Long id) {
        // log to fetch a specific job by id from database
        return jobService.getJobById(id);
    }

    // DELETE /jobs/{id} - delete a specific job by id
    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable Long id) {
        // log to delete a specific job by id from database
        jobService.deleteJob(id);
    }

}
