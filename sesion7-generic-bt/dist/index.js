"use strict";
//bài 1: viết hàm tính giai thừa của một số
function tinhGiaiThua(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let giaiThua = 1;
    for (let i = 2; i <= n; i++) {
        giaiThua *= i;
    }
    return giaiThua;
}
// test
const n = 5;
const ketQua = tinhGiaiThua(n);
console.log(`Giai thừa của ${n} là: ${ketQua}`);
//bài 2: viết hàm check trung nếu trùng trả về true nếu
//không trả về false
function checkTrung(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}
// test
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 1];
console.log(checkTrung(arr1));
console.log(checkTrung(arr2));
