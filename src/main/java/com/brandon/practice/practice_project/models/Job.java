package com.brandon.practice.practice_project.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // Marks it as an entity
public class Job {

    @Id // Specifies primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long job_id;
    private String title;
    private String description;
    private String location;
    private Double salary;

    // constructors, getters, setters

    public Job() {
    }

    public Job(String title, String description, String location, Double salary) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.salary = salary;
    }

    public Long getId() {
        return job_id;
    }
    public void setId(Long job_id){
        this.job_id = job_id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public Double getSalary() {
        return salary;
    }
    public void setSalary(Double salary) {
        this.salary = salary;
    }

}
