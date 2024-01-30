import express, { Request, Response } from "express";
import userRoutes from "./routes/user.routes";
const app=express();
const port=8080

// app.get("",(req:Request,res:Response)=>{
//     res.send("Hello")
// })
app.use("/api/v1/user",userRoutes)

app.use("/api/v1/user/:id",userRoutes)// lấy 1 user


app.listen(port,()=>{
    console.log(`Server dang chay cong ${port}`)
})