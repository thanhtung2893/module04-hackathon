type User= {
    first_name: string;
    last_name: string;
    
}
const users: User[] = [
    { first_name: "thanh", last_name: "mai" },
    { first_name: "thu", last_name: "thao" },
    
];

const fixUsers: { first_name: string; last_name: string }[] = [];

users.forEach((user) => {
    const { first_name, last_name } = user;
    fixUsers.push({ first_name, last_name });
});


console.log(fixUsers);


