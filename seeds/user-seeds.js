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
        github: "jester",
        email: "little_sapphire@fancypants.net",
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
        twitter: "@yasha",
        github: "yasha",
        email: "yasha@",
        password: "WildFlowers"
    },
    {
        username: "blionett",
        twitter: "@swoleregard",
        github: "scribbles",
        email: "expositor_beau@cobaltsoul.gov",
        password: "Z$g@v4krk+ynQJVW"
    },
    {
        username: "vbrenatto",
        twitter: "@nottthebrave",
        github: "tinkerer",
        email: "v.brenatto@brenattoElixirs.com",
        password: "JL6!L4Vq$U@dk8M"
    },
    {
        username: "fjord",
        twitter: "@captaintusktooth",
        github: "fjord",
        email: "fjord@openseas.com",
        password: "7c;(FX?p"
    }
]

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;