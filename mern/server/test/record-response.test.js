import { test } from "node:test";
import assert from "node:assert/strict";
import express from "express";
import { once } from "node:events";
import { createRecordRouter } from "../routes/record-router.js";

async function requestRecord(t, result) {
  const expectedId = "507f1f77bcf86cd799439011";
  const db = { collection(name) {
    assert.equal(name, "records");
    return { async findOne(query) {
      assert.equal(query._id.toHexString(), expectedId);
      return result;
    }};
  }};
  const app = express();
  app.use("/record", createRecordRouter(db));
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => new Promise(resolve => server.close(resolve)));
  return fetch(`http://127.0.0.1:${server.address().port}/record/${expectedId}`);
}

test("missing record returns HTTP 404 and a useful response", async t => {
  const response = await requestRecord(t, null);
  assert.equal(response.status, 404);
  assert.equal(await response.text(), "Not found");
});

test("existing record remains HTTP 200 with its original JSON", async t => {
  const record = { _id: "507f1f77bcf86cd799439011", name: "Synthetic learner", position: "QA", level: "junior" };
  const response = await requestRecord(t, record);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), record);
});
