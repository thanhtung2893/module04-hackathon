import express, { Request, Response } from "express";
import mysql from "mysql2/promise"
import pool from "../utils/database";

//thêm user vào
export const createSql= async () => {
    const user = mysql.createPool(pool);
    const[result]  = await user.execute("insert into user(id,userName) values (9,'Thanh MAi')");
    return result
}
//lấy user về
export const getAllSql= ()=>{
    const user = mysql.createPool(pool);
    return user.execute("select * from user");
}

//lấy về 1 user
export const getOneSql= async (id:number) => {
    const user = mysql.createPool(pool);
    const[result]  = await user.execute("select * from user where id=?", [id]);
    return result
}
//xóa 1 user theo id
export const deleteSql= async (id:number) => {
    const user = mysql.createPool(pool);
    const[result]  = await user.execute("delete from user where id=?", [id]);
    return result
}

//update user theo id
export const updateSql= async (id:number) => {
    const updateData = {
        userName:"mai hoa"
    }
    const user = mysql.createPool(pool);
    const[result]  = await user.execute("update user set userName=? where id=?", [updateData.userName,id]);
return result
}
