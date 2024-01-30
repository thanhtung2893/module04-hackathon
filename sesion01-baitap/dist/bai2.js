"use strict";
//bài 0601
function getFullNames(users) {
    return users.reduce((a, b) => {
        const fullName = `${b.first_name} ${b.last_name}`;
        a.push(fullName);
        return a;
    }, []);
}
//bài 0602
function filterByMan(users) {
    return users.reduce((a, b) => {
        if (b.gender === 'nam' && b.age < 40) {
            a.push(b);
        }
        return a;
    }, []);
}
//bài 0602
function snakeToCamel(users) {
    return users.reduce((a, user) => {
        const camelCaseUser = Object.entries(user).reduce((camelCaseObj, [key, value]) => {
            const camelCaseKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
            const tempObj = camelCaseObj;
            tempObj[camelCaseKey] = value;
            return tempObj;
        }, {});
        a.push(camelCaseUser);
        return a;
    }, []);
}
// Ví dụ 
const userss = [
    { first_name: 'thanh', last_name: 'tungggAAAA', age: 18, gender: "nam" },
    { first_name: 'thúy', last_name: 'hạnh', age: 55, gender: "nam" },
    { first_name: 'hoàng', last_name: 'quân', age: 18, gender: "nam" },
    { first_name: 'minh', last_name: 'thaoaaaa', age: 20, gender: "nữ" },
    { first_name: 'mai', last_name: 'hoa', age: 20, gender: "nữ" },
];
const allFullNames = getFullNames(userss);
console.log(allFullNames);
console.log(filterByMan(userss));
console.log(snakeToCamel(userss));
