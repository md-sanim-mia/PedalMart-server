import { prisma } from "../../utils/prisma";
import { TBike } from "./bike.interface";

const createBikeForDb = async (paylood: TBike) => {
  const result = await prisma.bike.create({ data: paylood });
  return result;
};

const getAllBikeForDb = async () => {
  const result = await prisma.bike.findMany({});
  return result;
};
const getSingleBikeForDb = async (bikeId: string) => {
  const result = await prisma.bike.findUnique({
    where: { bikeId: bikeId },
  });
  return result;
};
const updatedSingleBikeForDb = async (bikeId: string, paylood: any) => {
  const result = await prisma.bike.update({
    where: { bikeId: bikeId },
    data: paylood,
  });
  return result;
};

const deletedSingleBikeForDb = async (bikeId: string) => {
  const result = await prisma.bike.delete({
    where: { bikeId: bikeId },
  });
  return result;
};
export const bikeServices = {
  createBikeForDb,
  getAllBikeForDb,
  getSingleBikeForDb,
  updatedSingleBikeForDb,
  deletedSingleBikeForDb,
};
