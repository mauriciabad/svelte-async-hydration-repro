// Server-renders App into dist/index.html, as a framework would.
import { readFileSync, writeFileSync } from "node:fs";
import { App, render } from "./dist-server/entry-server.js";

const { head, body } = await render(App);
const html = readFileSync("dist/index.html", "utf8");
writeFileSync("dist/index.html", html.replace("<!--head-->", head).replace("<!--app-->", body));
