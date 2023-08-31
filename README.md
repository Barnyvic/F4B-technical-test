# Bank Account Management API
## Description: 
This project implements a basic RESTful API for managing bank accounts using Node.js and Express. It provides endpoints to create bank accounts, resolve bank accounts by account number, and fetch all bank accounts.

## Table of Contents
- [Bank Account Management API](#bank-account-management-api)
  - [Description:](#description)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
  
## Features
- Create a new bank account with account holder details.
- Resolve a bank account by providing its account number.
- Fetch a list of all bank accounts.
  
## Getting Started
    Prerequisites
 * Node.js (Install from https://nodejs.org/)
 * npm (Comes bundled with Node.js)
  
  Installation
  1. Clone the repo to your local machine using git  
```
git clone https://github.com/Barnyvic/F4B-technical-test.git
```
2. Navigate into project directory and install dependencies
 ```
   cd F4B-technical-test
```
3. Install node modules
  ```
npm i or npm install
   ```
## Usage
```
npm run start to start server using node
npm run start:dev to start server using nodemon
```
* The server will start on port 3000. You can access the API at http://localhost:4000.

* Use a tool like Postman or curl to make API requests to the available endpoints.
  
## Endpoints
 Create a Bank Account
  POST /create-account
  * Request Body:
  ```
  {
    "accountHolderName": "John Doe",
    "dob": "1990-01-01",
    "accountType": "Savings",
    "initialBalance": 1000
}
  ```
* Response:
   ```
   {
    "accountNumber": "1234567890",
    "accountHolderName": "John Doe",
    "dob": "1990-01-01",
    "accountType": "Savings",
    "balance": 1000
    }
   ```
Resolve a Bank Account 
Endpoint: `GET /account/:accountNumber`
* Response
  ```
  {
    "accountNumber": "1234567890",
    "accountHolderName": "John Doe",
    "dob": "1990-01-01",
    "accountType": "Savings",
    "balance": 1000
}
  ```
Fetch All Bank Accounts 
Endpoint: GET /accounts.