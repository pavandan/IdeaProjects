package com.bootstrap.assignment4.data;

import ca.javateacher.studentdata9.model.Student;
import com.bootstrap.assignment4.model.Student;
import ca.javateacher.studentdata9.model.StudentForm;
com.bootstrap.assignment4.model.StudentForm
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentFormServiceImpl implements StudentFormService{

    private StudentDataRepo studentDataRepo;

    @Autowired
    StudentFormServiceImpl(StudentDataRepo studentDataRepo){
        this.studentDataRepo = studentDataRepo;
    }

    private static void copyFormToStudent(StudentForm form, Student student){
        student.setId(form.getId());
        student.setFirstName(form.getFirstName());
        student.setLastName(form.getLastName());
        student.setProgramName(form.getProgramName());
        student.setProgramYear(Integer.parseInt(form.getProgramYear()));
        student.setProgramCoop(form.getProgramCoop().equals("yes"));
        student.setProgramInternship(form.getProgramInternship().equals("yes"));
    }

    private static void copyStudentToForm(Student student, StudentForm form){
        form.setId(student.getId());
        form.setFirstName(student.getFirstName());
        form.setLastName(student.getLastName());
        form.setProgramName(student.getProgramName());
        form.setProgramYear(student.getProgramYear().toString());
        form.setProgramCoop(student.getProgramCoop()?"yes":"no");
        form.setProgramInternship(student.getProgramInternship()?"yes":"no");
    }

    public void insertStudentForm(StudentForm form) {
        Student student = new Student();
        copyFormToStudent(form, student);
        student = studentDataRepo.save(student);
        studentDataRepo.flush();
        form.setId(student.getId());
    }

    public List<StudentForm> getAllStudentForms() {
        List<StudentForm> formList = new ArrayList<>();
        List<Student> studentList = studentDataRepo.findAll();
        for(Student student: studentList){
            StudentForm form = new StudentForm();
            copyStudentToForm(student, form);
            formList.add(form);
        }
        return formList;
    }

    public void deleteAllStudentForms() {
        studentDataRepo.deleteAll();
    }

    public void deleteStudentForm(int id) {
        studentDataRepo.deleteById(id);
    }

    public StudentForm getStudentForm(int id) {
        Optional<Student> result = studentDataRepo.findById(id);
        if(result.isPresent()){
            StudentForm form = new StudentForm();
            Student student = result.get();
            copyStudentToForm(student, form);
            return form;
        }
        return null;
    }

    public void updateStudentForm(StudentForm form) {
        Optional<Student> result = studentDataRepo.findById(form.getId());
        if(result.isPresent()){
            Student student = result.get();
            copyFormToStudent(form, student);
            studentDataRepo.save(student);
            studentDataRepo.flush();
        }
    }
}
