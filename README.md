CREATE DATABASE IF NOT EXISTS `cafe`;
USE `cafe`;

DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(225) NOT NULL,
    `price` varchar(4) NOT NULL,
    `description` text NOT NULL,
    `image` varchar(225) NOT NULL,
    `createdAT` datetime NOT NULL,
    `updatedAT` datetime NOT NULL,
    PRIMARY KEY (id) 

);