package vandan.patel.assignment3;

import java.io.Serializable;

public class Pyramid implements Serializable {
    private int baseN;
    private double baseSide;
    private double height;
    private double baseArea;
    private double volume;

    public Pyramid(){


    }


    public void setBaseArea(int baseN){
        this.baseArea=baseN*baseSide*baseSide/(4*Math.tan(Math.PI/baseN));
    }
    public double getBaseArea(){
        return baseArea;
    }

    public void setVolume(int baseN){
        this.volume=height*getBaseArea()/3;
    }

    public double getVolume(){
        return volume;
    }





    public int getBaseN() {
        return  baseN;
    }

    public void setBaseN(int baseN) {
        this.baseN = baseN;
    }

    public double getBaseSide() {
        return baseSide;
    }

    public void setBaseSide(double baseSide) {
        this.baseSide = baseSide;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }
}
