import asyncCatch from "../../utils/async.catch";
import sendResponse from "../../utils/send.response";
import { serviceRecord } from "./serviceRecord.service";

const createServiceRecord = asyncCatch(async (req, res) => {
  const result = await serviceRecord.createServiceRecordForDb(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully created service record ",
    data: result,
  });
});
const getAllServiceRecord = asyncCatch(async (req, res) => {
  const result = await serviceRecord.getAllServiceRecordForDb();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully get all service record",
    data: result,
  });
});
const getSinglesServiceRecord = asyncCatch(async (req, res) => {
  const { serviceId } = req.params;
  const result = await serviceRecord.getSingleServiceRecordForDb(serviceId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully get single customer",
    data: result,
  });
});
const updateSingleServiceRecord = asyncCatch(async (req, res) => {
  const { serviceId } = req.params;
  const result = await serviceRecord.updatedSingleServiceRecordForDb(
    serviceId,
    req.body
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "success fully update single customer",
    data: result,
  });
});
// const deleteSingleServiceRecord = asyncCatch(async (req, res) => {
//   const { customerId } = req.params;
//   const result = await serviceRecord.(customerId);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "success fully delete single customer",
//     data: result,
//   });
// });
export const serviceRecordContllors = {
  createServiceRecord,
  getAllServiceRecord,
  getSinglesServiceRecord,
  updateSingleServiceRecord,
};
