import asyncCatch from "../../utils/async.catch";
import sendResponse from "../../utils/send.response";
import { customerService } from "./customer.service";

const createCustomer = asyncCatch(async (req, res) => {
  const result = await customerService.createCustomerForDb(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully created customer",
    data: result,
  });
});

export const customerContllors = {
  createCustomer,
};
