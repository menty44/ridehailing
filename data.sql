create databcreate database ridehail
use ridehail
create table driver
(
    id          serial
        primary key,
    name        varchar not null,
    phonenumber varchar not null,
    suspended   boolean not null
);

create table passenger
(
    id          serial

            primary key,
    name        varchar not null,
    phonenumber varchar not null
);
create table ride
(
    id          serial
            primary key,
    passengerid integer not null,
    driverid    integer not null,
    ridestatus  varchar not null,
    destination jsonb   not null,
    pickup      jsonb   not null
);

create table users
(
    id       serial
            primary key,
    email    varchar(500) not null,
    password varchar(500)
);
create table driver
(
    id          serial
        primary key,
    name        varchar not null,
    phonenumber varchar not null,
    suspended   boolean not null
);

create table passenger
(
    id          serial

            primary key,
    name        varchar not null,
    phonenumber varchar not null
);
create table ride
(
    id          serial

            primary key,
    passengerid integer not null,
    driverid    integer not null,
    ridestatus  varchar not null,
    destination jsonb   not null,
    pickup      jsonb   not null
);

create table users
(
    id       serial

            primary key,
    email    varchar(500) not null,
    password varchar(500)
);