// Observation harness: real Express HTTP, synthetic DB adapter, no Atlas connection.
import express from "express";
import { once } from "node:events";
import { createRecordRouter } from "../routes/record-router.js";
let inserted = [];
const db = { collection() { return { async insertOne(document) {
  inserted.push(document);
  return { acknowledged: true, insertedId: "synthetic-observation" };
}}; }};
const app = express();app.use(express.json());app.use("/record", createRecordRouter(db));
const server = app.listen(0, "127.0.0.1");await once(server, "listening");
try {
 const response = await fetch(`http://127.0.0.1:${server.address().port}/record`, {method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});
 console.log(JSON.stringify({status:response.status,response:await response.json(),synthetic_insert_calls:inserted.length,observation:"Empty body reached the insert adapter; no real database was used."},null,2));
} finally { await new Promise(resolve=>server.close(resolve)); }
