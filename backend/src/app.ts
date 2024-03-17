import express from 'express';
import customers from './routers/customers/index'

const app = express();

app.use(express.json());
app.use('/customers', customers);

export default app;