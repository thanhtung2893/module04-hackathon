"use strict";
let number1 = 5;
console.log("qqqqqqqq", number1);
let name1 = "hoa";
let isUndefined = undefined;
let isNull;
let boolean = true;
let array = ["hoa", "hà", 7];
/* mảng sẽ có hai cách khai báo */
let student1 = ["mai", "lan"];
student1.push(100);
let student2 = ["mai", "hoa"];
/* khai báo cho function :
khi yêu cầu kiểu dữ liệu trả về phải có return về kiểu dữ liệu đó
kiểu dữ liệu ENUM

*/
const helo = () => {
    return "jh";
};
function addNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
}
console.log(addNumbers(5, 6));
console.log(addNumbers("mai", 5));
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["customer"] = 2] = "customer";
})(Role || (Role = {})); //lấy chỉ số theo index
let person = {
    name: "mai",
    age: 33,
    role: 0
};
let user1 = {
    name: "hoađèefef",
    age: 22
};
let users = [];
users.push(user1);
console.log(users);
//kiểu dữ liệu assertion
//dự đoán kiểu dữ liệu trả về 
