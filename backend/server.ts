import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get("/", (_, res) => {
  res.send("Kanban API en ligne")
})

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB Connecté")
    app.listen(PORT, () => console.log(`Serveur sur http://localhost:${PORT}`))
  })
  .catch((err) => {
    console.error("Erreur de connexion MongoDB: ", err)
  })
