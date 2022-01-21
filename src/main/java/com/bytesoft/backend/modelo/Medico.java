package com.bytesoft.backend.modelo;

import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.lang.String;

@Entity
public class Medico extends Usuario{
    private String especializacion;

    public Medico(int cedula, String contrasena, String pNom, String pApe, String sNom, String sApe, String correo, byte[] fotoPerfil, short bajalogica, String especializacion) {
        super(cedula, contrasena, pNom, pApe, sNom, sApe, correo, fotoPerfil, bajalogica);
        this.especializacion = especializacion;
    }

    public String getEspecializacion() {
        return especializacion;
    }

    public void setEspecializacion(String especializacion) {
        this.especializacion = especializacion;
    }

    @Override
    public String toString() {
        return "Medico{" +
                "especializacion='" + especializacion + '\'' +
                '}';
    }
}
