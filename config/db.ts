import { init, MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

// 文档：https://github.com/manyuanrong/deno_mongo/tree/master

// db 名称
const dbName = Deno.env.get("DB_NAME") || "deno_demo";
// db url
const dbHostUrl = Deno.env.get("DB_HOST_URL") || "mongodb://localhost:27017";
// 创建连接
const client = new MongoClient();
// 建立连接
client.connectWithUri(dbHostUrl);
const db = client.database(dbName);
export default db;