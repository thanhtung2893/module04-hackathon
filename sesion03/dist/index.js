"use strict";
/*
 Frequency counter pattern

*/
let arr1 = [2, 3, 0]
let arr2 = [4, 9, 0]
function same(a1, a2) {
    if (a1.length != a2.length)
        return false
    const newa1 = a1.map((item) => {
      return  item * item
    })

return newa1.sort().join('')==a2.sort().join('') 

}
console.log(same(arr1,arr2));

function sumZero(Arr) {
    for (let left = 0, right = Arr.length - 1; left < right; ) {
        const sum = Arr[left] + Arr[right];
        if (sum === 0) {       
            return [Arr[left], Arr[right]];
        } else if (sum > 0) {          
            right--;
        } else {          
            left++;
    }
    }
  return undefined;
}

// Ví dụ 
const Arr = [-5, -3, -2, 0, 1, 3, 4, 6];
const result = sumZero(Arr);

if (result) {
    console.log("Cặp số có tổng bằng 0:", result);
} else {
    console.log("Không tìm thấy cặp số có tổng bằng 0 trong mảng.");
}
