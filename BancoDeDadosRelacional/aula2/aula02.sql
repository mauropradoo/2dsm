-- Criar banco de dados bd_sistema_bancario
create database bd_sistema_bancario;

-- Criar 5 tabelas quaiquer
CREATE TABLE notebook (processador text);
CREATE TABLE celular (memoria text, camera text);
CREATE TABLE capacete (marca text, tamanho text);
CREATE TABLE mouse (marca text, dpimaximo text);
CREATE TABLE monitor (marca text, frequencia text);

-- Criar tabelas conforme MER (Sistema Bancario):
CREATE TABLE cliente (nome_cliente text, cidade_cliente text,endereco_cliente text);
CREATE TABLE conta (numero_conta integer, nome_agencia text, saldo integer);
CREATE TABLE emprestimo (numero_emprestimo integer, nome_agencia text, valor integer);
CREATE TABLE agencia (nome_agencia text, cidade_agencia text, depositos text);

-- Deletar as 5 tabelas criadas aleatoriamente
DROP TABLE notebook;
DROP TABLE celular;
DROP TABLE capacete;
DROP TABLE mouse;
DROP TABLE monitor;

-- alterar as tabelas conforme o MER atualizado
ALTER TABLE cliente RENAME TO tbl_cliente;
ALTER TABLE tbl_cliente ADD COLUMN idade integer;
ALTER TABLE tbl_cliente ADD COLUMN cpf integer;

ALTER TABLE conta RENAME TO tbl_conta;

ALTER TABLE emprestimo RENAME TO tbl_emprestimo;
    
ALTER TABLE agencia RENAME TO tbl_agencia;

-- Criar um esquema com o seu nome
CREATE SCHEMA mauro;
SHOW SEARCH_PATH;
SET SEARCH_PATH=mauro;
\dn


