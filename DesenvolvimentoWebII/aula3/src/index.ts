import express from "express";
import dotenv from "dotenv";
import router from "./routes";
dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.listen(PORT, function(){
    console.log(`Rodando na ${PORT} ...`)
});

app.use(router);