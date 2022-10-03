-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler version: 1.0.0-alpha1
-- PostgreSQL version: 15.0
-- Project Site: pgmodeler.io
-- Model Author: ---

-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.
-- 
-- object: teste | type: DATABASE --
-- DROP DATABASE IF EXISTS teste;
CREATE DATABASE teste;
-- ddl-end --


-- object: public."Pessoa" | type: TABLE --
-- DROP TABLE IF EXISTS public."Pessoa" CASCADE;
CREATE TABLE public."Pessoa" (
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT BY 1 MINVALUE 0 MAXVALUE 2147483647 START WITH 1 CACHE 1 ),
	nome text NOT NULL,
	nascimento date NOT NULL,
	CONSTRAINT "Pessoa_pk" PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE public."Pessoa" OWNER TO postgres;
-- ddl-end --


