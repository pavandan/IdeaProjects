package ca.midterm.part2.p2;

import java.io.Serializable;

public class Employee implements Serializable {
    private String name="";

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

    private String department="";
}
