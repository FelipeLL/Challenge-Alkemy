CREATE DATABASE  IF NOT EXISTS `management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `management`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: management
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `ID_category` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operation`
--

DROP TABLE IF EXISTS `operation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operation` (
  `ID_operation` int NOT NULL AUTO_INCREMENT,
  `under` varchar(255) NOT NULL,
  `amount` double NOT NULL,
  `type` varchar(15) NOT NULL,
  `ID_user` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`ID_operation`),
  KEY `fk_operation_user_idx` (`ID_user`),
  CONSTRAINT `fk_operation_user` FOREIGN KEY (`ID_user`) REFERENCES `user` (`ID_user`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operation`
--

LOCK TABLES `operation` WRITE;
/*!40000 ALTER TABLE `operation` DISABLE KEYS */;
INSERT INTO `operation` VALUES (26,'concepto de nómina',1600,'income',1,'2022-08-19 20:20:14','2022-08-19'),(27,'nomina',1000,'income',1,'2022-08-19 20:21:37','2022-08-19'),(28,'prueba x',7000,'expense',4,'2022-08-19 20:22:14','2022-08-19'),(29,'income XI',7000,'income',3,'2022-08-19 20:32:09','2022-08-20'),(31,'rarara',12000,'income',4,'2022-08-19 20:33:40','2022-08-19'),(33,'expense 3',20000,'expense',4,'2022-08-20 00:51:05','2022-08-20'),(34,'income x',10000,'income',3,'2022-08-20 01:24:08','2022-08-20'),(35,'Expense XX',20000,'expense',3,'2022-08-20 01:25:11','2022-08-20'),(36,'Income TI',30000,'income',5,'2022-08-20 01:29:56','2022-08-20'),(37,'Income TII',5000,'income',5,'2022-08-20 01:30:23','2022-08-20');
/*!40000 ALTER TABLE `operation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operation_category`
--

DROP TABLE IF EXISTS `operation_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operation_category` (
  `ID_operation` int NOT NULL,
  `ID_category` int NOT NULL,
  PRIMARY KEY (`ID_operation`,`ID_category`),
  KEY `fk_operationCategory_category_idx` (`ID_category`),
  CONSTRAINT `fk_operation_Category_operation` FOREIGN KEY (`ID_operation`) REFERENCES `operation` (`ID_operation`),
  CONSTRAINT `fk_operationCategory_category` FOREIGN KEY (`ID_category`) REFERENCES `category` (`ID_category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operation_category`
--

LOCK TABLES `operation_category` WRITE;
/*!40000 ALTER TABLE `operation_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `operation_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `ID_user` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`ID_user`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'f3lip3.3z@prueba.com','$2a$08$jgf1l4tHEhmWWUG72cB6s.oP0QSEwq3/YiZESGCCinqbUkvo.MCiu','2022-08-17','2022-08-17'),(3,'steven@gmail.com','$2a$08$uP/zGCCv4BBjxneVPJYeSuwhQY7cnOIkYUjBd33zjYXoZz32K6Ryq','2022-08-18','2022-08-18'),(4,'f3lip3.3z@gmail.com','$2a$08$k6z810j5c30GayXNYB64PuK5c2wrQ7SjIL1azECmuXT75voTE7ZRO','2022-08-19','2022-08-19'),(5,'f3lip3.3z@hotmail.com','$2a$08$sv0DmDbwdJYjGVpqZ96IbuRtH9AVnH.Yehvq3Fu7CFHD6E3pOIZj6','2022-08-20','2022-08-20');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'management'
--

--
-- Dumping routines for database 'management'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-20 18:04:39
