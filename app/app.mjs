import express from "express";
import { serverConfig } from "../config/index.mjs";

const app = express();

console.log(serverConfig);

app.get("/", (req, res) => res.send("hello 3 hogehoge hello"));

app.listen(serverConfig.port, () => console.log("listening"));
