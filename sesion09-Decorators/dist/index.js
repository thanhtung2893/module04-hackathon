"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
console.log("Hello World");
/* Decorators: trang trí lại(từ bản gốc mình có thể tùy chỉnh ra bản khác theo ý mình)
Decorators:sẽ gồm có :
+ class Decorators (tên class)
+ method Decorators (các phương thức)
+ property Decorators (thuộc tính)
+ parameter Decorators (các tham số)
+ accessors Decorators (các truy cập get và set)
 
***sự khác nhau giữa hàm và method
+ hàm khai báo thực hiện các chức năng khi gọi theo tên hàm
+ method khai báo thực hiện các chức năng khi gọi theo tên phương thức
 phải trỏ đến đối tượng

*/
//decorator
//khai báo hàm khác sec decor lại các hàm trong class Hao
function decorator(className, mrethodName, functionDecor) {
    functionDecor.value = function (a, b) {
        return a * b;
    };
}
class Hao {
    //thuộc tính
    //phương thức 
    add(a, b) {
        return a + b;
    }
}
__decorate([
    decorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Hao.prototype, "add", null);
console.log(new Hao().add(9, 2));
// bai3/* 
/* function validateProduct(target: any, methodName: string, descriptor: PropertyDescriptor) {

  descriptor.value = function (name: string, price: number, description: string, inStock: number) {
    if (!name || typeof price !== 'number' || price <= 0 || !description || typeof inStock !== 'number' || inStock < 0) {
      throw new Error('Invalid product information.');
    }
  };

  return descriptor;
} */
/* class Product {
  name: string;
  price: number;
  description: string;
  inStock: number;
constructor() {

    this.name='';
    this.price=0;
    this.description='';
    this.inStock=0
}
  @validateProduct
  createProduct(name: string, price: number, description: string, stock: number) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.inStock = stock;
  }
} */
// ví dụ
/* try {
  const okProduct = new Product();
  okProduct.createProduct('Laptop', 999.99, 'giá rẻ', 10);
  console.log('ok Product:', okProduct);

  const failProduct = new Product();
  failProduct.createProduct('', -100, '', -5);
  console.log('fail Product:', failProduct);
} catch (error) {
  console.error(error);
} */
/* bài 1 */
function logMethod(target, methodName, descriptor) {
    descriptor.value = function () {
        const time = new Date().toLocaleTimeString();
        console.log("ten phuong thuc", methodName);
        console.log("thoi gian goi", time);
    };
    return descriptor;
}
class Person {
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Person.prototype, "setName", null);
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Person.prototype, "setAge", null);
const person1 = new Person('mai', 25, 'ha noi');
person1.setName('hoa');
person1.setAge(30);
//bai2
function validateEmail(target, methodName, descriptor) {
    descriptor.value = function (email, password) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            console.log("email hop le");
        }
        else {
            console.log("email khong hop le");
        }
    };
    return descriptor;
}
class users {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    login(email, password) {
        this.email = email;
        this.password = password;
    }
}
__decorate([
    validateEmail,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], users.prototype, "login", null);
//ví dụ
const okLogin = new users('mai@gmail.com', '123@gmail.com');
const failLogin = new users('jbfuehwu', '123@gmail.com');
okLogin.login(okLogin.email, okLogin.password);
okLogin.login(failLogin.email, failLogin.password);
