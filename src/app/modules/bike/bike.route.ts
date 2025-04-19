import express from "express";
import { bikeContllors } from "./bike.contllors";
const route = express.Router();

route.post("/", bikeContllors.createBike);
route.get("/", bikeContllors.getAllBike);
route.get("/:bikeId", bikeContllors.getSingleBike);
route.put("/:bikeId", bikeContllors.updateSingleBike);
route.delete("/:bikeId", bikeContllors.deleteSingleBike);

export const bikeRouters = route;
