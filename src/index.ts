import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint 1: Hello World
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Endpoint 2: Retornar Dados
app.get('/data', (req, res) => {
    res.json({ message: 'Aqui estão seus dados!' });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});