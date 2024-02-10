/*
 Navicat Premium Data Transfer

 Source Server         : postgres
 Source Server Type    : PostgreSQL
 Source Server Version : 160002 (160002)
 Source Host           : localhost:5432
 Source Catalog        : petdb
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 160002 (160002)
 File Encoding         : 65001

 Date: 10/02/2024 10:36:58
*/


-- ----------------------------
-- Sequence structure for appointments_appointmentid_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."appointments_appointmentid_seq";
CREATE SEQUENCE "public"."appointments_appointmentid_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for pets_petid_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."pets_petid_seq";
CREATE SEQUENCE "public"."pets_petid_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."users_id_seq";
CREATE SEQUENCE "public"."users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for appointments
-- ----------------------------
DROP TABLE IF EXISTS "public"."appointments";
CREATE TABLE "public"."appointments" (
  "appointmentid" int4 NOT NULL DEFAULT nextval('appointments_appointmentid_seq'::regclass),
  "patientname" varchar(100) COLLATE "pg_catalog"."default",
  "appointmentdate" date,
  "contactnumber" varchar(100) COLLATE "pg_catalog"."default",
  "doctor" varchar(100) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of appointments
-- ----------------------------
INSERT INTO "public"."appointments" VALUES (1, 'Juan Dela Cruzsss - Doggy', '2024-02-10', '09269440075', '');
INSERT INTO "public"."appointments" VALUES (2, 'Juan Dela Cruz - Doggy2', '2024-02-03', '09269440075', '');

-- ----------------------------
-- Table structure for pets
-- ----------------------------
DROP TABLE IF EXISTS "public"."pets";
CREATE TABLE "public"."pets" (
  "petid" int4 NOT NULL DEFAULT nextval('pets_petid_seq'::regclass),
  "petname" varchar(100) COLLATE "pg_catalog"."default",
  "owner" varchar(100) COLLATE "pg_catalog"."default",
  "contactnumber" varchar(100) COLLATE "pg_catalog"."default",
  "registered_date" date NOT NULL,
  "breed" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of pets
-- ----------------------------
INSERT INTO "public"."pets" VALUES (4, 'Doggy2', 'Juan Dela Cruz', '09269440075', '2024-02-10', 'German Shepperd');
INSERT INTO "public"."pets" VALUES (3, 'Doggy', 'Juan Dela Cruzsss', '09269440075', '2024-02-10', 'German Shepperdsss');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  "firstname" varchar(100) COLLATE "pg_catalog"."default",
  "middlename" varchar(100) COLLATE "pg_catalog"."default",
  "lastname" varchar(100) COLLATE "pg_catalog"."default",
  "email" varchar(50) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "usertype" int4,
  "created_at" date NOT NULL,
  "updated_at" date
)
;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO "public"."users" VALUES (1, 'sample', 'sample', 'sample', 'sample@gmail.com', '$2b$10$5MIk5CY5DM2ccgKMO3GVl.8pAibrShrVREg4tLJ4WMtupoTM7EWQq', 2, '2024-02-10', NULL);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."appointments_appointmentid_seq"
OWNED BY "public"."appointments"."appointmentid";
SELECT setval('"public"."appointments_appointmentid_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."pets_petid_seq"
OWNED BY "public"."pets"."petid";
SELECT setval('"public"."pets_petid_seq"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."users_id_seq"
OWNED BY "public"."users"."id";
SELECT setval('"public"."users_id_seq"', 1, true);

-- ----------------------------
-- Primary Key structure for table appointments
-- ----------------------------
ALTER TABLE "public"."appointments" ADD CONSTRAINT "appointments_pkey" PRIMARY KEY ("appointmentid");

-- ----------------------------
-- Primary Key structure for table pets
-- ----------------------------
ALTER TABLE "public"."pets" ADD CONSTRAINT "pets_pkey" PRIMARY KEY ("petid");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
