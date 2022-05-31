package com.marcebanizi.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ModeloImagenServicios {
    @Id
    private long idi;
    private long id;
    private String url;

    public ModeloImagenServicios(){

    }

    public ModeloImagenServicios(long id, String url) {
        this.id = id;
        this.url = url;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "ModeloImagenServicio{" +
                "idi=" + idi +
                ", id=" + id +
                ", url='" + url + '\'' +
                '}';
    }
}
