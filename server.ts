/** 
 * 通过 url 直接在线引入模块
 * 首次运行后，deno 会下载并缓存该模块
 */
import { Application } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
// 使用 denv 来加载 .env 中配置的环境变量
import "https://deno.land/x/denv/mod.ts";

// 余下代码和 express 几乎一样，没什么特别的
import {
  fetchAllEmployees,
  createEmployee,
  fetchOneEmployee,
  updateEmployee,
  deleteEmployee,
} from "./controllers/employees.ts";
import { ErrorMiddleware } from "./utils/middlewares.ts";

const app = new Application();

app.use(ErrorMiddleware);

app.get("/employees", fetchAllEmployees)
  .post("/employees", createEmployee)
  .get("/employees/:id", fetchOneEmployee)
  .put("/employees/:id", updateEmployee)
  .delete("/employees/:id", deleteEmployee)
  .start({ port: 5000 });

console.log(`server listening on http://localhost:5000`);