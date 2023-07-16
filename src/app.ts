import express from "express";
import helmet from "helmet";
import env from "./envConfig";
import databaseConnection from "./setupDatabase";
import socketIO from "./socketIo";

const app: express.Application = express();

app.use(helmet());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
databaseConnection();
socketIO();

console.log(`Server started with process ${process.pid}`);
app.listen(env.PORT, () => console.log("Bibli api running!"));
