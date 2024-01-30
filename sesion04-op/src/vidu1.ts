/* class Student {
    private _studentCode: string;
    private _studentName: string;
    private _age: number;
    private _address: string;
    private _phoneNumber: string;
  
    constructor(studentCode: string, studentName: string, age: number, address: string, phoneNumber: string) {
      this._studentCode = studentCode;
      this._studentName = studentName;
      this._age = age;
      this._address = address;
      this._phoneNumber = phoneNumber;
    }
  
    // Phương thức cho phép người dùng nhập thông tin đối tượng
    inputData(): void {
      this._studentCode = prompt("Nhập mã học sinh:");
      this._studentName = prompt("Nhập tên học sinh:");
      this._age = Number(prompt("Nhập tuổi:"));
      this._address = prompt("Nhập địa chỉ:");
      this._phoneNumber = prompt("Nhập số điện thoại:");
    }
  
    // Phương thức hiển thị thông tin đối tượng
    displayData(): void {
      console.log(`Mã học sinh: ${this._studentCode}`);
      console.log(`Tên học sinh: ${this._studentName}`);
      console.log(`Tuổi: ${this._age}`);
      console.log(`Địa chỉ: ${this._address}`);
      console.log(`Số điện thoại: ${this._phoneNumber}`);
    }
  
    // Getter cho mã học sinh
    get studentCode(): string {
      return this._studentCode;
    }
  
    // Setter cho địa chỉ
    set address(address: string) {
      this._address = address;
    }
  }
  
  class StudentManagement {
    private students: Student[] = [];
    private currentIndex: number = 0;
  
    // Hiển thị danh sách tất cả học sinh
    displayAllStudents(): void {
      if (this.currentIndex === 0) {
        console.log("Danh sách học sinh trống.");
      } else {
        console.log("Danh sách học sinh:");
        for (let i = 0; i < this.currentIndex; i++) {
          this.students[i].displayData();
          console.log("-----------");
        }
      }
    }
  
    // Thêm mới học sinh
    addStudent(): void {
      if (this.currentIndex < 100) {
        const student = new Student("", "", 0, "", "");
        student.inputData();
        this.students[this.currentIndex] = student;
        this.currentIndex++;
        console.log("Học sinh đã được thêm mới.");
      } else {
        console.log("Danh sách học sinh đã đầy, không thể thêm mới.");
      }
    }
  
    // Sửa thông tin học sinh dựa vào mã học sinh
    editStudent(studentCode: string): void {
      const student = this.findStudent(studentCode);
      if (student) {
        const newAddress = prompt("Nhập địa chỉ mới:");
        student.address = newAddress;
        console.log("Thông tin học sinh đã được cập nhật.");
      } else {
        console.log("Không tìm thấy học sinh có mã " + studentCode);
      }
    }
  
    // Xóa học sinh
    deleteStudent(studentCode: string): void {
      const index = this.students.findIndex((student) => student.studentCode === studentCode);
      if (index !== -1) {
        this.students.splice(index, 1);
        this.currentIndex--;
        console.log("Học sinh đã được xóa.");
      } else {
        console.log("Không tìm thấy học sinh có mã " + studentCode);
      }
    }
  
    // Tìm học sinh dựa vào mã học sinh
    private findStudent(studentCode: string): Student | undefined {
      return this.students.find((student) => student.studentCode === studentCode);
    }
  }
  
  // Chương trình chính
  const studentManagement = new StudentManagement();
  
  while (true) {
    console.log("1. Hiển thị danh sách tất cả học sinh");
    console.log("2. Thêm mới học sinh");
    console.log("3. Sửa thông tin học sinh");
    console.log("4. Xóa học sinh");
    console.log("5. Thoát");
  
    const choice = parseInt(prompt("Nhập lựa chọn:"), 10);
  
    switch (choice) {
      case 1:
        studentManagement.displayAllStudents();
        break;
  
      case 2:
        studentManagement.addStudent();
        break;
  
      case 3:
        const studentCodeToEdit:string|null = prompt("Nhập mã học sinh cần sửa:");
        studentManagement.editStudent(studentCodeToEdit);
        break;
  
      case 4:
        const studentCodeToDelete = prompt("Nhập mã học sinh cần xóa:");
        studentManagement.deleteStudent(studentCodeToDelete);
        break;
  
      case 5:
        console.log("Thoát chương trình.");
        process.exit();
  
      default:
        console.log("Lựa chọn không hợp lệ.");
    }
  }
   */