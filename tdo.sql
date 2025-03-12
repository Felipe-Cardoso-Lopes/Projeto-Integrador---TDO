create database bd_tdo;

use bd_tdo;

select*from usuario;

truncate table usuario;

set foreign_key_checks = 1;

create table `bd_tdo`.`usuario`
 (
	cpf char(11) primary key not null,
    nome varchar(255) not null,
    email varchar(255) not null,
	senha varchar(255) not null,
    dtNascimento date not null
 );

 select*from feedback;

truncate table feedback;
 
 create table `bd_tdo`.`feedback`
 (
	idFeedback int primary key not null auto_increment,
    feedback varchar(999),
    cpfUsuario CHAR(11) not null
 );
 
 alter table `bd_tdo`.`feedback`
 add column `dtHoraFeedback` datetime;
 
 alter table feedback
 add constraint fk_feedback_usuario
 foreign key (cpfUsuario)
 references usuario(cpf)
 on delete no action
 on update no action;
 
 
 select*from cronograma;

 truncate table cronograma;
 
 create table `bd_tdo`.`cronograma`
 (
	idCronograma int not null auto_increment primary key,
    dtCriacao datetime,
    dtAtualizacao datetime,
    cpfUsuario char(11) not null
 );
  
alter table cronograma
 add constraint fk_cronograma_usuario
 foreign key (cpfUsuario)
 references usuario(cpf)
 on delete no action
 on update no action;
 
 
 select*from tarefa;

 truncate table tarefa;
 
 create table `bd_tdo`.`tarefa`
 (
	idTarefa int not null auto_increment primary key,
    tarefa text not null,
    hrInicio time not null,
    hrFim time not null,
    idCronograma int not null
 );
 
 alter table tarefa
 add constraint fk_tarefa_cronograma
 foreign key (idCronograma)
 references cronograma(idCronograma)
 on delete no action
 on update no action;

create table `bd_tdo`.`avisos`
(
	idAviso int not null auto_increment primary key,
    descricaoAviso varchar(255) not null,
    cpfUsuario char(11) not null
);
 
alter table avisos
 add constraint fk_avisos_usuario
 foreign key (cpfUsuario)
 references usuario(cpf)
 on delete no action
 on update no action;