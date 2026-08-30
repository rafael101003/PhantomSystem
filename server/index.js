import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { createClient } from '@supabase/supabase-js';
import { body } from 'motion/react-client';

const app = express();
const PORT = process.env.PORT || 3000; // Porta do servidor local

// Importa supabase para a API
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
);

app.use(cors());
app.use(express.json());

// Rota teste
app.get('/api/teste', (req, res) => {
    res.json('hello world');
});

// Puxa todos os dados da tabela cliente
app.get('/api/data', async (req, res) => {
    try {
        const {data, error} = await supabase
            .from('cliente')
            .select('*');

            if(error) return res.status(400).json({erro: error.message});
            res.json({dados: data});
    }catch(err){
        console.log(err)
        res.status(500).json({erro: 'erro ao se comunicar com servidor'});
    }
});

// Ao fazer o orçamento, guarda nome do cliente e total do orçamento
app.post('/api/orcamento', async (req,res) => {
    try{
        const{cliente_nome} = req.body

        if(!cliente_nome){res.status(400).json({erro: 'Inserir o nome é obrigatório'});}

        const{data, error} = await supabase
        .from('cliente')
        .insert([{cliente_nome: cliente_nome}])
        .select();

        if(error) return res.status(400).json({erro: error.message});
;
        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso!',
            dados: data
        });
    }
    
    catch(err){
        console.log(err);
        res.status(500).json({erro: 'erro interno ao se comunicar com o servidor'});
    }
});

app.listen(PORT, () => {
    console.log(`servidor rodando na porta-> ${PORT}`);
});