import express from "express";
import { serverConfig } from "../config/index.mjs";

const app = express();

console.log(serverConfig);
const mockData = [
  {
  replyText: "今日はいい天気ですね",
  sentiment: 0.1,
  magnitude: 2.5,
  createdAt: Date.now()
},
  {
  replyText: "お腹減りましたね",
  sentiment: 0.4,
  magnitude: 1.2,
  createdAt: Date.now()
},
  {
  replyText: "うほおおお",
  sentiment: -0.2,
  magnitude: 3.6,
  createdAt: Date.now()
}]

app.get("/", (req, res) => res.json(JSON.stringify(mockData)));

app.listen(serverConfig.port, () => console.log("listening"));
