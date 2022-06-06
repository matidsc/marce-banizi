package com.marcebanizi.backend.repository;

import com.marcebanizi.backend.model.ModeloSubServicio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface ModeloSubServicioRepo extends JpaRepository<ModeloSubServicio, Integer> {
   @Query(
           value = "select ids, subservicio_cat_bck.id, subservicio_cat_bck.nombre, descripcion, precio, url from subservicio_cat_bck  left join img_subservicio_cat_bck on img_subservicio_cat_bck.idi=subservicio_cat_bck.imagenMuestra",
           nativeQuery = true)
   List<ModeloSubServicio> getSubServicios();
   @Query(
           value = "select ids, subservicio_cat_bck.id, subservicio_cat_bck.nombre, descripcion, precio, url from subservicio_cat_bck  left join img_subservicio_cat_bck on img_subservicio_cat_bck.idi=subservicio_cat_bck.imagenMuestra where subservicio_cat_bck.ids = ?1",
           nativeQuery = true)
   ModeloSubServicio getSubServiciosId(Long id);
   @Query(
           value = "select ids, subservicio_cat_bck.nombre, descripcion, precio, url from subservicio_cat_bck  left join img_subservicio_cat_bck on img_subservicio_cat_bck.idi=subservicio_cat_bck.imagenMuestra where subservicio_cat_bck.id = ?1",
           nativeQuery = true)
   List<ModeloSubServicio> getSubServiciosSegunServicio(Long id);
}
