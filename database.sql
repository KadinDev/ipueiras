CREATE DATABASE ipueirasforall

CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "avatar" text NOT NULL,
    --"user_id" int, -- user_id para identificar qual a img do user
    "name" text NOT NULL, -- NOT NULL, para informar que não poderá enviar campo vazio
    "email" text UNIQUE NOT NULL,
    "password" text NOT NULL,
    "contact" text NOT NULL, --text pq no input tem a mascara
    "address" text NOT NULL,
    "instagram" text NOT NULL,
    "facebook" text NOT NULL,
    "youtube" text NOT NULL,
    "about" text NOT NULL,
    "latitude" numeric NOT NULL,
    "longitude" numeric NOT NULL,
    "attendance" text NOT NULL,
    "open_weekend" numeric NOT NULL,
    "created_at" timestamp DEFAULT (now()),
    "updated_at" timestamp DEFAULT (now())
);


CREATE TABLE "avatares" (
    "id" SERIAL PRIMARY KEY,
    "name" text,
    "path" text NOT NULL,
    "avatar_id" int NOT NULL
);
