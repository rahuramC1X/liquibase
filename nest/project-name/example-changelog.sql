--liquibase formatted sql

--changeset your.name:1 labels:example-label context:example-context
--comment: example comment
alter table products add column country varchar(2)
