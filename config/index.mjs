import dotenv from "dotenv";
import { default as dbConfiguration} from "./mongodb.config.mjs";

const config = dotenv.config();

const port = process.env.SERVER_PORT;

export const serverConfig = {
  port: port
}

 export const dbConfig = dbConfiguration
