package com.marcebanizi.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ModeloPortafolio {
    @Id
    private long id;
    private String url;
    public ModeloPortafolio(){

    }

    public ModeloPortafolio(long id, String url) {
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
        return "ModeloPortafolio{" +
                "id=" + id +
                ", url='" + url + '\'' +
                '}';
    }
}
