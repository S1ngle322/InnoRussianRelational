# InnoRussianRelational

this part of assignment was modified after the deadline...

## Contents of readme:

The first part is about communicating with database via terminal. 

The second part is dedicated to this nodejs project that works with postgresql via sequelize.
Code in project can add and show topics and phrases via post (with JSON body) and get queries in Postman.


## PART ONE.

Here is one of possible ways to reproduce our work:

Install [postgresql](https://www.postgresql.org/download/) (and remember password), then add ```bin``` and ```lib``` directories to PATH variables to be able to run psql command in terminal.

```
psql -U postgres
```

and enter password that was set during installation.

Create database and connect to it with

```
create database innorussiandb;
\c innorussiandb;
```


Run code from ['create database'](https://github.com/S1ngle322/InnoRussianRelational/blob/master/create%20database) file to create tables and constraints.
Schema is ```public``` by default and I think it's okay here.

To populate tables with data, run code from ['initial data'](https://github.com/S1ngle322/InnoRussianRelational/blob/master/initial%20data).


