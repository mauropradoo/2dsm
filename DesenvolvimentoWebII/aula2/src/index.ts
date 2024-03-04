import express, {Request, Response} from "express";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, function(){
    console.log(`Server on na porta ${PORT}...`);
});

app.use(routes);

export{};