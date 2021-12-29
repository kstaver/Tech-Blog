const { User } = require('../models');

const usersData = [
    {
        username: "Xendromus",
        twitter: "@xendromus",
        github: "xendromus",
        email: "xendromus@gmail.com",
        password: "eGwC2HH?uGM$ZGtv"
    },
    {
        username: "me",
        twitter: "@me",
        github: "me",
        email: "me",
        password: "GhKRNp2E2^E^&RGY"
    }
]

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;