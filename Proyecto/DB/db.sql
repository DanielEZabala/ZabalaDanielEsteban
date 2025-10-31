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
    año_lanzamiento YEAR,
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
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE ON UPDATE CASCADE
);
USE biblioteca;

-- Insertar Usuarios
INSERT INTO usuarios (nombre, apellido, dni, correo_electronico, direccion) VALUES
('Juan', 'Pérez', '12345678A', 'juan.perez@example.com', 'Calle Falsa 123'),
('María', 'Gómez', '87654321B', 'maria.gomez@example.com', 'Av. Siempre Viva 742'),
('Carlos', 'López', '45678912C', 'carlos.lopez@example.com', 'Boulevard Central 55');

-- Insertar Libros
INSERT INTO libros (titulo, autor, año_lanzamiento, editorial, categoria, stock) VALUES
('Cien años de soledad', 'Gabriel García Márquez', 1967, 'Sudamericana', 'Novela', 5),
('1984', 'George Orwell', 1949, 'Secker & Warburg', 'Distopía', 3),
('El principito', 'Antoine de Saint-Exupéry', 1943, 'Reynal & Hitchcock', 'Infantil', 8),
('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605, 'Francisco de Robles', 'Clásico', 2),
('La sombra del viento', 'Carlos Ruiz Zafón', 2001, 'Planeta', 'Misterio', 6),
('Crónica de una muerte anunciada', 'Gabriel García Márquez', 1981, 'Oveja Negra', 'Novela', 4),
('El código Da Vinci', 'Dan Brown', 2003, 'Doubleday', 'Thriller', 5),
('Los juegos del hambre', 'Suzanne Collins', 2008, 'Scholastic Press', 'Ciencia ficción', 7),
('It', 'Stephen King', 1986, 'Viking Press', 'Terror', 3),
('Orgullo y prejuicio', 'Jane Austen', 1813, 'T. Egerton', 'Romance', 6);

-- Insertar Préstamos
INSERT INTO prestamos (id_libro, id_usuario, dni_usuario, titulo_libro, fecha_prestamo, fecha_devolucion) VALUES
(1, 1, '12345678A', 'Cien años de soledad', '2025-10-25', NULL),
(5, 2, '87654321B', 'La sombra del viento', '2025-10-28', NULL);
