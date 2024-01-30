import express, { Request, Response } from "express";
import { createUser, deleteUser, getAllUser, getOneUser, updateUser } from "../controller/product.controller";

const productRoutes = express.Router() 


//lấy user về
productRoutes.get("/", /* getAllProduct */)

//lấy 1 user về
productRoutes.get("/:id", /* getOneProduct */)

//xóa 1 user theo id
productRoutes.delete("/:id", /* deleteProduct */)

//update user theo id
productRoutes.put("/:id", /* updateProduct */)

//thêm user vào
productRoutes.post("/", /* createProduct */)

export default productRoutes