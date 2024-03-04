-- criar banco de dados bd_aula03
CREATE DATABASE bd_aula03;
-- criar tabelas do MER 
create table tbl_cliente (codigo_cliente integer PRIMARY key, nome text not null, cidade text, endereco text);
create table tbl_titulo (codigo_titulo integer PRIMARY key, titulo text not null, descricao text, categoria text);
create table tbl_emprestimo (numero_emprestimo integer PRIMARY key, codigo_cliente integer, codigo_livro integer);
create table tbl_livros (cod_livro integer PRIMARY key, codigo_titulo integer, status text);

-- criar domains
Create domain chk_status text check (value in ('DISPONIVEL','ALUGADO'));
Create domain chk_categoria text check (value in ('DRAMA','COMEDIA'));

-- adicionar domain a tabela
alter table tbl_titulo add chk_status VALUE 


-- adicionar chaves estrangeiras



