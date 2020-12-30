package sheridan.patel.pyramid1;

import java.io.Serializable;

public class Pyramid implements Serializable {
    private int baseN;
    private double baseSide;
    private double height;

    public Pyramid(){

    }

    public int getBaseN() {
        return baseN;
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
