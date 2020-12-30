package com.bootstrap.assignment4.data;

import ca.javateacher.studentdata9.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentDataRepo extends JpaRepository<Student, Integer> {
}
