import app from './';

const port = process.env.API_PORT;

app.listen(port || 3333, () => {
    if (process.env.NODE_ENV === 'dev')
        console.log(`Server is listening on port ${port}`);
});