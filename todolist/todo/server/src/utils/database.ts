// backend/src/db.ts
import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'demotodo', 
  port: 3306
});
const database = pool.promise()
export default database;
