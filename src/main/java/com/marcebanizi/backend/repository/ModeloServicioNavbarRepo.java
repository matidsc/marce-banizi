package com.marcebanizi.backend.repository;

import com.marcebanizi.backend.model.ModeloServicio;
import com.marcebanizi.backend.model.ModeloServicioNavbar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModeloServicioNavbarRepo extends JpaRepository<ModeloServicioNavbar, Integer> {
   @Query(
           value = "select id, nombre, tienesubservicio from serviciosNavbar",
           nativeQuery = true)
   List<ModeloServicioNavbar> getServiciosNavbar();
}
