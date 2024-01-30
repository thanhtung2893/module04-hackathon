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
function decorator(className: any, mrethodName: string, functionDecor: any) {
    functionDecor.value = function (a: number, b: number) {
        return a * b
    }
}
class Hao {
    //thuộc tính
    //phương thức 
    @decorator
    add(a: number, b: number) {
        return a + b;
    }
}
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

function logMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
    descriptor.value = function () {
      const time = new Date().toLocaleTimeString();
      console.log("ten phuong thuc", methodName); 
      console.log("thoi gian goi",time);         
    };
    return descriptor;
  }
  
  class Person {
    name: string;
    age: number;
    address: string;
  
    @logMethod
    setName(name: string) {
      this.name = name;
    }
  
    @logMethod
    setAge(age: number) {
      this.age = age;
    }
  
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  }
  
  
  const person1 = new Person('mai', 25, 'ha noi');
  
  person1.setName('hoa');
  person1.setAge(30);
  

  //bai2
  function  validateEmail(target: any, methodName: string, descriptor: PropertyDescriptor) {

    descriptor.value = function (email: string,password: string) {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("email hop le");
        
      }else{
        console.log("email khong hop le");
        
      }
    };
  
    return descriptor;
  }
class users{
    email:string
    password:string
    constructor(email:string,password:string) {
        this.email=email;
        this.password=password
    }
    @validateEmail
    login(email: string, password: string) {
      this.email = email;
      this.password = password;
    }

  }
  //ví dụ

    const okLogin=new users('mai@gmail.com','123@gmail.com');
    const failLogin=new users('jbfuehwu','123@gmail.com');
    okLogin.login(okLogin.email,okLogin.password);
    okLogin.login(failLogin.email,failLogin.password);


  
  