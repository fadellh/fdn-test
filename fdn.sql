--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2021-12-20 07:05:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE fdn;
--
-- TOC entry 3313 (class 1262 OID 16394)
-- Name: fdn; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE fdn WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Indonesia.1252';


ALTER DATABASE fdn OWNER TO postgres;

\connect fdn

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3307 (class 0 OID 16396)
-- Dependencies: 210
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."order" ("ID", firstname, lastname, email, item, quantity, total_price) VALUES (1, 'Tommy', 'Bejo', 'tommy@mail.com', 'Barang 1', 2, 10000);
INSERT INTO public."order" ("ID", firstname, lastname, email, item, quantity, total_price) VALUES (2, 'Chandra', 'Liaw', 'chan@gmail.com', 'Barang 10', 1, 18000);
INSERT INTO public."order" ("ID", firstname, lastname, email, item, quantity, total_price) VALUES (3, 'Ricky', 'Tejo', 'ric@gmail.com', 'Barang 3', 3, 50000);
INSERT INTO public."order" ("ID", firstname, lastname, email, item, quantity, total_price) VALUES (4, 'Tommy', 'Bejo', 'tommy@mail.com', 'Barang 2', 6, 90000);


--
-- TOC entry 3315 (class 0 OID 0)
-- Dependencies: 209
-- Name: order_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."order_ID_seq"', 1, false);


-- Completed on 2021-12-20 07:05:18

--
-- PostgreSQL database dump complete
--

