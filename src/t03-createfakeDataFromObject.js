const faker = require("faker")
const dataLength = 10
const productArr = []

for (var index = 0; index < dataLength; index++) {
  productArr.push({
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(),
    description: faker.lorem.paragraph(),
  })
}

console.log(productArr.length)
console.log(JSON.stringify(productArr))
