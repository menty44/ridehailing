## Description
* Technologies used for the project are nodejs(NestJS) and Postgres
* Install postgres in your machine
* Create a database user, database password and eventually a database name of your choice 
* Clone the project your pc
* Create a `.env` file within the root of the project
* Paste the below config in the `.env`

<p></p>

```
        POSTGRES_HOST=localhost
        POSTGRES_PORT=5432
        POSTGRES_USER=yourDBUser
        POSTGRES_PASSWORD=yourDBPassword
        POSTGRES_DB=yourDB
```

* Within the root of the project you will find and sql file, import it in your database so that you may have temp data for you to tinker with
* Install packages using this command `npm i`
* Start the project using this command `npm run start:dev`
* Access the app using the port `httos://localhost:3000`

## Description
How to login to the system;
* Below are the demo users you can use to login and get the jwt token for auth in the other apis

```agsl
[
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ]
```
User Login  Method is POST
* The Login endpoint is `http://localhost:3000/auth/login`
* The Login payload is
```{
  "username": "john",
  "password": "changeme"
  }
```

Add driver endpoint Method is POST
* The Login endpoint is `http://localhost:3000/drivers`
* The payload is
```
{
    "name": "Fredrick Oluoch",
    "phonenumber": "+2547222333444"
}
```

or

```agsl
curl --location --request GET 'http://localhost:3000/passengers' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTY3NDAyMjQyMCwiZXhwIjoxNjc0MDIzMDIwfQ.YFXEKvrngxIk4GSPOU_--gQW7fTbsmsrLvbgwoS9ihc' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Fredrick Oluoch",
    "phonenumber": "+254720106420"
}'
```

Suspend driver endpoint Method is POST
* The Login endpoint is `http://localhost:3000/drivers/3/suspend`

Delete suspended driver endpoint Method is DELETE
* The Login endpoint is `http://localhost:3000/drivers/3/suspend`


Add Passenger endpoint Method is POST
* The Login endpoint is `http://localhost:3000/passengers`
* The payload is
```
{
    "name": "Fredrick Oluoch",
    "phonenumber": "+254733999888"
}
```

Create Ride endpoint Method is POST
* The Login endpoint is `http://localhost:3000/rides/:passengerid/:driverid`
* The Login payload is
```
{
    "pickup": {
        "latitude": "12.92",
        "longitude": "98.9393"
    },
    "destination": {
        "latitude": "12.92",
        "longitude": "98.9393"
    }
}
```

Stop Ride endpoint Method is GET
* The Login endpoint is `http://localhost:3000/rides/ongoing`



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
