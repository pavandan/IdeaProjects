package vandan.patel.assignment3;

import java.io.Serializable;

public class PyramidForm implements Serializable {

    private String baseN="";
    private String baseSide="";
    private String height="";



    public PyramidForm(){
    }

    public PyramidForm(PyramidForm form){
        baseN=form.baseN;
        baseSide=form.baseSide;
        height=form.height;
    }

    public String  getBaseN() {

        return baseN;
    }

    public void setBaseN(String baseN) {
        this.baseN = baseN;
    }

    public String getBaseSide() {
        return baseSide;
    }

    public void setBaseSide(String baseSide) {
        this.baseSide = baseSide;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }
}
