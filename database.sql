CREATE TABLE "list" (
"id" SERIAL PRIMARY KEY,
"item" VARCHAR(80),
"quantity" FLOAT,
"unit" VARCHAR(20),
"purchased" BOOLEAN DEFAULT FALSE
);