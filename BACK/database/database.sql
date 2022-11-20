CREATE DATABASE ruralesurgs;

CREATE TABLE responsable(
    id serial NOT NULL,
    nombres varchar(20),
    apellidos varchar(25),
    direccion varchar(150),
    ciudad varchar(15),
    fecha_nacimiento date,
    rh varchar(3),
    CONSTRAINT pk_responsable PRIMARY KEY (id)
);

CREATE TABLE paciente(
    id serial NOT NULL,
    name varchar(20),
    lastname varchar(25),
    birthdate date,
    cellphone varchar(20),
    city varchar(25),
    muncipality varchar(25),
    address varchar(50),
    rh varchar(4),
    weight float(30),
    height float(20),
    CONSTRAINT pk_paciente PRIMARY KEY (id)
);

CREATE TABLE medico(
    id serial NOT NULL,
    name varchar(20),
    lastname varchar(25),
    birthdate date,
    cellphone varchar(20),
    city varchar(25),
    muncipality varchar(25),
    address varchar(50),
    rh varchar(4),
    specialty varchar(30),
    schedule varchar(20),
    CONSTRAINT pk_medico PRIMARY KEY (id) 
);

CREATE TABLE consulta(
    id serial NOT NULL,
    id_med serial NOT NULL,
    id_pac serial NOT NULL,
    motivo varchar(250),
    CONSTRAINT pk_consulta PRIMARY KEY (id),
    CONSTRAINT fk_med FOREIGN KEY (id_med) REFERENCES "medico" (id),
    CONSTRAINT fk_pac FOREIGN KEY (id_pac) REFERENCES "paciente" (id)
);

CREATE TABLE medicamento(
    id serial NOT NULL,
    nombre varchar(25),
    dosis varchar(25),
    CONSTRAINT pk_medic PRIMARY KEY (id)
);

CREATE TABLE incapacidad(
    id serial NOT NULL,
    fecha_ini date,
    fecha_fin date,
    CONSTRAINT pk_inc PRIMARY KEY (id)
);

CREATE TABLE diagnostico(
    id serial NOT NULL,
    id_medic serial NOT NULL,
    id_inc serial NOT NULL,
    diagnostico varchar(500),
    CONSTRAINT pk_diag PRIMARY KEY (id),
    CONSTRAINT fk_medic FOREIGN KEY (id_medic) REFERENCES "medicamento" (id),
    CONSTRAINT fk_inc FOREIGN KEY (id_inc) REFERENCES "incapacidad" (id)
);
