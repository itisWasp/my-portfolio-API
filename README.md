
# Nodejs Expressjs MongoDB My-portfolio-API

[![Author](http://img.shields.io/badge/author-@Israel-blue.svg)](https://www.linkedin.com/in/mugisha-israel-98a72721a/) [![GitHub license](https://img.shields.io/github/license/maitraysuthar/rest-api-nodejs-mongodb.svg)](https://github.com/maitraysuthar/rest-api-nodejs-mongodb/blob/master/LICENSE) ![GitHub repo size](https://img.shields.io/github/repo-size/maitraysuthar/rest-api-nodejs-mongodb) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/b3eb80984adc4671988ffb22d6ad83df)](https://www.codacy.com/manual/maitraysuthar/rest-api-nodejs-mongodb?utm_source=github.com&utm_medium=referral&utm_content=maitraysuthar/rest-api-nodejs-mongodb&utm_campaign=Badge_Coverage) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b3eb80984adc4671988ffb22d6ad83df)](https://www.codacy.com/manual/maitraysuthar/rest-api-nodejs-mongodb?utm_source=github.com&utm_medium=referral&utm_content=maitraysuthar/rest-api-nodejs-mongodb&utm_campaign=Badge_Grade) ![Travis (.com)](https://img.shields.io/travis/com/maitraysuthar/rest-api-nodejs-mongodb)

A REST API Developed with Node.js, Express, and MongoDB for my portofolio website.

## Getting started

This API Is written in JavaScript ES6. which is Very useful in building  RESTful web APIs for your front-end platforms like Android, iOS or JavaScript frameworks (Angular, Reactjs, etc).

This project will run on **NodeJs** using **MongoDB** as database with **Mongoose** as the **ORM**. I am using **JWT** for handling authentications and **JOI** for Validating inputs from the user before they are sent to the server and **Bcrypt** for hashing passwords stored in the database. 
This Project is open for suggestions, Bug reports and pull requests.


## Features

- Basic Authentication (Register/Login with hashed password)
- Email helper ready just import and use.
- JWT Tokens, make requests with a token after login with `auth-token` header with value `yourToken` where `yourToken` will be returned in Login response as a header value of `auth-token`.
- `Role Based Authorization` on **Login**.
- **Blog** with **CRUD** operations.
- **Comment and Like** with in **Blog** operations.
- Validations added with `JOI`.
- Included API collection for Postman.
- Test cases with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
- configured `.babel` to make the code compatible with `ES6`.

## Software Requirements

- Node.js **8+**
- MongoDB **3.6+** (Recommended **4+**)

## How to install

### Using Git (recommended)

1.  Clone the project from github.

```bash
git clone https://github.com/itisWasp/my-portfolio-API.git
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments


1.  Create a new file  `.env` at the root of your project and configure your environment variables accordingly.
   
2.  The file `.env` is already ignored in `.gitignore`, so you never commit your credentials.

## Project structure

```sh
├── src    
    ├── app.js
    ├── index.js
    ├── controllers
    │   ├── Controller.js
    │   └── Controller.js
    ├── models
    │   ├── model.js
    │   └── model.js
    ├── routes
    │   ├── route.js
    │   ├── route.js
    │   └── route.js
    ├── middlewares
    │   ├── middleware.js
    │   ├── middleware.js
    │   ├── middleware.js
    ├── helpers
    │   ├── helpers.js
    │   ├── helpers.js
    │   ├── helpers.js
    │   └── helpers.js
├── test
    │   ├── testConfig.js
    │   ├── testConfig.js
    │   └── testConfig.js
├── package.json
├── package-lock.json            
```

## How to run

### Running API server locally

```bash
npm start
```

You will know server is running by checking the output of the command `npm start`

```bash
Successfully compiled 20 files with Babel (1232ms).
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node dist/index.js`
Server Started on Port 5000
Connected to Db
```

**Note:** `we are using nodemon to restart our server in case of any changes` in the project.

### Creating new models

If you need to add more models to the project just create a new file in `/models/` and use them in the controllers.

### Creating new routes

If you need to add more routes to the project just create a new file in `/routes/`.

### Creating new controllers

If you need to add more controllers to the project just create a new file in `/controllers/` and use them in the routes.

## Tests

### Running Test Cases

```bash
npm test
```
**Note:** `I am using Mocha and Chai` to test the endpoints using **BDD** Unit Testing Approach.

You can configure mocha at `package.json` file inside `scripts` property. You can also change timeout for each assertion with `--timeout` parameter of `mocha` command.

### Creating new tests

If you need to add more test cases to the project just create a new file in `/test/` and run the command.


## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.