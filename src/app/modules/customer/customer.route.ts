import express from "express";
import { customerContllors } from "./customer.contllors";
const route = express.Router();
route.post("/", customerContllors.createCustomer);

export const customerRouters = route;
