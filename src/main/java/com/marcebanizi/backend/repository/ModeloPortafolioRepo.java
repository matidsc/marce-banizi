package com.marcebanizi.backend.repository;

import com.marcebanizi.backend.model.ModeloImagenServicios;
import com.marcebanizi.backend.model.ModeloPortafolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModeloPortafolioRepo extends JpaRepository<ModeloPortafolio, Integer> {
   @Query(
           value = "select id, url from img_portfolio_cat_bck",
           nativeQuery = true)
   List<ModeloPortafolio> getAllImgPortafolio();
   @Query(
           value = "select id, url from img_portfolio_cat_bck where id = ?1",
           nativeQuery = true)
   ModeloPortafolio getImgPortafolio(Long id);
}
