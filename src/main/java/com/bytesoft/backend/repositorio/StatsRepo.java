package com.bytesoft.backend.repositorio;

import com.bytesoft.backend.modelo.ChartPoints;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatsRepo extends JpaRepository<ChartPoints, Integer> {

    @Query(
        value="select nombre as x, count(paciente_obtiene_diagnostico.idPatologia) as y " +
        "from paciente_obtiene_diagnostico, patologia " +
        "where paciente_obtiene_diagnostico.idPatologia = patologia.idPatologia " +
        "group by paciente_obtiene_diagnostico.idPatologia " +
        "order by count(y) desc limit 5",
        nativeQuery = true)
    List<ChartPoints> masDiagnosticadas();


    @Query(
        value="select distinct year(curdate())-year(fecNac) as x, count(*) as y " +
        "from paciente " +
        "group by x " +
        "order by count(y) " +
        "desc",
        nativeQuery = true)
    List<ChartPoints> someQuery();

    @Query(value="select count(*) from usuario where bajalogica = 0", nativeQuery = true)
    int usuariosActivos();

    @Query(value="select urlDato from urlFigma where id=1 limit 1;", nativeQuery = true)
    String figmaUrl();
}