import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config()

const app = express()

//middlewares
app.use(cors())
app.use(express.json())

// rota base
app.get("/", (req, res) => res.json({ message: "Servidor rodando 🚀" }));

// rotas de tasks
app.use("/tasks", taskRoutes);


// middlewares finais
app.use(notFound);
app.use(errorHandler);

//definindo a porta
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
