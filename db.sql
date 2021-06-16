CREATE DATABASE IF NOT EXISTS portfolio CHARACTER SET utf8;

USE portfolio;

CREATE TABLE IF NOT EXISTS project(
    id_project INTEGER PRIMARY KEY AUTO_INCREMENT,
    nom_project VARCHAR(100) NOT NULL,
    description_project VARCHAR(255),
    url_image_project VARCHAR(255),
    url_github_project VARCHAR(255),
    url_project_deploy VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS techno(
    id_techno INTEGER PRIMARY KEY AUTO_INCREMENT,
    nom_techno VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS project_techno(
    id_project_techno INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_techno INTEGER,
    id_project INTEGER,

    CONSTRAINT fk_techno FOREIGN KEY (id_techno) REFERENCES techno(id_techno)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

    CONSTRAINT fk_project FOREIGN KEY (id_project) REFERENCES project(id_project)
    ON DELETE CASCADE
    ON UPDATE CASCADE

);