CREATE DATABASE productos_db;
USE productos_db;


--Tabla de usuarios
CREATE TABLE `usuarios` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`usename` VARCHAR(16) NOT NULL COLLATE 'utf8mb4_general_ci',
	`pasword` VARCHAR(16) NOT NULL COLLATE 'utf8mb4_general_ci',
	`fullname` VARCHAR(100) NOT NULL COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;

--Tabla de productos
CREATE TABLE `productos` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(180) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci',
	`descripcion` VARCHAR(255) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci',
	`referencia` VARCHAR(100) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci',
	`ubicacion` VARCHAR(100) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci',
	`sede_bodega` VARCHAR(100) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci',
	`user_id` INT(10) NOT NULL DEFAULT '0',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `fk_user` (`user_id`) USING BTREE,
	CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `productos_db`.`usuarios` (`id`) ON UPDATE RESTRICT ON DELETE RESTRICT
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;


DESCRIBE productos;