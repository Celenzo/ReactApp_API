CREATE DATABASE reactappdb;

CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE TABLE Conv (
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    name VARCHAR(64) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE Messages (
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    msg VARCHAR(1024) NOT NULL,
    date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    convid uuid NOT NULL REFERENCES Conv ON DELETE CASCADE
);