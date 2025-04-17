import { prisma } from "../../utils/prisma";
import { TBike } from "./bike.interface";

const createBikeForDb = async (paylood: TBike) => {
  const result = await prisma.bike.create({ data: paylood });
  return result;
};

export const bikeServices = {
  createBikeForDb,
};
