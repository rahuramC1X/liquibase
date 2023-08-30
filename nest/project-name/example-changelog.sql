--liquibase formatted sql

--changeset your.name:1 labels:example-label context:example-context
--comment: example comment
ALTER TABLE PRODUCTS ADD COLUMN COUNTRY VARCHAR(2)
