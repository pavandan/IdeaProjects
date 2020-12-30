package ca.assignment2.userdata;

import java.io.Serializable;

public class User implements Serializable {
    private String name="";

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private String email="";

    public User(){};

    public String getName(){return name;}

    public void setName(String name){this.name=name;}
}
