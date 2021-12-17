const { User } = require('../models');

const usersData = [
    {
        username: "cwidowgast",
        twitter: "@frumpkin",
        github: "cwidogast",
        email: "caleb.widogast@soltryce.edu",
        password: "7+un2TkJ=CK^aRn_RyJ-yErq-aWmP4mas96C"
    },
    {
        username: "jlavorre",
        twitter: "@hellobees",
        github: "",
        email: "little_sapphire@",
        password: "cinnamonRoles"
    },
    {
        username: "cclay",
        twitter: "@deadpeopletea",
        github: "fantastic",
        email: "kingsleaf@thebloominggrove.com",
        password: "th3Wildmother"
    },
    {
        username: "ynydoorin",
        twitter: "",
        github: "",
        email: "",
        password: ""
    },
    {
        username: "blionett",
        twitter: "",
        github: "",
        email: "",
        password: ""
    },
    {
        username: "vbrenatto",
        twitter: "",
        github: "",
        email: "",
        password: ""
    },
    {
        username: "fjord",
        twitter: "",
        github: "",
        email: "",
        password: ""
    }
]

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;