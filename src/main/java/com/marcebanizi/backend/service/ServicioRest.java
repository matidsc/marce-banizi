package com.marcebanizi.backend.service;

import com.marcebanizi.backend.model.*;
import com.marcebanizi.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ServicioRest {

    @Autowired
    private AppRepo AppRepo;
    @Autowired
    private ModeloServicioRepo ModeloServicioRepo;
    @Autowired
    private ModeloSubServicioRepo ModeloSubServicioRepo;
    @Autowired
    private ModeloServicioNavbarRepo ModeloServicioNavbarRepo;
    @Autowired
    private ModeloImgRepo ModeloImgRepo;
    @Autowired
    private ModeloPortafolioRepo ModeloPortafolioRepo;

    public List<ModeloServicio> getServicios(){
        return ModeloServicioRepo.getServicios();
    }

    public List<ModeloSubServicio> getSubServicios(){
        return ModeloSubServicioRepo.getSubServicios();
    }

    public List<ModeloSubServicio> getSubServiciosSegunServicio(Long id){
        return ModeloSubServicioRepo.getSubServiciosSegunServicio(id);
    }
    public List<ModeloServicioNavbar> getServiciosNavbar(){
        return ModeloServicioNavbarRepo.getServiciosNavbar();
    }

    public ModeloServicio getServiciosId(Long id){
        return ModeloServicioRepo.getServiciosId(id);
    }

    public ModeloSubServicio getSubServiciosId(Long id){
        return ModeloSubServicioRepo.getSubServiciosId(id);
    }

    public List<ModeloImagenServicios> getImgServicio(){
        return ModeloImgRepo.getImgServicio();
    }

    public List<ModeloImagenServicios> getImgServicioId(Long id){
        return ModeloImgRepo.getImgServicioId(id);
    }

    public List<ModeloImagenServicios> getImgSubServicio(){
        return ModeloImgRepo.getImgSubServicio();
    }

    public List<ModeloImagenServicios> getImgSubServicioId(Long id){
        return ModeloImgRepo.getImgSubServicioId(id);
    }

    public String getUrlErrorMapping(){
        return AppRepo.getHomeUrl();
    }

    public List<ModeloPortafolio> getAllImgPortafolio(){
        return ModeloPortafolioRepo.getAllImgPortafolio();
    }

    public ModeloPortafolio getImgPortafolioId(Long id){
        return ModeloPortafolioRepo.getImgPortafolio(id);
    }
}
