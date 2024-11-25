package com.brandon.practice.practice_project.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.brandon.practice.practice_project.models.Job;
import com.brandon.practice.practice_project.services.JobService;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/jobs")
public class JobController {

    private static final Logger logger = LoggerFactory.getLogger(JobController.class);

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }


    @GetMapping
    public List<Job> getAllJobs() {
       
        return jobService.getAllJobs();
    }

 
    @PostMapping
    public Job createJob(@RequestBody Job job) {
  
        logger.info("Creating job: {}", job);
        return jobService.createJob(job);
    }

   
    @GetMapping("/{id}")
    public Job getJobById(@PathVariable Long id) {
      
        return jobService.getJobById(id);
    }

  
    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable Long id) {
        
        jobService.deleteJob(id);
    }

}
