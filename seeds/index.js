const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

// This function empties the table before seeding
const seedAll = async () =>{
    // Connect to the database and empty existing tables
    await sequelize.sync({ force: true });
    console.log('\n*------* Synced to Database *------*\n');

    // Seed the users table
    await seedUsers();
    console.log('\n*------* Users Seeded *------*\n');

    // Seed the posts table
    await seedPosts();
    console.log('\n*------* Posts Seeded *------*\n');

    // Seed the comments table
    await seedComments();
    console.log('\n*------* Comments Seeded *------*\n');

    // Forces the process to end
    process.exit(0);
};

seedAll();