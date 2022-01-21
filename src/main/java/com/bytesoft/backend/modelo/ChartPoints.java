package com.bytesoft.backend.modelo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ChartPoints {
    @Id
    private String x;
    private int y;

    public ChartPoints() {
    }

    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    @Override
    public String toString() {
        return "ChartPoints{" +
                "x='" + x + '\'' +
                ", y=" + y +
                '}';
    }
}
