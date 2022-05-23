package com.marcebanizi.backend.controller;

import com.marcebanizi.backend.model.ModeloServicio;
import com.marcebanizi.backend.model.ModeloSubServicio;
import com.marcebanizi.backend.service.ServicioRest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping(value = "/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
public class Controller {
    @Autowired
    private ServicioRest ServicioRest;


    @GetMapping("/servicios/{id}")
    @CrossOrigin
    public @ResponseBody ModeloServicio getServicios(@PathVariable Long id){
        return ServicioRest.getServiciosId(id);

    }

    @GetMapping("/subservicios/{id}")
    @CrossOrigin
    public @ResponseBody ModeloSubServicio getSubServicios(@PathVariable Long id){
        return ServicioRest.getSubServiciosId(id);
    }

    @GetMapping("/servicios/subservicios/{id}")
    @CrossOrigin
    public @ResponseBody ModeloSubServicio getEndpointSubServicios(@PathVariable Long id){
        return ServicioRest.getSubServiciosId(id);
    }

    @GetMapping("/test")
    @CrossOrigin
    public @ResponseBody ArrayList<String> about(){
        ArrayList<String> pageDataList = new ArrayList<>();
        pageDataList.add("json value");
        pageDataList.add("json value");
      return pageDataList;
    }
}