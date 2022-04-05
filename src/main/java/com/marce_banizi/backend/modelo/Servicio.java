package com.marce_banizi.backend.modelo;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.lang.String;
import java.util.UUID;

@Entity
public class Servicio {
    @Id
    private UUID id;
    private String nombre, descripcion;
    private int precio;

    public Servicio(UUID id, String nombre, String descripcion, int precio) {
       this.id = id;
       this.nombre = nombre;
       this.descripcion = descripcion;
       this.precio = precio;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
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

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    @Override
    public String toString() {
        return "Servicio{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", precio=" + precio +
                '}';
    }
}
