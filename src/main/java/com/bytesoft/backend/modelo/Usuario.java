package com.bytesoft.backend.modelo;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Arrays;

@Entity
public class Usuario {
    @Id
    private int cedula;
    private String contrasena;
    private String pNom;
    private String pApe;
    private String sNom;
    private String sApe;
    private String correo;
    private byte[] fotoPerfil;
    private short bajalogica;

    public Usuario(){

    }

    public Usuario(int cedula, String contrasena, String pNom, String pApe, String sNom, String sApe, String correo, byte[] fotoPerfil, short bajalogica) {
        this.cedula = cedula;
        this.contrasena = contrasena;
        this.pNom = pNom;
        this.pApe = pApe;
        this.sNom = sNom;
        this.sApe = sApe;
        this.correo = correo;
        this.fotoPerfil = fotoPerfil;
        this.bajalogica = bajalogica;
    }

    public int getCedula() {
        return cedula;
    }

    public void setCedula(int cedula) {
        this.cedula = cedula;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getpNom() {
        return pNom;
    }

    public void setpNom(String pNom) {
        this.pNom = pNom;
    }

    public String getpApe() {
        return pApe;
    }

    public void setpApe(String pApe) {
        this.pApe = pApe;
    }

    public String getsNom() {
        return sNom;
    }

    public void setsNom(String sNom) {
        this.sNom = sNom;
    }

    public String getsApe() {
        return sApe;
    }

    public void setsApe(String sApe) {
        this.sApe = sApe;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public byte[] getFotoPerfil() {
        return fotoPerfil;
    }

    public void setFotoPerfil(byte[] fotoPerfil) {
        this.fotoPerfil = fotoPerfil;
    }

    public short getBajalogica() {
        return bajalogica;
    }

    public void setBajalogica(short bajalogica) {
        this.bajalogica = bajalogica;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "cedula=" + cedula +
                ", contrasena='" + contrasena + '\'' +
                ", pNom='" + pNom + '\'' +
                ", pApe='" + pApe + '\'' +
                ", sNom='" + sNom + '\'' +
                ", sApe='" + sApe + '\'' +
                ", correo='" + correo + '\'' +
                ", fotoPerfil=" + Arrays.toString(fotoPerfil) +
                ", bajalogica=" + bajalogica +
                '}';
    }
}
