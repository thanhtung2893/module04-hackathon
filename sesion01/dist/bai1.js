"use strict";
function isValid(s) {
    const stack = [];
    const checkArr = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        const x = s[i];

        if (checkArr[x]) {
            // Nếu là dấu mở ngoặc, thêm vào stack
            stack.push(x);
        } else {
            // Nếu là dấu đóng ngoặc
            if (stack.length === 0 || checkArr[stack.pop()] !== x) {
                // Nếu stack rỗng hoặc không có dấu mở ngoặc tương ứng
                return false;
            }
        }
    }

    // Chuỗi hợp lệ nếu stack rỗng
    return stack.length === 0;
}

// Test
const inputString = "({[]})";
console.log(isValid(inputString)); // Kết quả: true
