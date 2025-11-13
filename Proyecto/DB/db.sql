
--http://localhost/ZabalaDanielEsteban/Proyecto/Src/index.php
--http://localhost/phpmyadmin/index.php?route=/database/structure&db=biblioteca

CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;


CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(15) UNIQUE NOT NULL,
    correo_electronico VARCHAR(100) UNIQUE NOT NULL,
    direccion VARCHAR(150),
    telefono VARCHAR(20) NOT NULL
);

CREATE TABLE libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    anio YEAR,
    editorial VARCHAR(100),
    categoria VARCHAR(50),
    stock INT DEFAULT 0
);

CREATE TABLE prestamos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_libro INT NOT NULL,
    id_usuario INT NOT NULL,
    dni_usuario VARCHAR(15),
    titulo_libro VARCHAR(150),
    fecha_prestamo DATE DEFAULT CURRENT_DATE,
    fecha_devolucion DATE NULL,
    estado ENUM('activo', 'devuelto') DEFAULT 'activo',
    devuelto TINYINT(1) DEFAULT 0,
    FOREIGN KEY (id_libro) REFERENCES libros(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE administradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO usuarios (nombre, apellido, dni, correo_electronico, direccion, telefono) VALUES
('Juan', 'Pérez', '12345678A', 'juan.perez@mail.com', 'Calle Falsa 123', '1234567890'),
('María', 'Gómez', '23456789B', 'maria.gomez@mail.com', 'Av. Siempre Viva 45', '2345678901'),
('Carlos', 'López', '34567890C', 'carlos.lopez@mail.com', 'Calle Luna 12', '3456789012'),
('Ana', 'Martínez', '45678901D', 'ana.martinez@mail.com', 'Av. Sol 89', '4567890123'),
('Luis', 'Sánchez', '56789012E', 'luis.sanchez@mail.com', 'Calle Estrella 34', '5678901234'),
('Sofía', 'Torres', '67890123F', 'sofia.torres@mail.com', 'Av. Mar 78', '6789012345'),
('Diego', 'Ramírez', '78901234G', 'diego.ramirez@mail.com', 'Calle Río 56', '7890123456'),
('Lucía', 'Fernández', '89012345H', 'lucia.fernandez@mail.com', 'Av. Montaña 90', '8901234567'),
('Pedro', 'Vargas', '90123456I', 'pedro.vargas@mail.com', 'Calle Bosque 11', '9012345678'),
('Valentina', 'Rojas', '01234567J', 'valentina.rojas@mail.com', 'Av. Lago 22', '0123456789'),
('Miguel', 'Díaz', '11223344K', 'miguel.diaz@mail.com', 'Calle Nube 33', '1122334455'),
('Carolina', 'Castillo', '22334455L', 'carolina.castillo@mail.com', 'Av. Viento 44', '2233445566'),
('Jorge', 'Mendoza', '33445566M', 'jorge.mendoza@mail.com', 'Calle Sol 55', '3344556677'),
('Paula', 'Herrera', '44556677N', 'paula.herrera@mail.com', 'Av. Río 66', '4455667788'),
('Andrés', 'Jiménez', '55667788O', 'andres.jimenez@mail.com', 'Calle Mar 77', '5566778899'),
('Isabella', 'Ruiz', '66778899P', 'isabella.ruiz@mail.com', 'Av. Luna 88', '6677889900'),
('Fernando', 'García', '77889900Q', 'fernando.garcia@mail.com', 'Calle Estrella 99', '7788990011'),
('Natalia', 'Ortiz', '88990011R', 'natalia.ortiz@mail.com', 'Av. Bosque 10', '8899001122'),
('Ricardo', 'Silva', '99001122S', 'ricardo.silva@mail.com', 'Calle Lago 20', '9900112233'),
('Laura', 'Cabrera', '10101010T', 'laura.cabrera@mail.com', 'Av. Montaña 30', '1010101010');

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
('Harry Potter y la piedra filosofal', 'J.K. Rowling', 1997, 'Bloomsbury', 'Fantasía', 10),
('El alquimista', 'Paulo Coelho', 1988, 'HarperCollins', 'Novela', 3),
('El código Da Vinci', 'Dan Brown', 2003, 'Doubleday', 'Misterio', 6),
('El señor de los anillos', 'J.R.R. Tolkien', 1954, 'Allen & Unwin', 'Fantasía', 5),
('La divina comedia', 'Dante Alighieri', 1320, 'Johann Numeister', 'Clásico', 2),
('La ciudad y los perros', 'Mario Vargas Llosa', 1963, 'Seix Barral', 'Novela', 3),
('El gran Gatsby', 'F. Scott Fitzgerald', 1925, 'Scribner', 'Novela', 4),
('Matar a un ruiseñor', 'Harper Lee', 1960, 'J.B. Lippincott & Co.', 'Drama', 5),
('El viejo y el mar', 'Ernest Hemingway', 1952, 'Charles Scribner\'s Sons', 'Novela', 2),
('Jane Eyre', 'Charlotte Brontë', 1847, 'Smith, Elder & Co.', 'Romance', 3),
('Drácula', 'Bram Stoker', 1897, 'Archibald Constable', 'Terror', 4),
('Frankenstein', 'Mary Shelley', 1818, 'Lackington, Hughes', 'Terror', 3),
('Alicia en el país de las maravillas', 'Lewis Carroll', 1865, 'Macmillan', 'Infantil', 5),
('El perfume', 'Patrick Süskind', 1985, 'Diogenes Verlag', 'Novela', 2),
('La metamorfosis', 'Franz Kafka', 1915, 'Kurt Wolff Verlag', 'Novela', 4),
('La historia interminable', 'Michael Ende', 1979, 'Thienemann Verlag', 'Fantasía', 3),
('El nombre de la rosa', 'Umberto Eco', 1980, 'Bompiani', 'Misterio', 2),
('El retrato de Dorian Gray', 'Oscar Wilde', 1890, 'Ward, Lock & Co', 'Novela', 3),
('Los pilares de la Tierra', 'Ken Follett', 1989, 'Macmillan', 'Histórica', 4),
('El juego de Ender', 'Orson Scott Card', 1985, 'Tor Books', 'Ciencia Ficción', 5),
('Siddhartha', 'Hermann Hesse', 1922, 'S. Fischer Verlag', 'Filosofía', 3),
('El código del mesías', 'José Saramago', 1990, 'Editorial Caminho', 'Novela', 2);


INSERT INTO prestamos (id_libro, id_usuario, dni_usuario, titulo_libro, fecha_prestamo, fecha_devolucion, devuelto) VALUES
(1, 1, '12345678A', 'Cien años de soledad', '2025-11-01', '2025-11-15', 0),
(2, 2, '23456789B', '1984', '2025-11-02', '2025-11-16', 0),
(3, 3, '34567890C', 'El Principito', '2025-11-03', '2025-11-17', 0),
(4, 4, '45678901D', 'Don Quijote de la Mancha', '2025-11-04', '2025-11-18', 0),
(5, 5, '56789012E', 'Fahrenheit 451', '2025-11-05', '2025-11-19', 0),
(6, 6, '67890123F', 'Crimen y castigo', '2025-11-06', '2025-11-20', 0),
(7, 7, '78901234G', 'Orgullo y prejuicio', '2025-11-07', '2025-11-21', 0),
(8, 8, '89012345H', 'La sombra del viento', '2025-11-08', '2025-11-22', 0),
(9, 9, '90123456I', 'Los juegos del hambre', '2025-11-09', '2025-11-23', 0),
(10, 10, '01234567J', 'Harry Potter y la piedra filosofal', '2025-11-10', '2025-11-24', 0);
