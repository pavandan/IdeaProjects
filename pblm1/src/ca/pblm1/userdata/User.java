package ca.pblm1.userdata;

import java.io.Serializable;

public class User implements Serializable {
    private String pet="";
    private String vaccinate="";
    private String radio="";

    public String getPet() {
        return pet;
    }

    public void setPet(String pet) {
        this.pet = pet;
    }

    public String getVaccinate() {
        return vaccinate;
    }

    public void setVaccinate(String vaccinate) {
        this.vaccinate = vaccinate;
    }
}
