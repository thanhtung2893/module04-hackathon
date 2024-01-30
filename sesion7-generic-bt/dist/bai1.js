"use strict";
class Contact {
    constructor(name, email, phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
class PhoneBook {
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
        this.contacts.push(contact);
    }
    getContacts() {
        return this.contacts;
    }
}
// Sử dụng
const friendPhoneBook = new PhoneBook();
const familyPhoneBook = new PhoneBook();
//Thêm  danh bạ bạn bè
const friend1 = new Contact("mai", "mai@gmail.com", "0123456789");
const friend2 = new Contact("hoa", "hoa@gmail.com", "0987654321");
friendPhoneBook.addContact(friend1);
friendPhoneBook.addContact(friend2);
// Thêm  danh bạ gia đình
const family1 = new Contact("anh", "anh@gmail.com", "124235457");
const family2 = new Contact("em", "em@gmail.com", "983282357");
familyPhoneBook.addContact(family1);
familyPhoneBook.addContact(family2);
// In ra 
console.log("Danh bạ bạn bè:");
console.log(friendPhoneBook.getContacts());
console.log("Danh bạ gia đình:");
console.log(familyPhoneBook.getContacts());
//bài 2
// Xây dựng lớp GenericNumber
class GenericNumber {
    constructor(zeroValue) {
        this.zeroValue = zeroValue;
    }
    add(value) {
        return value;
    }
}
const numGenericNumber = new GenericNumber(0);
console.log("Phép cộng số nguyên:", numGenericNumber.add(9)); // Kết quả: 5
const stringGenericNumber = new GenericNumber("");
console.log("Phép cộng chuỗi:", stringGenericNumber.add("Hello")); // Kết quả: Hello
//bai 3
// Xây dựng lớp Order
class Order {
    constructor(orderId, customerName, totalAmount) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalAmount = totalAmount;
    }
}
// Xây dựng lớp OrderManager
class OrderManager {
    constructor() {
        this.orders = [];
    }
    // Phương thức thêm đơn đặt hàng
    addOrder(order) {
        this.orders.push(order);
    }
    // Phương thức sửa đơn đặt hàng
    updateOrder(orderId, updatedOrder) {
        const index = this.orders.findIndex(order => order.orderId === orderId);
        if (index !== -1) {
            this.orders[index] = { ...this.orders[index], ...updatedOrder };
        }
        else {
            console.log("Đơn đặt hàng không tồn tại.");
        }
    }
    // Phương thức tìm kiếm đơn đặt hàng
    searchOrder(item) {
        return this.orders.find(order => order.orderId === item);
    }
    // In ra danh sách đơn đặt hàng
    printOrders() {
        console.log("Danh sách đơn đặt hàng:");
        this.orders.forEach(order => {
            console.log(`OrderID: ${order.orderId}, CustomerName: ${order.customerName}, TotalAmount: ${order.totalAmount}`);
        });
    }
}
// Sử dụng lớp OrderManager để quản lý danh sách đơn đặt hàng
const orderManager = new OrderManager();
// Thêm đơn đặt hàng
orderManager.addOrder(new Order(1, "Customer1", 100));
orderManager.addOrder(new Order(2, "Customer2", 150));
// In ra danh sách đơn đặt hàng
orderManager.printOrders();
// Sửa đơn đặt hàng
orderManager.updateOrder(1, { customerName: "UpdatedCustomer1", totalAmount: 120 });
// In ra danh sách đơn đặt hàng sau khi sửa
orderManager.printOrders();
// Tìm kiếm đơn đặt hàng
const foundOrder = orderManager.searchOrder(2);
console.log("Đơn đặt hàng tìm kiếm:", foundOrder);
