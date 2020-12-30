package ca.petform.pblm2;

import java.io.Serializable;

public class Pet implements Serializable {
    private String name="";
    private String vaccinated="";
    private String radio="";

    public String getRadio() {
        return radio;
    }

    public void setRadio(String radio) {
        this.radio = radio;
    }

    public String getDropdown() {
        return dropdown;
    }

    public void setDropdown(String dropdown) {
        this.dropdown = dropdown;
    }

    private String dropdown="";

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVaccinated() {
        return vaccinated;
    }

    public void setVaccinated(String vaccinated) {
        this.vaccinated = vaccinated;
    }
}
