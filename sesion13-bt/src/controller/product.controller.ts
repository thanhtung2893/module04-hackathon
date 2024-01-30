import express, { Request, Response } from "express";
import { createSql, deleteSql, getAllSql, getOneSql, updateSql } from "../services/product.service";

const userRoutes = express.Router() //khai bao bien userRoutes

//thêm user vào
export const createUser= async (req: Request, res: Response) => {
    try {
       const user=await createSql()
        res.status(201).json({
            message: "Them thanh cong"
        })
    }
    catch (error) {
        console.log(error)
    }
}
//lấy user về
export const getAllUser= async (req: Request, res: Response) => {
    try {
        const users=await getAllSql()
        res.status(200).json({
            data: users[0],
            message: "Thanh cong"
        })
    } catch (error) {
    }
}
//lấy về 1 user
export const getOneUser= async (req: Request, res: Response) => {
    try {
       const user=await getOneSql(Number(req.params.id))
        res.status(200).json({
            message: "Thanh cong"
        })
    } catch (error) {
        console.log(error)
    }
}
//xóa 1 user theo id
export const deleteUser= async (req: Request, res: Response) => {
    try {
       const userId=deleteSql(Number(req.params.id))
        res.status(200).json({
            message: "Thanh cong"
        })
    } catch (error) {
        console.log(error)
    }
}
//update user theo id
export const updateUser= async (req: Request, res: Response) => {
    try {
       const users=updateSql(Number(req.params.id))
        res.status(200).json({
            message: "Thanh cong"
        })
    } catch (error) {
        console.log(error)
    }
}
export default userRoutes