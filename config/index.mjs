import dotenv from "dotenv";

const config = dotenv.config();

const port = process.env.PORT;

export const serverConfig = {
  port: port
}