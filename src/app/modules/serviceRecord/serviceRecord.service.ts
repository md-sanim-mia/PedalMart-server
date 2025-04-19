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
  const result = await prisma.serviceRecord.findUnique({
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
    data: { completionDate: paylood.completionDate },
  });
  return result;
};
const overdueServiceForDb = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const result = await prisma.serviceRecord.findMany({
    where: {
      OR: [
        { status: "pending" },
        { status: "in_progress" },
        { serviceDate: { lt: sevenDaysAgo } },
      ],
    },
  });
  return result;
};
export const serviceRecord = {
  createServiceRecordForDb,
  getAllServiceRecordForDb,
  getSingleServiceRecordForDb,
  updatedSingleServiceRecordForDb,
  overdueServiceForDb,
};
