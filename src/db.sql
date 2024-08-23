-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-08-2024 a las 18:23:06
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `saludutng2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `numcontrol` varchar(10) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellidop` varchar(20) NOT NULL,
  `apellidom` varchar(20) NOT NULL,
  `grupo` varchar(19) NOT NULL,
  `carrera` varchar(40) NOT NULL,
  `correoe` varchar(40) NOT NULL,
  `numcelular` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`numcontrol`, `nombre`, `apellidop`, `apellidom`, `grupo`, `carrera`, `correoe`, `numcelular`) VALUES
('1223100347', 'alejandro', 'hernandez', 'gonzalez', 'GDS0631', 'Desarrollo de Software Multiplataforma', 'alejandro@email.com', '4681060990');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diagnostico`
--

CREATE TABLE `diagnostico` (
  `fechad` date NOT NULL,
  `nombrep` varchar(30) NOT NULL,
  `responsable` varchar(30) NOT NULL,
  `diagnosticop` text NOT NULL,
  `folio` int(10) NOT NULL,
  `numcontrol` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `diagnostico`
--

INSERT INTO `diagnostico` (`fechad`, `nombrep`, `responsable`, `diagnosticop`, `folio`, `numcontrol`) VALUES
('2024-08-08', 'cindy', 'Dra. Maria', 'La paciente tiene una gripe severa e infeccion en el estomago, co calentura', 4, '1223400490');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `justificante`
--

CREATE TABLE `justificante` (
  `edad` int(11) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `id_j` varchar(10) NOT NULL,
  `justificante` text NOT NULL,
  `folio` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `justificante`
--

INSERT INTO `justificante` (`edad`, `sexo`, `id_j`, `justificante`, `folio`) VALUES
(19, 'm', '1', 'se hace el presente jusificante para...', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `contrasena` varchar(10) NOT NULL,
  `numcontrol` varchar(10) NOT NULL,
  `usuario` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`contrasena`, `numcontrol`, `usuario`) VALUES
('juany.23', '1223100475', 'jyael'),
('cindy.29', '1223100600', 'cindyp');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`numcontrol`);

--
-- Indices de la tabla `diagnostico`
--
ALTER TABLE `diagnostico`
  ADD PRIMARY KEY (`folio`),
  ADD KEY `numcontrol` (`numcontrol`);

--
-- Indices de la tabla `justificante`
--
ALTER TABLE `justificante`
  ADD PRIMARY KEY (`id_j`),
  ADD KEY `folio` (`folio`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD KEY `numcontrol` (`numcontrol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `diagnostico`
--
ALTER TABLE `diagnostico`
  MODIFY `folio` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
