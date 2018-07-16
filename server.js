import express from 'express';
import router from './api/controllers/room';

const app = express();

app.use(router)

app.listen(8080);
