
class Employee {
    private employeeId: string;
    private employeeName: string;
    private age: number;
    private gender: string;
    private rate: number;
    private salary: number;

    // Phương thức khởi tạo không tham số
    constructor() {}

    // Phương thức khởi tạo có tham số
    constructor(employeeId: string, employeeName: string, age: number, gender: string, rate: number) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.age = age;
        this.gender = gender;
        this.rate = rate;
    }

    // Phương thức nhập thông tin từ người dùng
    public inputData(): void {
        prompt.start();

        prompt.get(['employeeId', 'employeeName', 'age', 'gender', 'rate'], (err, result) => {
            this.employeeId = result.employeeId;
            this.employeeName = result.employeeName;
            this.age = parseInt(result.age, 10);
            this.gender = result.gender;
            this.rate = parseFloat(result.rate);

            prompt.stop();
            this.calSalary();
            this.displayData();
        });
    }

    // Phương thức tính lương
    public calSalary(): void {
        this.salary = this.rate * 1300000;
    }

    // Phương thức hiển thị thông tin nhân viên
    public displayData(): void {
        console.log(`Mã nhân viên: ${this.employeeId}`);
        console.log(`Tên nhân viên: ${this.employeeName}`);
        console.log(`Tuổi: ${this.age}`);
        console.log(`Giới tính: ${this.gender}`);
        console.log(`Hệ số lương: ${this.rate}`);
        console.log(`Lương: ${this.salary}`);
        console.log('------------------------------');
    }
}

// Phương thức main
function main(): void {
    // Khởi tạo 5 đối tượng nhân viên
    const employees: Employee[] = [];
    for (let i = 0; i < 5; i++) {
        employees.push(new Employee());
        employees[i].inputData();
    }
}

// Gọi phương thức main để chạy chương trình
main();
