package com.marce_banizi.backend.servicio;

import com.marce_banizi.backend.modelo.Servicio;
import com.marce_banizi.backend.modelo.SubServicio;
import com.marce_banizi.backend.repositorio.ServiciosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ServicioEstadistica {

    @Autowired
    private ServiciosRepo statsRepo;

    public List<Servicio> getServicios(){
        return statsRepo.getServicios();
    }
    public List<SubServicio> getSubServicios(){
        return statsRepo.getSubServicios();
    }

    public List<Byte> getImgServicios(){
        return statsRepo.getImgServicios();
    }
    public List<Byte> getImgSubServicios(){
        return statsRepo.getImgSubServicios();
    }
}
