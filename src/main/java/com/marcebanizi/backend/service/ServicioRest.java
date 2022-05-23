package com.marcebanizi.backend.service;

import com.marcebanizi.backend.model.ModeloServicio;
import com.marcebanizi.backend.repository.RestRepo;
import com.marcebanizi.backend.model.ModeloSubServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ServicioRest {

    @Autowired
    private RestRepo RestRepo;

   public List<ModeloServicio> getServicios(){
        return RestRepo.getServicios();
    }
    public List<ModeloSubServicio> getSubServicios(){
       return RestRepo.getSubServicios();
    }

    public List<Byte> getImgServicios(){
        return RestRepo.getImgServicios();
    }
    public List<Byte> getImgSubServicios(){
        return RestRepo.getImgSubServicios();
    }
}
