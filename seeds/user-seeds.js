const { User } = require("../models");

const userData = [
    {
        username: 'Joe Davis',
        email: 'Joe_Davis@gmail.com',
        password: 'SecretPassword'
    },
    {
        username: 'Karen Graves',
        email: 'Karen_Graves@gmail.com',
        password: 'SecretPassword'
    },
    {
        username: 'Frank Li',
        email: 'Frank_li123@gmail.com',
        password: 'SecretPassword'
    },
    {
        username: 'Samantha Peterson',
        email: 'Samantha_Pete@gmail.com',
        password: 'SecretPassword'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;