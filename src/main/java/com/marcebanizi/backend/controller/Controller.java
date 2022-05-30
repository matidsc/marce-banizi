package com.marcebanizi.backend.controller;

import com.marcebanizi.backend.model.ModeloImagen;
import com.marcebanizi.backend.model.ModeloServicio;
import com.marcebanizi.backend.model.ModeloServicioNavbar;
import com.marcebanizi.backend.model.ModeloSubServicio;
import com.marcebanizi.backend.service.ServicioRest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletResponse;
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

    @GetMapping("/servicios/{id}/subservicios")
    @CrossOrigin
    public @ResponseBody List<ModeloSubServicio> getSubServiciosSegunServicio(@PathVariable Long id){
        return ServicioRest.getSubServiciosSegunServicio(id);
    }

    @GetMapping("/serviciosnavbar")
    @CrossOrigin
    public @ResponseBody List<ModeloServicioNavbar> getServiciosNavbar(){
        return ServicioRest.getServiciosNavbar();

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

    @GetMapping("/servicios/{id}/imagenes")
    @CrossOrigin
    public @ResponseBody List<ModeloImagen> getImagenesPorServicios(@PathVariable Long id){
        return ServicioRest.getImgServicioId(id);
    }

    @GetMapping("/servicios/subservicios/{id}/imagenes")
    @CrossOrigin
    public @ResponseBody List<ModeloImagen> getImagenesPorSubServicios(@PathVariable Long id){
        return ServicioRest.getImgSubServicioId(id);
    }

    /*@GetMapping("/test")
    @CrossOrigin
    public @ResponseBody ArrayList<String> test(){
        List<ModeloServicio> serviciosTest = ServicioRest.getServicios();
        List<ModeloSubServicio> subserviciosTest = ServicioRest.getSubServicios();
        System.out.println();
        ArrayList<String> pageDataList = new ArrayList<>();
        pageDataList.add("BackendTest - Debug Only");
        pageDataList.add(ServicioRest.getUrlErrorMapping());
        for (ModeloServicio i : serviciosTest){
            pageDataList.add(i.toString());
            
        }
        for (ModeloSubServicio i : subserviciosTest){
            pageDataList.add(i.toString());
        }
      return pageDataList;
    }*/
    
    @GetMapping("/")
    @CrossOrigin
    public void method(HttpServletResponse httpServletResponse) {
        httpServletResponse.setHeader("Location", ServicioRest.getUrlErrorMapping());
        httpServletResponse.setStatus(302);
    }

}