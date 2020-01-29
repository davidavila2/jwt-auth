# JSON Auth Boiler plate

This is a mock database built with json-server using authentication via jwt.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/VicAv99/json-auth-boilerplate)

## Prerequisites

- [NPM](https://www.npmjs.com/get-npm) latest
- [node](https://nodejs.org/en/) latest
- Recommend: [Postman](https://www.getpostman.com/)

## How to use

This starter automatically generates "items" with an incrementing id (starting from 1), A name, and a description with random words from [faker](https://www.npmjs.com/package/faker).

```json
[
  {
    "id": 1,
    "name": "item 1",
    "description": "Mongolia system"
  }
]
```

If you want to add to the `db.json` and make more endpoints, you may do so by adding another for loop to generate this data.

- Create a variable with what your endpoint will look like (ex. `const items = { items: [] }`);
- Create your for loop to push to the new array. We are currently making a random amount of 1 - 100. You can change that by updating the function in `randomAmount` variable or just hard coding a number in your for loop where `randomAmount` is.
- Inside of the for loop you may then push your desired object with generated data using faker.

## Users

I have included three mock users in `./users.json`. Of course, if you do not like those users or need to change them you can do so in there. You can think of this file as a `Users` table in a database.

If you are using the Heroku button above, you may notice that you may include an optional environment variable named `BASE_USER`, You may add json in the format below to include a user of you choice. Make sure that you do not use an id from 1-3 since they are already taken from the users in `users.json`.

```json
{
  "id": 1,
  "name": "victor avila",
  "username": "slickvic",
  "email": "victor@avila.com",
  "password": "secret"
}
```
