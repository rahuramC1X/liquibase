--liquibase formatted sql

--changeset your.name:1 labels:example-label context:example-context
--comment: example comment
alter table products add column country varchar(2)

--changeset rahuram.dev:4 labels:add a new column in the database context:The context is to add a new column
ALTER TABLE products DROP COLUMN country
