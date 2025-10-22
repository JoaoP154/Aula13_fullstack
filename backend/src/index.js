import express from "express"
import cors from "cors"
import {persons} from "./persons"

const app = express()
const port = 5000

app.use(cors())

app.get("/", (request, response) => {
    response.json(data)    
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}!`)
})