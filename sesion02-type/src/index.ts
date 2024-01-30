let number1:number=5;
console.log("qqqqqqqq",number1);
let name1:string="hoa"
let isUndefined:undefined=undefined
let isNull:null
let boolean:boolean=true
let array: (string|number)[]=["hoa","hà",7]
/* mảng sẽ có hai cách khai báo */

let student1:(string|number)[]=["mai","lan"];
student1.push(100)
let student2:Array<string>=["mai","hoa"]

/* khai báo cho function :
khi yêu cầu kiểu dữ liệu trả về phải có return về kiểu dữ liệu đó
kiểu dữ liệu ENUM

*/
const helo=():string=>{
    return "jh"
}
function addNumbers(a: number|string, b: number|string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      return String(a)+String(b);
    }
  }
  console.log(addNumbers(5,6));
  console.log(addNumbers("mai",5));

  enum Role{admin,user,customer}//lấy chỉ số theo index

  let person:{
    name:string,
    age:number,
    role:Role
  }={
    name:"mai",
    age:33,
    role:0
  }
  //cách khai báo kiểu alias
  //dùng type||interface
   type MyUser={name:string,age:number}

   let user1:MyUser={
    name:"hoađèefef",
    age:22
   }
   let users:MyUser[]=[]
   users.push(user1)
   console.log(users)

   //kiểu dữ liệu assertion
   //dự đoán kiểu dữ liệu trả về 
  
  
 
  