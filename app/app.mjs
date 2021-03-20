import express from "express";
import { serverConfig } from "../config/index.mjs";
import cors from "cors";

const app = express();

console.log(serverConfig);
const mockData = [
  {
    replyText: "今日はいい天気ですね",
    sentiment: 0.1,
    magnitude: 2.5,
    createdAt: Date.now(),
  },
  {
    replyText: "お腹減りましたね",
    sentiment: 0.4,
    magnitude: 1.2,
    createdAt: Date.now(),
  },
  {
    replyText: "うほおおお",
    sentiment: -0.2,
    magnitude: 3.6,
    createdAt: Date.now(),
  },
];

app.use(
  cors({
    orgin: "localhost:8081",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);

app.get("/", (req, res) => res.json(JSON.stringify(mockData)));

app.listen(serverConfig.port, () => console.log("listening"));
