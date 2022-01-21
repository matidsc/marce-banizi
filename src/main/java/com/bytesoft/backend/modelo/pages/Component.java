package com.bytesoft.backend.modelo.pages;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Component {
    @Id
    private String routerPage;
    private String pageTitle;
    private String pageInfo;
    @NotNull
    private boolean bajalogica;

    public Component() {
    }

    public String getRouterPage() {
        return routerPage;
    }

    public String getPageTitle() {
        return pageTitle;
    }

    public String getPageInfo() {
        return pageInfo;
    }

    public boolean isBajalogica() {
        return bajalogica;
    }
}
