/* let number1:string="abc"
number1="a"
console.log(number1);
let name1:string="hoa"
let isUndefined:undefined=undefined
let isNull:null
let boolean:boolean=true
let array: (string|number)[]=["hoa","hà",7]

const getData=():string=>{
return "mai"
} */
function maxSumArr(nums: number[]): number | string {
   

    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
      // So sánh giá trị và cập nhật currentSum và maxSum
      if (nums[i] > currentSum + nums[i]) {
        currentSum = nums[i];
      } else {
        currentSum = currentSum + nums[i];
      }

      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }

    return maxSum;
  }

  // Nhập mảng từ người dùng sử dụng alert và prompt
  const inputArray:string|null = prompt('Nhập mảng số nguyên');

  const nums = inputArray.split(',').map(Number);

  const result = maxSumArr(nums);
  alert(`Tổng của dãy con liên tiếp có tổng lớn nhất là: ${result}`);
