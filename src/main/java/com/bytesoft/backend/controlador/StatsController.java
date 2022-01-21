package com.bytesoft.backend.controlador;

import com.bytesoft.backend.modelo.ChartPoints;
import com.bytesoft.backend.modelo.pages.PageData;
import com.bytesoft.backend.servicio.ServicioEstadistica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.attachment.AttachmentMarshaller;
import java.util.*;

@RestController
@RequestMapping(value = "/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
public class StatsController {
    @Autowired
    private ServicioEstadistica servicioEstadistica;

    @GetMapping("/charts")
    @CrossOrigin
    public @ResponseBody ArrayList<Map<String, Object>> charts(){
        ArrayList<Map<String, Object>> charts = new ArrayList<>();
        charts.add(getArrayStats("Patologías más diagnosticadas", servicioEstadistica.masDiagnosticadas()));
        charts.add(getArrayStats("Cantidad de usuarios según edad", servicioEstadistica.someQuery()));
        return charts;
    }

    @GetMapping("/about")
    @CrossOrigin
    public @ResponseBody ArrayList<PageData> about(){
        ArrayList<PageData> pageDataList = new ArrayList<>();
        pageDataList.add(new PageData(UUID.randomUUID().toString(), "Nuestra misión como empresa de software", "ByteSoft será una empresa dedicada exclusivamente al desarrollo informático. Planeamos proyectarnos como la opción ideal en cuanto a empresas de desarrollo de software en Uruguay y, a futuro, internacionalmente. Buscamos que si alguien necesita un producto de software personalizado, piense en ByteSoft como su solución."));
        pageDataList.add(new PageData(UUID.randomUUID().toString(), "Visión de ByteSoft", "Somos una empresa de desarrollo de software personalizado ubicada en el barrio Buceo que busca satisfacer las necesidades de nuestros clientes mediante el desarrollo de programas únicos y a medida, a gusto y necesidades de cada cliente, brindándoles un producto de una calidad única además de un debido soporte para el mismo. Nuestra clientela se basa en empresas nacionales o terceros que necesiten una solución personalizada en software, ese es nuestro trabajo."));
        pageDataList.add(new PageData(UUID.randomUUID().toString(), "Los valores que nos representan", "En ByteSoft nos comprometemos a generar productos de excelente calidad con un respaldo y soporte adecuado al mismo, siempre de la forma más eficiente posible y brindándole a nuestros clientes las opciones suficientes como para que puedan ser libres de decidir el costo y su gamma. Pensamos cumplir estos valores siempre respetando las normas legales y sociales, promoviendo la gran responsabilidad que acarreamos con nuestros clientes y empleados, fomentando y respetando la diversidad y el trato justo con el público y los empleados y por último, mantener siempre una transparencia y diversidad en nuestros catálogos y/o soluciones para nuestros clientes. Buscamos siempre avanzar hacia un futuro mejor donde todos puedan estar conectados y actualizados, donde seamos reconocidos no solo por nuestro servicio a los clientes, sino por aportar y ayudar a crecer profesionalmente a nuestros empleados. Promovemos siempre nuestra producción y desarrollo en un ámbito sano y responsable para con el medioambiente, tenemos un fuerte compromiso con este mismo."));
        return pageDataList;
    }

    @GetMapping("/figma")
    @CrossOrigin
    public @ResponseBody Map<String, String> getFigma(){
        HashMap<String, String> urlList = new HashMap<>();
        urlList.put("url", servicioEstadistica.getFigmaUrl());
        return urlList;
    }

    @GetMapping("/usersactivos")
    @CrossOrigin
    public @ResponseBody int usersActivos(){
        return servicioEstadistica.usuariosActivos();
    }

    private Map<String, Object> getArrayStats(String title, List<ChartPoints> lista){
        HashMap<String, Object> result = new HashMap<>();
        ArrayList<String> xAxis = new ArrayList<>();
        ArrayList<Integer> yAxis = new ArrayList<>();
        for(ChartPoints var : lista){
            xAxis.add(var.getX());
        }
        for(ChartPoints var : lista){
            yAxis.add(var.getY());
        }
        result.put("yAxis", yAxis);
        result.put("xAxis", xAxis);
        result.put("ChartName", title);
        result.put("id", UUID.randomUUID().toString());
        return result;
    }
}