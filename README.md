a# assignment-fullstack

This is a simple assignment to test your skills in Full Stack Web Development. On successful completion of this assignment, you will be invited for a small interview for the position of Web Development Team Member at GDSC GHRIET Nagpur.

- Tech: React, Express.js, TypeScript.
- Concepts: REST API, CRUD operations, JSON, Git.

## Deadline: **13 February 2024, 11:59 PM IST**

## What to do?
You are required to create a simple web application that can be used to manage a list of [users](/Backend/src/users.ts).
It should be able to perform CRUD operations on the list of users.

The assignment is divided into two parts:
1. [Backend](/Backend)
2. [Frontend](/Frontend)

It is recommended to complete the backend part first and then move on to the frontend part.

Template for the backend is provided in [index.ts](/Backend/src/index.ts) and [users.ts](/Backend/src/users.ts) is already provided with some dummy user data.

Tests are provided in [server.test.ts](/Backend/__tests__/server.test.ts) and you have to build your backend in such a way that **all the tests should pass.**

Tests can be run using the following command:
```bash
npm run test
```
Also to start the backend server, you can use the following command:
```bash
npm run start
```

Make sure you are in the [Backend](/Backend) directory and have installed all the dependencies using `npm install`.

For the frontend part, you have to use React framework (because our website is built using React) and choose any design of your choice. Just make sure it is responsive, i.e., it should look good on all screen sizes.

It should list all the users and provide a way to add, edit and delete users.

To run the frontend, you can use the following command:
```bash
npm run dev
```
Make sure you are in the [Frontend](/Frontend) directory and have installed all the dependencies using `npm install`.

**Note: Use of any sort of automated code generators (AI) is not allowed. You will be asked to explain your code in detail during the interview.**

## How to submit?
You have to fork this repository and push changes to your forked repository.

**DO NOT create a pull request to this repository**. Unless you want to reveal your assignment code to others.

Please email us the link to your forked repository at [gdsc@ghrietn.raisoni.net](mailto:gdsc@ghrietn.raisoni.net)

Before you submit, make sure you have completed all the tasks mentioned above and all the tests are passing.
