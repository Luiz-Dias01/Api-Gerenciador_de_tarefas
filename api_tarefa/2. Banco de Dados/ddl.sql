CREATE DATABASE tarefa;

USE tarefa;

CREATE TABLE tb_tarefas (
id_tarefas		INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
ds_tarefas		VARCHAR(200) NOT NULL,
nr_ordem		INT NOT NULL,
bt_finalizado		BOOLEAN NOT NULL,
dt_cadastro		DATE
);