import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//rota de teste
app.get("/", (req, res) => {
    res.json({message: "Servidor rodando"})
})

//definindo a porta
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
