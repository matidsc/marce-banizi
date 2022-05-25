/*
	DDL - Creación de tablas para backend web
*/
/* Inicio */
	DROP DATABASE IF EXISTS marce_banizi;
	CREATE DATABASE IF NOT EXISTS marce_banizi;
	USE marce_banizi;
/* Creación de tablas */
	use marce_banizi;
	CREATE TABLE servicio_cat_bck (
		id MEDIUMINT NOT NULL,
		nombre TEXT,
		descripcion MEDIUMTEXT,
		precio MEDIUMINT,
		PRIMARY KEY (id)
	) ENGINE = InnoDB DEFAULT CHARSET = UTF8; 

	CREATE TABLE subservicio_cat_bck (
		id MEDIUMINT NOT NULL,
		nombre TEXT,
		descripcion MEDIUMTEXT,
		precio MEDIUMINT,
		PRIMARY KEY (id),
		CONSTRAINT fk_subservicio_cat_bck_id FOREIGN KEY (id) REFERENCES servicio_cat_bck (id)
	) ENGINE = InnoDB DEFAULT CHARSET = UTF8; 

	CREATE TABLE img_servicio_cat_bck (
		id MEDIUMINT NOT NULL,
		img_id MEDIUMINT NOT NULL,
		url MEDIUMTEXT,	
		PRIMARY KEY (id),

		CONSTRAINT fk_img_servicio_cat_bck_id FOREIGN KEY (id) REFERENCES servicio_cat_bck (id)
	) ENGINE = InnoDB DEFAULT CHARSET = UTF8; 

	CREATE TABLE img_subservicio_cat_bck (
		id MEDIUMINT NOT NULL,
		img_id MEDIUMINT NOT NULL,
		url MEDIUMTEXT,	
		PRIMARY KEY (id),

		CONSTRAINT fk_img_subservicio_cat_bck_id FOREIGN KEY (id) REFERENCES subservicio_cat_bck (id)
	) ENGINE = InnoDB DEFAULT CHARSET = UTF8; 
    /* Fin de tablas */
/* Fin */