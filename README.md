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
  - [Contributing](#contributing)
  - [License](#license)
  
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
 ` POST /create-account`
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
    "statusCode": 201,
    "message": "Account created successfully",
    "data": {
        "accountNumber": "6340777668",
        "accountHolderName": "Victor Chuka",
        "dob": "1998-02-05T00:00:00.000Z",
        "accountType": "Current",
        "balance": 10000
    }
  }
      
   ```
Resolve a Bank Account 
Endpoint: `GET /account/:accountNumber`
* Response
 ```
 {
    "statusCode": 200,
    "message": "Account found",
    "data": {
        "accountNumber": "6851825673",
        "accountHolderName": "Barny Victor",
        "dob": "1998-02-05T00:00:00.000Z",
        "accountType": "Savings",
        "balance": 100
    }
}
 
 ```

Fetch All Bank Accounts
Endpoint: `GET /accounts`
* Response
```

{
    "statusCode": 200,
    "message": "Accounts found",
    "data": [
        {
            "accountNumber": "6790874819",
            "accountHolderName": "John Doe",
            "dob": "1990-01-01T00:00:00.000Z",
            "accountType": "Savings",
            "balance": 1000
        },
        {
            "accountNumber": "6851825673",
            "accountHolderName": "Barny Victor",
            "dob": "1998-02-05T00:00:00.000Z",
            "accountType": "Savings",
            "balance": 100
        }
    ]
}

```


## Contributing
 * Barny Victor 
  
## License
 This project is licensed under the MIT License.