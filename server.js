const express = require('express');
const cors = require('cors');
const mysql = require ('mysql2');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection
({
   host: 'localhost',
   user: 'root',
   password: 'senac',
   database: 'bd_tdo'
});

db.connect(err => 
    {
        if (err) throw err;
        console.log('Banco de dados conectado!')
    }
)

app.post('/register', (req, res) => 
{
    const { cpf, nome, email, senha, dtNascimento } = req.body;
    db.query('INSERT INTO usuario (cpf, nome, email, senha, dtNascimento) VALUES (?, ?, ?, ?, ?)', [cpf, nome, email, senha, dtNascimento], (err) => 
    {
        if (err) return res.status(500).json(err);
        res.status(201).json({message: 'Usuário cadastrado!'});
    });
});

app.post('/login', (req, res) =>
{
    const {email, senha} = req.body;
    db.query('SELECT * FROM usuario WHERE email = ? AND senha = ?', [email, senha], (err, results) => 
    {
        if(err) return res.status(500).json(err);
        if (results.length === 0) return res.status(401).json({ message: 'Email ou senha incorretos!'});
        res.json({ message: 'Login bem-sucedido!', redirect: 'telaPrincipal.html'});
    });
});


app.listen(PORT, () => 
{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
