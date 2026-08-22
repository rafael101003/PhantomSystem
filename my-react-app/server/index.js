import express from 'express'
import cors from 'cors'
const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:5173', // Porta exata onde o Vite roda
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
app.use(express());

app.get('/api', (req, res) => {
    res.json({ message: 'hello world' });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`o servidor http://localhost:${port} está funcionando!`)
});