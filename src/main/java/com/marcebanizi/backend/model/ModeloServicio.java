package com.marcebanizi.backend.model;

import javax.persistence.*;
import java.lang.String;

@Entity
public class ModeloServicio {
    @Id
    private long id;
    private String nombre;
    private String descripcion;
    private long precio;

    public ModeloServicio(){

    }

    public ModeloServicio(long id, String nombre, String descripcion, long precio) {
       this.id = id;
       this.nombre = nombre;
       this.descripcion = descripcion;
       this.precio = precio;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public long getPrecio() {
        return precio;
    }

    public void setPrecio(long precio) {
        this.precio = precio;
    }

    @Override
    public String toString() {
        return "ModeloServicio{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", precio=" + precio +
                '}';
    }
}
