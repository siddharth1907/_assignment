
create database elderlycare;
use elderlycare;
create table users(
user_id int primary key auto_increment,
email varchar(50) not null unique,
uname varchar(50) not null,
password varchar(100) not null,
registered boolean default false not null
);


