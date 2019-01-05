import { cwd, readDirSync, readFileSync, lstatSync, FileInfo } from "deno";
import { Server } from "./../framework/index.ts";
import fileBrowser from "./file_browser.ts";

const app = new Server();
const addr = "127.0.0.1:3001";
const baseDir = [cwd(), "assets"].join("/");

app.use(fileBrowser(baseDir));

app.listen(addr, function(){
  console.log(`listening on ${addr}`);
});