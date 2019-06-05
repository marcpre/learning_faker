const faker = require("faker")
const dataLength = 10
const obj = []

for (var index = 0; index < dataLength; index++) {
    obj[index] = {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        deletedAt: faker.date.recent(),
        deleted: faker.random.boolean(),
      }
}

console.log(obj.length)
console.log(obj[1].title)