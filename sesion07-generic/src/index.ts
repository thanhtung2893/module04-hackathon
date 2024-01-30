console.log("111111111111111");
/* 
generic: chung chung (không cụ thể)
//viết 1 function chấp nhận mọi tham số truyền  vào và trả vè 1 kết quả bất kì

*/
//function sayHello(param:any):any{
 //   return param;
//}
/* viết theo kiểu generic */
function sayHello<T>(param:T):T{
    return param
}
const say1=sayHello("hello")
const say2=sayHello(3333)
const say3=sayHello(true)

console.log("11111",say1);
console.log("22222",say2);
console.log("333333",say3);
 function typeParam<T,U>(name:T,age:U):{}{
    return {name,age}
 }
const typeParam1=typeParam("nam",10)
const typeParam2=typeParam("mai",null)
const typeParam3=typeParam(false,100)


console.log("4444444",typeParam1);
console.log("5555555",typeParam2)
console.log("6666666",typeParam3);
/* 
clone object
shalow clone: clone nông (chưa hết)
1.toán tử spread
2.object.assign
depp clone: clone hết
1.JSON.parse(JSON.stringify(obj))

*/
function merge<T extends object,U extends object>(obj1:T,obj2:U){
    return Object.assign(obj1,obj2)
}
let merge1=merge({name:'hoa'},{age:25,name:"lan"})
console.log(merge1);
/* 
// Định nghĩa một mảng với phương thức customMethod
interface CustomArray extends Array<number> {
    customMethod(): void;
}

// Tạo một mảng mới với kiểu CustomArray
const myCustomArray: CustomArray = [1, 2, 3];

// Gán giá trị cho phương thức customMethod
myCustomArray.customMethod = function() {
    console.log("Custom method");
};

// Sử dụng mảng và gọi phương thức mới
myCustomArray.customMethod(); // In ra "Custom method"

 */

function sayHello2<T extends string>(param: T): T {
    return param
}


const result = sayHello2("mai");
console.log(result);
//ví dụ 1:
/*  cho một class box có thuộc tính value hãy áp dụng kiểu dữ liệu generic 
  để xây dựng class box có kiểu dữ liệu T và thuộc tính value có kiểu dữ liệu T
  .xay dựng một function getValue để lây giá trị của thuộc tính value */

  class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// kiểu dữ liệu là number
const numberBox = new Box<number>(500);
console.log(numberBox.getValue()); // In ra 500

// kiểu dữ liệu là string
const stringBox = new Box<string>("Helo anh em");
console.log(stringBox.getValue()); // In ra "Helo anh em"

//ví dụ 2
/* xây hàm myMap() giống hàm map() sử dụng kiểu generic */

function myMap<T,U>(arr: T[], callback: (item: T) => U):U[] {
    const result: U[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const inputArr: number[] = [1, 2, 3, 4,5,6,7,8,9,10];
const outputArr: number[] = myMap(inputArr, (item: number) => item * 3);

console.log(outputArr); 


//tạo hàm search() sử dụng kiểu generic hoạt động giống hàm findindex;
function search<T>(arr: T[], findItem: T): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === findItem) {
            return i; 
        }
    }
    return -1; 
}

const Arr1: number[] = [1, 2, 3, 4, 5,7,10];
const target: number = 1;

const index: number = search(Arr1, target);

if (index !== -1) {
    console.log(`Phần tử ${target} có chỉ mục là ${index}`);
} else {
    console.log(`Phần tử ${target} không có trong mảng`);
}


//tạo hàm filter theo generic
function myFilter <T>(arr: T[], callback: (item: T) => boolean): T[] {
    const result: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
//ví dụ XXX
function checkArr(l1: number[], l2: number[]): number[] {
    const l3: number[] = [];
    let du = 0;

    const maxLength = l1.length > l2.length ? l1.length : l2.length;

    for (let i = 0; i < maxLength; i++) {
        const a = i < l1.length ? l1[i] : 0;
        const b = i < l2.length ? l2[i] : 0;

        const sum = a + b + du;

        l3[i] = sum % 10;

        du = sum >= 10 ? 1 : 0;
    }
    if (du > 0) {
        l3.push(du);
    }

    return l3;
}

// ví dụ
console.log(checkArr([2, 4, 3], [5, 6, 4])); 
console.log(checkArr([0], [0]));  
console.log(checkArr([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])); 

type user={
    name:string
    age:number
}
let a:user={
    name:"mai",
    age:33
}
a["name"]="k"