create database ridehail
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
        constraint "PK_50e940dd2c126adc20205e83fac"
            primary key,
    name        varchar not null,
    phonenumber varchar not null
);
create table ride
(
    id          serial
        constraint "PK_f6bc30c4dd875370bafcb54af1b"
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
        constraint "PK_a3ffb1c0c8416b9fc6f907b7433"
            primary key,
    email    varchar(500) not null,
    password varchar(500)
);