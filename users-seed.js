const baseUser = JSON.parse(process.env.BASE_USER) || {};
const users = {
  users : [
    {
      "id": 1,
      "name": "victor avila",
      "username": "slickvic",
      "email": "victor@avila.com",
      "password": "secret"
    },
    {
      "id": 2,
      "name": "Jason Wolf",
      "username": "jason_wolf",
      "email": "jason@wolf.com",
      "password": "secret"
    },
    {
      "id": 3,
      "name": "Johnathan Mitchell",
      "username": "johnathan_mitchell",
      "email": "johnathan@mitchell.com",
      "password": "secret"
    }
  ]
};

if (!!baseUser.id) {
  users.users.unshift(baseUser);
} else {
  users.users;
}

console.log(JSON.stringify(users));
