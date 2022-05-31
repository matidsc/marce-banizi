package com.marcebanizi.backend.repository;

import com.marcebanizi.backend.model.ModeloImagenServicios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModeloImgRepo extends JpaRepository<ModeloImagenServicios, Integer> {
   @Query(
           value = "select idi, id, url from img_servicio_cat_bck",
           nativeQuery = true)
   List<ModeloImagenServicios> getImgServicio();
   @Query(
           value = "select idi, id, url from img_servicio_cat_bck where id = ?1",
           nativeQuery = true)
   List<ModeloImagenServicios> getImgServicioId(Long id);
   @Query(
           value = "select idi, id, url from img_subservicio_cat_bck",
           nativeQuery = true)
   List<ModeloImagenServicios> getImgSubServicio();
   @Query(
           value = "select idi, id, url from img_subservicio_cat_bck where id = ?1", //revisar a futuro si es idi en el where
           nativeQuery = true)
   List<ModeloImagenServicios> getImgSubServicioId(Long id);
}
