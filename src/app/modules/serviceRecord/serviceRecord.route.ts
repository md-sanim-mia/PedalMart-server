import express from "express";
import { serviceRecordContllors } from "./serviceRecord.contllors";
const route = express.Router();
route.post("/", serviceRecordContllors.createServiceRecord);
route.get("/", serviceRecordContllors.getAllServiceRecord);
route.get("/status-pending", serviceRecordContllors.overServiceRecord);
route.get("/:serviceId", serviceRecordContllors.getSinglesServiceRecord);
route.put("/:serviceId", serviceRecordContllors.updateSingleServiceRecord);

export const serviceRecordRouters = route;
