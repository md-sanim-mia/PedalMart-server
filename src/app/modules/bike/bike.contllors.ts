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

export const bikeContllors = {
  createBike,
};
