const faker = require("faker")

//User Profile
console.log("Name: " + faker.name.findName())
console.log("Email: " + faker.internet.email())
console.log("Date: " + faker.date.future())
console.log("Image: " + faker.image.fashion())



