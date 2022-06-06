package com.marcebanizi.backend.model;

import javax.persistence.*;
import java.lang.String;

@Entity
public class ModeloSubServicio {

    @Id
    private long ids;
    private String nombre;
    private String descripcion;
    private long precio;
    private String url;

    public ModeloSubServicio(){

    }

    public ModeloSubServicio(long ids, String nombre, String descripcion, long precio, String url) {
        this.ids = ids;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.url = url;
    }

    public long getIds() {
        return ids;
    }

    public void setIds(long ids) {
        this.ids = ids;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "ModeloSubServicio{" +
                "ids=" + ids +
                ", nombre='" + nombre + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", precio=" + precio +
                ", url='" + url + '\'' +
                '}';
    }
}
