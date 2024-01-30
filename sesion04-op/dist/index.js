"use strict";
/* /* /* cách khơi tạo đối tượng */
/* class Person {
    //phạm vi truy cập các thuộc tính

    private userName: string;
    age: number;
    userId: number
    email: string

    constructor(name: string, age: number, id: number, email: string) {
        this.userName = name;
        this.age = age
        this.userId = id
        this.email = email
    }
    //cách khởi tạo phương thức
    getName() {
        return this.userName
    }
    setName(name: string) {
        return this.userName = name
    }
    set setUserName(name: string) {
        this.userName = name
    }
    get getUserName() {
        return this.userName
    }

}
let student1 = new Person("hoa", 25, 111, "hoa@gmail.com")
let student2 = new Person("hoa1", 22, 1112, "hoa1@gmail.com")

student2.setUserName = "mai"

console.log("11111111111", student2.getUserName);

console.log(student1);
console.log(student1.getName());

class Employee extends Person {

    job: string
    salary: number
    constructor(job: string, salary: number, userName: string, age: number, userId: number, email: string) {
        super(userName, age, userId, email);
        this.job = job,
            this.salary = salary

    }

}
let Employee1 = new Employee("dev", 5000, "maaaa", 30, 1, "aa@gmail.com")
console.log(Employee1);

/*
*/ //ví dụ 1
/* class Circle {
    private radius: number;
    private color: string;
    constructor(radius: number = 1, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }

    get getradius(): number {
        return this.radius;
    }

    set setradius(radius: number) {
        if (radius > 0) {
            this.radius = radius;
        } else {
            console.log("Bán kính phải là một số dương.");
        }
    }
    get getcolor(): string {
        return this.color;
    }

    set setcolor(color: string) {
        this.color = color;
    }
    //chu vi
    chuvi(): number {
        return 2 * 3.14 * this.radius;
    }
    input(): void {
        try {
            const radius: number = Number(prompt("Nhập bán kính:") || "1");
            const color: string = prompt("Nhập màu sắc:") || "red";
            this.setradius = radius;
            this.setcolor = color;
        } catch (error) {
            console.log("Vui lòng nhập số cho bán kính.");
        }
    }
    read(): void {
        console.log(`Bán kính: ${this.radius}`);
        console.log(`Màu sắc: ${this.color}`);
        console.log(`Chu vi: ${this.chuvi()}`);
    }
}
const myCircle: Circle = new Circle();
myCircle.input();
myCircle.read() */ ;
//ví dụ 2/* 
class QuadraticEquation {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.c = 0;
    }
    get getA() {
        return this.a;
    }
    set setA(a) {
        this.a = a;
    }
    get getB() {
        return this.b;
    }
    set setB(b) {
        this.b = b;
    }
    get getC() {
        return this.c;
    }
    set setC(c) {
        this.c = c;
    }
    delta(a, b, c) {
        return b * b - (4 * a * c);
    }
    getRoot1() {
        return (-this.b + (this.delta(this.a, this.b, this.c)) ** (1 / 2)) / (2 * this.a);
    }
    getRoot2() {
        return (-this.b - (this.delta(this.a, this.b, this.c)) ** (1 / 2)) / (2 * this.a);
    }
    input() {
        const a = Number(prompt("mời nhập a"));
        const b = Number(prompt("mời nhập b"));
        const c = Number(prompt("mời nhập c"));
        this.setA = a;
        this.setB = b;
        this.setC = c;
    }
    readAbc() {
        if (this.delta(this.a, this.b, this.c) > 0) {
            console.log("phương trình có 2 nghiệm: nghiệm 1 là:", this.getRoot1(), "nghiệm 2 là:", this.getRoot2());
        }
        else if (this.delta(this.a, this.b, this.c) == 0) {
            console.log("phương trình có 1 nghiệm là", this.getRoot1());
        }
        else {
            console.log("The equation has no roots”");
        }
    }
}
let equal = new QuadraticEquation();
equal.input();
equal.getRoot1();
equal.getRoot2();
equal.readAbc();
