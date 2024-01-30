import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';

const app = express();
const PORT =  7000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(taskRoutes);

app.listen(PORT, () => {
  console.log(`server dang chay o cong ${PORT}`);
});
