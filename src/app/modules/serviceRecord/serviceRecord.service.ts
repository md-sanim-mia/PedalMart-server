import { prisma } from "../../utils/prisma";
import { TServiceRecord } from "./serviceRecord.interface";

const createServiceRecordForDb = async (paylood: TServiceRecord) => {
  const result = await prisma.serviceRecord.create({ data: paylood });
  return result;
};

export const serviceRecord = {
  createServiceRecordForDb,
};
