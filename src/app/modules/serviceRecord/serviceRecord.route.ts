import express from "express";
import { serviceRecordContllors } from "./serviceRecord.contllors";
const route = express.Router();
route.post("/", serviceRecordContllors.createServiceRecord);

export const serviceRecordRouters = route;
