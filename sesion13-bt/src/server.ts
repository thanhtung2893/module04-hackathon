// src/index.ts
import { log } from 'console';
import express, { Request, Response } from 'express';
import mysql from 'mysql2/promise';


const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Kết nối đến cơ sở dữ liệu MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database_name',
    port: 3306
});

// lấy thông tin tất cả sản phẩm
app.get('/api/products', async (req: Request, res: Response) => {
    try {
        const [result] = await pool.execute('SELECT * FROM products');
        res.status(200).json(result);
        log(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
             error: 'loi server' 
            });
    }
});
//lấy thông tin tất cả categories
app.get('/api/categories', async (req: Request, res: Response) => {
    try {
        const [result] = await pool.execute('SELECT * FROM categories');
        res.status(200).json(result);
        log(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
             error: 'loi server' 
            });
    }
});

// lấy thông tin một sản phẩm theo id

app.get('/api/products/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;
    try {
        const [result] = await pool.execute('SELECT * FROM products WHERE product_id = ?', [productId]);
        log(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ 
            error: 'loi server' 
        });
    }
})
//lấy thông tin 1 categorie theo id
app.get('/api/categories/:id', async (req: Request, res: Response) => {
    const cateId = req.params.id;
    try {
        const [result] = await pool.execute('SELECT * FROM categories WHERE category_id = ?', [cateId]);
        log(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ 
            error: 'loi server' 
        });
    }
})
// thêm mới sản phẩm
app.post('/api/products', async (req: Request, res: Response) => {
    const { product_name, image, origin, category_id } = req.body;
    try {
        await pool.execute('INSERT INTO products (product_name, image, origin, category_id) VALUES (?, ?, ?, ?)', [
            product_name,
            image,
            origin,
            category_id,
        ]);
        res.status(201).json({ 
            message: 'them moi thanh cong' 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'loi server' });
    }
});
//thêm categorie mới
app.post('/api/categories', async (req: Request, res: Response) => {
    const { category_name,created_date } = req.body;
    try {
        await pool.execute('INSERT INTO categories (category_name) VALUES (?)', [
            category_name,
    
        ]);
        res.status(201).json({ 
            message: 'them moi thanh cong' 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'loi server' });
    }
});

//cập nhật thông tin một sản phẩm theo id
app.put('/api/products/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;
    const { product_name, image, origin, category_id } = req.body;
    try {
        await pool.execute(
            'UPDATE products SET product_name = ?, image = ?, origin = ?, category_id = ? WHERE product_id = ?',
            [product_name, image, origin, category_id, productId]
        );
        res.status(200).json({
             message: ' updated thanh cong' 
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({
             error: 'loi server'
             });
    }
});
//cập nhật thông tin categorie theo id
app.put('/api/categories/:id', async (req: Request, res: Response) => {
    const cateId = req.params.id;
    const { category_name } = req.body;
    try {
        await pool.execute(
            'UPDATE categories SET category_name = ? WHERE category_id = ?',
            [category_name, cateId]
        );
        res.status(200).json({
             message: ' updated thanh cong' 
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({
             error: 'loi server'
             });
    }
});

//xóa thông tin một sản phẩm theo id
app.delete('/api/products/:id', async (req: Request, res: Response) => {
    const productId = req.params.id;
    try {
        await pool.execute('DELETE FROM products WHERE product_id = ?', [productId]);
        res.status(200).json({
             message: 'xoa san pham thanh cong' 
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            error: 'loi server'
         });
    }
});
//xóa categories theo id
app.delete('/api/categories/:id', async (req: Request, res: Response) => {
    const cateId = req.params.id;
    try {
        await pool.execute('DELETE FROM categories WHERE category_id = ?', [cateId]);
        res.status(200).json({
             message: 'xoa danh muc san pham thanh cong' 
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            error: 'loi server'
         });
    }
});

app.listen(port, () => {
    console.log(`Server dang chay o cong http://localhost:${port}`);
});
