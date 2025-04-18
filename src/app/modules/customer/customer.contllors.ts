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

const getAllCustomer = asyncCatch(async (req, res) => {
  const result = await customerService.getAllCustomerForDb();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully get all customer",
    data: result,
  });
});
const getSingleCustomer = asyncCatch(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.getSingleCustomerForDb(customerId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully get single customer",
    data: result,
  });
});
const updateSingleCustomer = asyncCatch(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.updatedSingleCustomerForDb(
    customerId,
    req.body
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully update single customer",
    data: result,
  });
});
const deleteSingleCustomer = asyncCatch(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.deletedSingleCustomerForDb(customerId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully delete single customer",
    data: result,
  });
});
export const customerContllors = {
  createCustomer,
  getAllCustomer,
  getSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
};
