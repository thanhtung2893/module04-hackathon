// Hàm faMap customr hàm Map
function faMap(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error('day la loi');
    }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result !== undefined) {
            result.push(callback(arr[i], i, arr));
        }
    }

    return result;
}

// Hàm faFilter sử dụng faMap
function faFilter(arr, callback) {
    const faArray = faMap(arr, (item, index, array) => {

        //nếu callback(item, index, array) là true thì giá trị là item
        //callback(item, index, array) là false thì giá trị là flase
        return callback(item, index, array) ? item : false;
    });


    // Tạo một mảng mới chỉ chứa các phần tử khác false
    const newArray = [];
    for (let i = 0; i < faArray.length; i++) {
        if (faArray[i] !== false) {
            newArray.push(faArray[i]);
        }
    }

    return newArray;
}
//xấy hàm foreach
/* 
-không tạo mảng mới,tương tác trực tiếp với mảng ban đầu và không nhận return
*/
// Hàm faForEach
function faForEach(arr, callback) {
    if (!Array.isArray(arr) ) {
      throw new Error('day la loi');
    }
  
    for (let i = 0; i < arr.length; i++) {
      
      callback(arr[i], i, arr);
    }
   
  }
  
  // Ví dụ 
  const numbers1 = [7, 2, 53, 14];
   faForEach(numbers1, (item,index) => {
      numbers1[index]=item*3
}); 
console.log(numbers1);
 
  
 /* xây hàm reduce */
 // Hàm faReduce
function faReduce(arr, callback, init) {
    if (!Array.isArray(arr) ) {
      throw new Error('day la loi');
    }
  
    let acc = init 
    for (let i = 0; i < arr.length; i++) {
      
      acc = callback(acc, arr[i]);
    }
  
    return acc;
  }
  
  // Ví dụ 
  const numbers2 = [1, 2, 3, 4,5,6,7,8,9,10,11];
  
  const sum = faReduce(numbers2, (a, b) => a + b, 0);
  
  console.log(sum); 
  
  

// Ví dụ 
const numbers = [1, 2, "mai", 3, 4, 10, 8, 15, 100];

const checkNumbers = faFilter(numbers, (item) => item > 15);

console.log(checkNumbers); 