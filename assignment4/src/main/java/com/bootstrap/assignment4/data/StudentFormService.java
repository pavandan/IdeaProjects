package com.bootstrap.assignment4.data;

import ca.javateacher.studentdata9.model.StudentForm;

import java.util.List;

public interface StudentFormService {

    void insertStudentForm(StudentForm form);

    List<StudentForm> getAllStudentForms();

    void deleteAllStudentForms();

    void deleteStudentForm(int id);

    StudentForm getStudentForm(int id);

    void updateStudentForm(StudentForm form);
}
