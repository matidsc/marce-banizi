package com.marcebanizi.backend.repository;

import com.marcebanizi.backend.model.ModeloServicio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface ModeloServicioRepo extends JpaRepository<ModeloServicio, Integer> {
   @Query(
           value = "select id, nombre, descripcion, precio from servicio_cat_bck",
           nativeQuery = true)
   List<ModeloServicio> getServicios();
   @Query(
           value="select id, nombre, descripcion, precio from servicio_cat_bck where id = ?1",
           nativeQuery = true)
   ModeloServicio getServiciosId(Long id);

   @Query(
          value="(SELECT idhs, home_services.id, home_services.ids, servicio_cat_bck.nombre, 'f' AS esSubservicio FROM home_services JOIN servicio_cat_bck ON home_services.id=servicio_cat_bck.id) UNION (SELECT idhs, home_services.id, home_services.ids, subservicio_cat_bck.nombre, 't' AS esSubservicio FROM home_services JOIN subservicio_cat_bck ON home_services.ids=subservicio_cat_bck.ids) ORDER BY idhs", nativeQuery = true)
   List<Object> getHomeFeaturedServices();
}
