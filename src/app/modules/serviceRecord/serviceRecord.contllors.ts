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

export const serviceRecordContllors = {
  createServiceRecord,
};
