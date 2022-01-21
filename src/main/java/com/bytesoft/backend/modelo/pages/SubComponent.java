package com.bytesoft.backend.modelo.pages;

import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.Id;

@Entity
public class SubComponent {
    @Id
    private int subComponentID;
    private String routerPage;
    private String componentInfo;
    private boolean bajalogica;

    public SubComponent() {
    }

    public int getSubComponentID() {
        return subComponentID;
    }

    public void setSubComponentID(int subComponentID) {
        this.subComponentID = subComponentID;
    }

    public String getRouterPage() {
        return routerPage;
    }

    public void setRouterPage(String routerPage) {
        this.routerPage = routerPage;
    }

    public String getComponentInfo() {
        return componentInfo;
    }

    public void setComponentInfo(String componentInfo) {
        this.componentInfo = componentInfo;
    }

    public boolean isBajalogica() {
        return bajalogica;
    }

    public void setBajalogica(boolean bajalogica) {
        this.bajalogica = bajalogica;
    }
}
