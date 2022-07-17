package com.marcebanizi.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="serviciosNavbar")
public class ModeloServicioNavbar {
    @Id
    private long id;
    private String nombre;
    private String tienesubservicio;

    public ModeloServicioNavbar(){

    }

    public ModeloServicioNavbar(int id, String nombre, String tienesubservicio) {
        this.id = id;
        this.nombre = nombre;
        this.tienesubservicio=tienesubservicio;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTieneSubServicio() {
        return tienesubservicio;
    }

    public void setTieneSubServicio(String tieneSubServicio) {
        this.tienesubservicio = tieneSubServicio;
    }

    @Override
    public String toString() {
        return "ModeloServicioNavbar{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", tienesubservicio=" + tienesubservicio +
                '}';
    }
}
