const  express = require('express');
const {faker} = require('@faker-js/faker');
const app = express();
const port = 8000;

const createUser = () => ({
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    password: faker.internet.password(),
  } 
    
  );

  const createCompany = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country(),
    },
  });

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
    console.log(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
    console.log(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const responseObject = {
      user: newUser,
      company: newCompany,
    };
    res.json(responseObject);
    console.log(responseObject);
  });



app.listen( port, () => console.log(`Listening on port: ${port}`) );
