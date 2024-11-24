package com.brandon.practice.practice_project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.brandon.practice.practice_project.models.Job;

public interface JobRepository extends JpaRepository<Job, Long> {

}
