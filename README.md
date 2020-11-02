# InnoRussianRelational

this part of assignment was modified after the deadline...

## Contents of readme:

The first part is about сreation of database and execution of CRUD operations relevant for user stories via terminal. 

The second part is dedicated to this nodejs project that works with postgresql via sequelize.
Code in project can add and show topics and phrases via POST (with JSON body) and GET queries in Postman.


If anything goes wrong, [contact me](https://t.me/feuer_fox), if you wish.


## PART ONE.

Here is one of possible ways to reproduce our work:

Install [postgresql](https://www.postgresql.org/download/) (and remember password), then add ```bin``` and ```lib``` directories to PATH variables to be able to run ```psql``` command in terminal.

Run
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


##### EXAMPLES OF CRUD OPERATIONS

*"As a user, I want to see content organized by themes, so that I can study phrases specific for situations or places."*
* get all topics with ```SELECT name FROM topics;```
 
* get words of specific topic with ```SELECT transcription FROM phrases WHERE topic_id=1;```

* or list all phrases of all topics with ```SELECT p.transcription, t.name FROM phrases p RIGHT JOIN topics t ON p.topic_id=t.id;```


*"As I user, I want to have a phrasebook linked to my account so that I can come back to some words anytime."*
* get all phrases from the phrasebook of particular user with
   ```
  SELECT transcription 
  FROM phrases 
  WHERE 
    id IN ( 
        SELECT phrase_id 
        FROM has_in_phrasebook 
        WHERE user_id = 1 
    );
    ```
 * add a new phrase to the phrasebook of particular user with
 
    ```INSERT INTO has_in_phrasebook (phrase_id, user_id, state) VALUES (5,5, 'inactive');```
 
* edit state of phrase (needed for tracking progress) with

   ```UPDATE has_in_phrasebook SET state='in progress' where phrase_id=5 AND user_id=5;```


 *"As a user, I want to have some elements of social network, so that I can communicate with my friends and it will be much more interesting for me to learn Russian with other people."*
* get list of friends of some user with 
   ```
  SELECT username 
  FROM users 
  WHERE 
    id IN ( 
        SELECT otheruser_id 
        FROM friend_with 
        WHERE user_id = 1 
        UNION
        SELECT user_id 
        FROM friend_with 
        WHERE otheruser_id = 1 
    );
    ```
 
 *"As a user, I would like to view the weekly/monthly report (on the total number of words learned or hours spent), so that I could track my progress."*
 * get all sessions of all users (might be useful for admins) with 
 
    ```SELECT u.username, s.date, s.hours FROM users u LEFT JOIN session s ON u.id = s.user_id;```

* get all sessions of particular user with 
   ```SELECT date, hours FROM session WHERE user_id = 5;```


*This is not directly connected to any of user stories, but it might be useful for user to explore new phrases by clicking on links.*
* get similar phrases to some particular phrase with
   ```
  SELECT transcription 
  FROM phrases 
  WHERE 
    id IN ( 
        SELECT otherphrase_id 
        FROM is_similar_to 
        WHERE phrase_id = 4
        UNION
        SELECT phrase_id 
        FROM is_similar_to 
        WHERE otherphrase_id = 4
    );
    ```
   
 *"As a user, I want to have authorization, so that I can come back to my progress."*
 * registration is implied here, so register new user with
 
    ```
    INSERT INTO users (username, email, password, status) VALUES 
    ('harry123', 'h.potter@gmail.com', 'expelliarmus', 'admin')
   ```

*To demonstrate delete operation in SQL,*
* delete account with
```DELETE FROM users WHERE username='harry123';```
