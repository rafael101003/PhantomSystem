import express from 'express'
import cors from 'cors'
const app = express();
const port = 3001;

app.get('/api', (req,res) => {
    res.json({message: 'hello world'});
});

app.use(cors());
app.use(express())

app.listen(port, () => {
    console.log(`o servidor http://localhost:${port} está funcionando!`)
});