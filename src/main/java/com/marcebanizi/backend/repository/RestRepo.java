package com.marcebanizi.backend.repository;

import com.marcebanizi.backend.model.ModeloServicio;
import com.marcebanizi.backend.model.ModeloSubServicio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestRepo extends JpaRepository<ModeloServicio, Integer> {

   @Query(
        value="select id, nombre, descripcion, precio from servicio_cat_bck;",
        nativeQuery = true)
    List<ModeloServicio> getServicios();

   @Query(
           value="select * from img_servicio_cat_bck;",
           nativeQuery = true)
   List<Byte> getImgServicios();

   @Query(
       value="select id, nombre, descripcion, precio from subservicio_cat_bck",
       nativeQuery = true)
   List<ModeloSubServicio> getSubServicios();

   @Query(
           value="select * from img_subservicio_cat_bck",
           nativeQuery = true)
   List<Byte> getImgSubServicios();
}