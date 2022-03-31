# Node Challenge

Take home test for Node.js developers.

## The challenge

This challenge has been designed to measure your knowledge of Node.js, Express, Typescript and various technologies, like monorepos, databases and testing. For your exercise, you will be enhancing this API which serves as the backend for the Pleo app. Whenever a user of the app navigates to the expenses view, it calls this API to collect the list of expenses for that user.

Your objective is to write this new route to fetch the list of expenses for a given user. Right now that domain is empty, so you'll have to build everything from scratch- but you can look over at the user domain for inspiration. Please make sure that the endpoint scales adequately and supports paging, sorting and filtering. Additionally, we would also like you to write some tests for your route.

Finally, as a bonus objective, try to improve any aspect of this API. It could be to add more TS types, better security, tests, add features, graphql support, etc. 

## Instructions

Fork this repo with your solution. Ideally, we'd like to see your progression through commits, and don't forget to update the README.md to explain your thought process.

Please let us know how long the challenge takes you. We're not looking for how speedy or lengthy you are. It's just really to give us a clearer idea of what you've produced in the time you decided to take. Feel free to go as big or as small as you want.

## Install

Make sure that you have a modern version of `yarn` that supports workspaces (`>= 1.0`), then run:

```bash
yarn
```

You will also need to [install Postgres](https://www.postgresqltutorial.com/install-postgresql-macos/), create a `challenge` database and load the sql file `dump.sql`:

```bash
psql challenge < dump.sql
```

## Start

To enable logs, use the standard `NODE_DEBUG` flag with the value `DEBUG`

```bash
NODE_DEBUG=DEBUG yarn start
```

## Test

Make sure that you have a modern version of `yarn` that supports workspaces, then run:

```bash
yarn test
```

The command above will run the following test suites sequentially:

| Test suite | Run command | Description |
-------------|-------------|-------------|
| Unit | `yarn test:unit` | Simple unit tests. |
| Mid-level | `yarn test:mid-level` | Small integration tests that integration of small components together.  |
| Acceptances | `yarn test:acceptance` | Large integration tests, system tests, end-to-end tests. |


Happy hacking 😁!

**Resolution**

What happened inside my head when first saw the challenge : 

> Lets do what was asked from us and make the code work.

Second idea that pop up : 

> Once the code starts to work. We will refactor and improve to make it scalable and maintainable.

Seeing that we will have some mappings between DB and code i thought using an ORM that will help us write the sql queries using object-oriented paradigm. 
and [TypeORM](https://github.com/typeorm/typeorm) is definitely the most mature ORM available in the node.js that supports typescript and Postgres.

***Commit 1: feat(expenses-display): setting up the environment*** 
 Well, basically like the commit message suggests at first time, It was mandatory the set up the environment.
 
***Commit 2:feat(expenses-display): adding expenses API and updating users to use TypeORM*** 
Configured the database inside expenses api, created the expenses entity and set up the adequate routing for it. 
Started migrating the existing code in user to use typeorm.

***Commit 3: Refactor(expenses-display): externalizing Connection to database***
Since both user and expense api where both calling the DB and to keep up with the best practices and code like DRY. I decided to externalize the db connection file to the utils package.

***Commit 4:Refactor(expenses-details): adjusting user details to be more adequate with the initial code*** 
Adding the formatter  back after refactoring the user api to use typeorm

AND FINALLY 

***Commit 5 :feat(expenses):adding acceptance test***
adding acceptance test to the expenses api

THATS IT FOLKS! 
