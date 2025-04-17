import express from "express";
import { bikeContllors } from "./bike.contllors";
const route = express.Router();

route.post("/", bikeContllors.createBike);

export const bikeRouters = route;
