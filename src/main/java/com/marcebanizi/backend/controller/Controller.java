package com.marcebanizi.backend.controller;

import com.marcebanizi.backend.model.ModeloServicio;
import com.marcebanizi.backend.model.ModeloSubServicio;
import com.marcebanizi.backend.service.ServicioRest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RestController

@RequestMapping(value = "/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
public class Controller {
    @Autowired
    private ServicioRest ServicioRest;


    @GetMapping("/servicios")
    @CrossOrigin
    public @ResponseBody List<ModeloServicio> getServicios(){
        return ServicioRest.getServicios();
    }

    @GetMapping("/subservicios")
    @CrossOrigin
    public @ResponseBody List<ModeloSubServicio> getSubServicios(){
        return ServicioRest.getSubServicios();
    }

    @GetMapping("/test")
    @CrossOrigin
    public @ResponseBody ArrayList<String> about(){
        ArrayList<String> pageDataList = new ArrayList<>();
        pageDataList.add("json value");
        pageDataList.add("json value");
      return pageDataList;
    }

    @GetMapping("/hello")
    public Collection<String> sayHello() {
        return IntStream.range(0, 10)
                .mapToObj(i -> "Hello number " + i)
                .collect(Collectors.toList());
    }
}