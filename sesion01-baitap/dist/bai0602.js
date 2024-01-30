"use strict";
function filterUsersByGenderAndAge(users) {
    return users.reduce((filteredUsers, user) => {
        if (user.gender === 'male' && user.age < 40) {
            filteredUsers.push(user);
        }
        return filteredUsers;
    }, []);
}
const filteredUsers = filterUsersByGenderAndAge(usersss);
console.log(filteredUsers);
