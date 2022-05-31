package com.marcebanizi.backend.repository;

import com.marcebanizi.backend.model.ModeloServicio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AppRepo extends JpaRepository<ModeloServicio, Integer> {
   @Query(
           value = "select url from app_urls where nombre = 'home'",
           nativeQuery = true)
   String getHomeUrl();
}
