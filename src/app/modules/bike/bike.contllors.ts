import asyncCatch from "../../utils/async.catch";
import sendResponse from "../../utils/send.response";
import { bikeServices } from "./bike.service";

const createBike = asyncCatch(async (req, res) => {
  const result = await bikeServices.createBikeForDb(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully created bike",
    data: result,
  });
});
const getAllBike = asyncCatch(async (req, res) => {
  const result = await bikeServices.getAllBikeForDb();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully get all bikes",
    data: result,
  });
});
const getSingleBike = asyncCatch(async (req, res) => {
  const { bikeId } = req.params;
  const result = await bikeServices.getSingleBikeForDb(bikeId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully get single bike",
    data: result,
  });
});
const updateSingleBike = asyncCatch(async (req, res) => {
  const { bikeId } = req.params;
  const result = await bikeServices.updatedSingleBikeForDb(bikeId, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully update single bike",
    data: result,
  });
});
const deleteSingleBike = asyncCatch(async (req, res) => {
  const { bikeId } = req.params;
  const result = await bikeServices.deletedSingleBikeForDb(bikeId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully delete single customer",
    data: result,
  });
});
export const bikeContllors = {
  createBike,
  getAllBike,
  getSingleBike,
  updateSingleBike,
  deleteSingleBike,
};
