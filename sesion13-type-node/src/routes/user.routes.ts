import express, { Request, Response } from "express";
import { createUser, deleteUser, getAllUser, getOneUser, updateUser } from "../controller/user.controller";

const userRoutes = express.Router() //khai bao bien userRoutes


//lấy user về
userRoutes.get("/", getAllUser)

//lấy 1 user về
userRoutes.get("/:id", getOneUser)

//xóa 1 user theo id
userRoutes.delete("/:id", deleteUser)

//update user theo id
userRoutes.put("/:id", updateUser)

//thêm user vào
userRoutes.post("/", createUser)

export default userRoutes