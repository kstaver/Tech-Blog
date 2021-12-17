const { User } = require('../models');

const usersData = [
    {
        username: "",
        twitter: "",
        github: "",
        email: "",
        password: ""
    },
    {
        username: "",
        twitter: "",
        github: "",
        email: "",
        password: ""
    },
    {
        username: "",
        twitter: "",
        github: "",
        email: "",
        password: ""
    },
    {
        username: "",
        twitter: "",
        github: "",
        email: "",
        password: ""
    },
    {
        username: "",
        twitter: "",
        github: "",
        email: "",
        password: ""
    },
    {
        username: "",
        twitter: "",
        github: "",
        email: "",
        password: ""
    }
]

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;