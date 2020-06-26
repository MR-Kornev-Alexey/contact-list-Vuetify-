module.exports = function () {
    const faker = require('faker');
    const _ = require('lodash');
    return {
        trip: _.times(200, function (n) {
            return {
                id: n + 1,
                data: faker.date.recent(),
                city: faker.address.city(),
                number: faker.random.number(99),
                distance: _.sample(["1200", "4500", "3490", "3453","1300", "4560", "2790", "2440", "8200", "1520", "7490", "4493","4570", "6666", "3710", "1840"])
            }

        })
    }

}
