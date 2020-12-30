package ca.midterm.patel;

import java.io.Serializable;

public class Employee implements Serializable {

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    private String name="";
    private String department="";

    public Employee(){}

}
