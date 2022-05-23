package com.marcebanizi.backend.service;

import com.marcebanizi.backend.model.ModeloServicio;
import com.marcebanizi.backend.repository.ModeloServicioRepo;
import com.marcebanizi.backend.model.ModeloSubServicio;
import com.marcebanizi.backend.repository.ModeloSubServicioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ServicioRest {

    @Autowired
    private ModeloServicioRepo ModeloServicioRepo;
    @Autowired
    private ModeloSubServicioRepo ModeloSubServicioRepo;

    public List<ModeloServicio> getServicios(){
        return ModeloServicioRepo.getServicios();
    }

    public List<ModeloSubServicio> getSubServicios(){
        return ModeloSubServicioRepo.getSubServicios();
    }

    public ModeloServicio getServiciosId(Long id){
        return ModeloServicioRepo.getServiciosId(id);
    }

    public ModeloSubServicio getSubServiciosId(Long id){
        return ModeloSubServicioRepo.getSubServiciosId(id);
    }

    public List<Byte> getImgServicios(){
        return ModeloServicioRepo.getImgServicios();
    }

    public List<Byte> getImgSubServicios(){
        return ModeloSubServicioRepo.getImgSubServicios();
    }
}
