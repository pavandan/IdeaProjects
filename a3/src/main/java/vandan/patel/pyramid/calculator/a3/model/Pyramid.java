package vandan.patel.pyramid.calculator.a3.model;

import java.io.Serializable;

public class Pyramid implements Serializable {
    private int baseN;
    private double baseSide;
    private double height;
    public Pyramid(){}

    public Pyramid(int baseN,int baseSide,int height){
        setBaseN(baseN);
        setBaseSide(baseSide);
        setHeight(height);
    }
    public int getBaseN() {
        return baseN;
    }

    public final void setBaseN(int baseN) {
        this.baseN = baseN;
    }

    public double getBaseSide() {
        return baseSide;
    }

    public final void setBaseSide(double baseSide) {
        if (baseSide>0) {
            this.baseSide = baseSide;
        }else {
            throw new IllegalArgumentException("The base side must be greater than zero");
        }
    }

    public double getHeight() {
        return height;
    }

    public final void setHeight(double height) {
        if(height>0) {
            this.height = height;
        }else {
            throw new IllegalArgumentException("The height must be greater than zero");
        }
    }

    public double getBaseArea(){
        return baseN*baseSide*baseSide/(4*Math.tan(Math.PI/baseN));
    }
    public double getVolume(){
        return height*getBaseArea()/3;
    }
}
