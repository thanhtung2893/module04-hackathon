// Decorator to validate product information
function validateProduct(target: any, key: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
  
    descriptor.value = function (...param: any[]) {
      const [name, price, description, inStock] = param;
  
      if (!name || typeof price !== 'number' || price <= 0 || !description || typeof inStock !== 'number' || inStock < 0) {
        throw new Error('Thông tin sản phẩm không hợp lệ');
      }
  
      return method.apply(this, param);
    };
  
    return descriptor;
  }
  
  
  class Product {
    name: string;
    price: number;
    description: string;
    inStock: number;
    constructor() {

        this.name='';
        this.price=0;
        this.description='';
        this.inStock=0
    }

  
    @validateProduct
    createProduct(name: string, price: number, description: string, inStock: number) {
      this.name = name;
      this.price = price;
      this.description = description;
      this.inStock = inStock;
    }
  }
  

  try {
    const okProduct = new Product();
    okProduct.createProduct('Laptop', 57584, 'rẻ', 10);
    console.log('ok Product:', okProduct);
  
    const failProduct = new Product();
    failProduct.createProduct('', -100, '', -5); 
    console.log('Invalid Product:', failProduct); 
  } catch (error) {
    console.log(error);
    
  }
  