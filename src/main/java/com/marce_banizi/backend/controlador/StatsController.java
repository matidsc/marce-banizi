package com.marce_banizi.backend.controlador;

import com.marce_banizi.backend.servicio.ServicioEstadistica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping(value = "/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
public class StatsController {
    @Autowired
    private ServicioEstadistica servicioEstadistica;

    @GetMapping("/servicios")
    @CrossOrigin
    public @ResponseBody Map<String, String> getServicios(){
        return (Map<String, String>) servicioEstadistica.getServicios();
    }
    @GetMapping("/subservicios")
    @CrossOrigin
    public @ResponseBody Map<String, String> getSubServicios(){
        return (Map<String, String>) servicioEstadistica.getSubServicios();
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