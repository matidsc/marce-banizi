package com.marce_banizi.backend.repositorio;

import com.marce_banizi.backend.modelo.Servicio;
import com.marce_banizi.backend.modelo.SubServicio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiciosRepo extends JpaRepository<Servicio, Integer> {

    @Query(
        value="select * from servicio_cat_bck;",
        nativeQuery = true)
    List<Servicio> getServicios();

    @Query(
            value="select * from img_servicio_cat_bck;",
            nativeQuery = true)
    List<Byte> getImgServicios();

    @Query(
        value="select * from subservicio_cat_bck",
        nativeQuery = true)
    List<SubServicio> getSubServicios();

    @Query(
            value="select * from img_subservicio_cat_bck",
            nativeQuery = true)
    List<Byte> getImgSubServicios();
}