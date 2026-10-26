import db from "../db/connection.js";
import { createRecordRouter } from "./record-router.js";

export default createRecordRouter(db);
