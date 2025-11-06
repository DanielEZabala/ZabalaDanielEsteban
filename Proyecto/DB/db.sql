-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;

-- Tabla de Usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(15) UNIQUE NOT NULL,
    correo_electronico VARCHAR(100) UNIQUE NOT NULL,
    direccion VARCHAR(150),
    telefono VARCHAR(20) NOT NULL
);

-- Tabla de Libros
CREATE TABLE libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    anio YEAR,
    editorial VARCHAR(100),
    categoria VARCHAR(50),
    stock INT DEFAULT 0
);

-- Tabla de Préstamos
CREATE TABLE prestamos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_libro INT NOT NULL,
    id_usuario INT NOT NULL,
    dni_usuario VARCHAR(15),
    titulo_libro VARCHAR(150),
    fecha_prestamo DATE DEFAULT CURRENT_DATE,
    fecha_devolucion DATE NULL,
    FOREIGN KEY (id_libro) REFERENCES libros(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE ON UPDATE CASCADE, 
    ALTER TABLE prestamos ADD COLUMN estado ENUM('activo', 'devuelto') DEFAULT 'activo'
);
CREATE TABLE administradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

USE biblioteca;

INSERT INTO libros (titulo, autor, anio, editorial, categoria, stock) VALUES
('Cien años de soledad', 'Gabriel García Márquez', 1967, 'Sudamericana', 'Novela', 5),
('1984', 'George Orwell', 1949, 'Secker & Warburg', 'Distopía', 4),
('El Principito', 'Antoine de Saint-Exupéry', 1943, 'Reynal & Hitchcock', 'Infantil', 7),
('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605, 'Francisco de Robles', 'Clásico', 3),
('Fahrenheit 451', 'Ray Bradbury', 1953, 'Ballantine Books', 'Ciencia Ficción', 6),
('Crimen y castigo', 'Fiódor Dostoyevski', 1866, 'The Russian Messenger', 'Drama', 2),
('Orgullo y prejuicio', 'Jane Austen', 1813, 'T. Egerton', 'Romance', 5),
('La sombra del viento', 'Carlos Ruiz Zafón', 2001, 'Planeta', 'Misterio', 4),
('Los juegos del hambre', 'Suzanne Collins', 2008, 'Scholastic Press', 'Aventura', 8),
('Harry Potter y la piedra filosofal', 'J.K. Rowling', 1997, 'Bloomsbury', 'Fantasía', 10);

INSERT INTO usuarios (nombre, apellido, dni, correo_electronico, direccion, telefono) VALUES
('Laura', 'Pérez', '30111222', 'laura.perez@gmail.com', 'Calle 25 de Mayo 123', '3446422211'),
('Martín', 'Gómez', '29888777', 'martin.gomez@hotmail.com', 'Av. Artigas 456', '3446500099'),
('Sofía', 'López', '33444111', 'sofia.lopez@yahoo.com', 'Bv. Montana 789', '3446433322'),
('Javier', 'Rodríguez', '31222333', 'javier.rod@gmail.com', 'San Martín 345', '3446455544'),
('Ana', 'Martínez', '32555111', 'ana.mtz@gmail.com', 'Urquiza 678', '3446477788');

INSERT INTO prestamos (id_libro, id_usuario, dni_usuario, titulo_libro, fecha_prestamo, fecha_devolucion) VALUES
(1, 2, '29888777', 'Cien años de soledad', '2025-10-15', NULL),
(5, 1, '30111222', 'Fahrenheit 451', '2025-10-20', NULL),
(10, 4, '31222333', 'Harry Potter y la piedra filosofal', '2025-10-25', NULL);
