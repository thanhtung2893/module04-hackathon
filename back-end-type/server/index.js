const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
const mysql=require('mysql2');

app.use(cors());
app.use(bodyParser.json());

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
})
db.getConnection((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('database connected');
    }
})



app.listen(port, () => {
    console.log(`Server dang chay cong ${port}`);
  });
  