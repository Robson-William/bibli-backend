import express from "express";
import helmet from "helmet";
import { PORT } from "./envConfig";

const app: express.Application = express();

app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => console.log("Bibli api running!"));
