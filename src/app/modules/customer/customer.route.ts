import express from "express";
import { customerContllors } from "./customer.contllors";
const route = express.Router();
route.post("/", customerContllors.createCustomer);
route.get("/", customerContllors.getAllCustomer);
route.get("/:customerId", customerContllors.getSingleCustomer);
route.put("/:customerId", customerContllors.updateSingleCustomer);
route.delete("/:customerId", customerContllors.deleteSingleCustomer);

export const customerRouters = route;
