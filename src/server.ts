import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.API_PORT;

app.listen(port || 3333, () => {
    if (process.env.NODE_ENV === 'dev')
        console.log(`Server is listening on port ${port}`);
});