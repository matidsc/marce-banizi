package com.bytesoft.backend.modelo.pages;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PageData {
    @Id
    private String id;
    private String h1;
    private String paragraph;

    public PageData(){
    }

    public PageData(String id, String h1, String paragraph) {
        this.id = id;
        this.h1 = h1;
        this.paragraph = paragraph;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getH1() {
        return h1;
    }

    public void setH1(String h1) {
        this.h1 = h1;
    }

    public String getParagraph() {
        return paragraph;
    }

    public void setParagraph(String paragraph) {
        this.paragraph = paragraph;
    }
}
