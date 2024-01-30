"use strict";
class Employee {
    // Phương thức khởi tạo không tham số
    constructor() { }
    // Phương thức khởi tạo có tham số
    constructor(employeeId, employeeName, age, gender, rate) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.age = age;
        this.gender = gender;
        this.rate = rate;
    }
    // Phương thức nhập thông tin từ người dùng
    inputData() {
        prompt.start();
        prompt.get(['employeeId', 'employeeName', 'age', 'gender', 'rate'], (err, result) => {
            this.employeeId = result.employeeId;
            this.employeeName = result.employeeName;
            this.age = parseInt(result.age, 10);
            this.gender = result.gender;
            this.rate = parseFloat(result.rate);
            prompt.stop();
            this.calSalary();
            this.displayData();
        });
    }
    // Phương thức tính lương
    calSalary() {
        this.salary = this.rate * 1300000;
    }
    // Phương thức hiển thị thông tin nhân viên
    displayData() {
        console.log(`Mã nhân viên: ${this.employeeId}`);
        console.log(`Tên nhân viên: ${this.employeeName}`);
        console.log(`Tuổi: ${this.age}`);
        console.log(`Giới tính: ${this.gender}`);
        console.log(`Hệ số lương: ${this.rate}`);
        console.log(`Lương: ${this.salary}`);
        console.log('------------------------------');
    }
}
// Phương thức main
function main() {
    // Khởi tạo 5 đối tượng nhân viên
    const employees = [];
    for (let i = 0; i < 5; i++) {
        employees.push(new Employee());
        employees[i].inputData();
    }
}
// Gọi phương thức main để chạy chương trình
main();
