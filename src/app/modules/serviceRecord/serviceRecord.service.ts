import { prisma } from "../../utils/prisma";
import { TServiceRecord } from "./serviceRecord.interface";

const createServiceRecordForDb = async (paylood: TServiceRecord) => {
  const result = await prisma.serviceRecord.create({ data: paylood });
  return result;
};

const getAllServiceRecordForDb = async () => {
  const result = await prisma.serviceRecord.findMany({});
  return result;
};
const getSingleServiceRecordForDb = async (serviceId: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: { serviceId: serviceId },
  });
  return result;
};
const updatedSingleServiceRecordForDb = async (
  serviceId: string,
  paylood: any
) => {
  const result = await prisma.serviceRecord.update({
    where: { serviceId: serviceId },
    data: paylood,
  });
  return result;
};
export const serviceRecord = {
  createServiceRecordForDb,
  getAllServiceRecordForDb,
  getSingleServiceRecordForDb,
  updatedSingleServiceRecordForDb,
};
