"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorator to validate product information
function validateProduct(target, key, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...param) {
        const [name, price, description, inStock] = param;
        if (!name || typeof price !== 'number' || price <= 0 || !description || typeof inStock !== 'number' || inStock < 0) {
            throw new Error('Thông tin sản phẩm không hợp lệ');
        }
        return method.apply(this, param);
    };
    return descriptor;
}
class Product {
    constructor() {
        this.name = '';
        this.price = 0;
        this.description = '';
        this.inStock = 0;
    }
    createProduct(name, price, description, inStock) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
}
__decorate([
    validateProduct,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, Number]),
    __metadata("design:returntype", void 0)
], Product.prototype, "createProduct", null);
try {
    const okProduct = new Product();
    okProduct.createProduct('Laptop', 57584, 'rẻ', 10);
    console.log('ok Product:', okProduct);
    const failProduct = new Product();
    failProduct.createProduct('', -100, '', -5);
    console.log('Invalid Product:', failProduct);
}
catch (error) {
    console.log(error);
}
