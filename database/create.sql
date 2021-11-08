CREATE TABLE client(
   id_client int PRIMARY KEY,
   nom text,
   prenom text,
   adress text,
   tel int
);

CREATE TABLE compteur(
   id_compteur int PRIMARY KEY,
   id_client int,
   tarif int,
   PMD int,
   coef int,
   puissance int
);

CREATE TABLE capteur(
   id_cmp int,
   index_cmp int,
   date timestamp,
   PRIMARY KEY (id_cmp, date)
) WITH CLUSTERING ORDER BY (date DESC);

CREATE TABLE erreurs(
   id_cmp int,
   type int,
   discr text,
   corrected boolean,
   date timestamp,
   PRIMARY KEY (id_cmp, date)
) WITH CLUSTERING ORDER BY (date DESC);

CREATE TABLE consomation(
   id_client int,
   index_a int,
   index_n int,
   date timestamp,
   payer boolean,
   PRIMARY KEY (id_client, date)
) WITH CLUSTERING ORDER BY (date DESC);
