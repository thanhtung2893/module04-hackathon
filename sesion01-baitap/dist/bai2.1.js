"use strict";
const users = [
    { first_name: "thanh", last_name: "mai" },
    { first_name: "thu", last_name: "thao" },
];
const fixUsers = [];
users.forEach((user) => {
    const { first_name, last_name } = user;
    fixUsers.push({ first_name, last_name });
});
console.log(fixUsers);
