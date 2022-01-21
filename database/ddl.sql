/*
ByteSoft - 2020
DDL - Creación de tablas para backend web
*/

/* Inicio */
	DROP DATABASE IF EXISTS bytesoft_backend;
	CREATE DATABASE IF NOT EXISTS bytesoft_backend;
    USE bytesoft_backend;
    
    /* Creación de tablas */
    use bytesoft_bdd2;
    CREATE TABLE urlFigma (
        id int AUTO_INCREMENT PRIMARY KEY,
        urlDato varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = UTF8; 


    CREATE TABLE component (
        routerPage VARCHAR(16) NOT NULL,
        pageTitle VARCHAR (32),
        pageInfo JSON,
        bajalogica BOOLEAN NOT NULL DEFAULT FALSE,
        PRIMARY KEY (routerPage)
    ) ENGINE = InnoDB DEFAULT CHARSET = UTF8; 

    CREATE TABLE subComponent (
        subComponentID INT AUTO_INCREMENT,
        routerPage VARCHAR(16) NOT NULL,
        componentInfo JSON,
        bajalogica BOOLEAN NOT NULL DEFAULT FALSE,
        PRIMARY KEY (subComponentID, routerPage),
        CONSTRAINT fk_subComponent_component FOREIGN KEY (routerPage) REFERENCES component (routerPage)
    ) ENGINE = InnoDB DEFAULT CHARSET = UTF8;
    /* Fin de tablas */
/* Fin */