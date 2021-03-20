import dotenv from "dotenv";
import { dbConfig as dbConfiguration} from "./mongodb.config";

const config = dotenv.config();

const port = process.env.PORT;

export const serverConfig = {
  port: port
}

 export const dbConfig = dbConfiguration
