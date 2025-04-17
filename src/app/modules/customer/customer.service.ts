import { prisma } from "../../utils/prisma";
import { TCustomer } from "./customer.interface";
const createCustomerForDb = async (paylood: TCustomer) => {
  const isExistCustomer = await prisma.customer.findFirst({
    where: { email: paylood.email },
  });

  if (isExistCustomer) {
    throw new Error("customer already exist in database");
  }

  const result = await prisma.customer.create({ data: paylood });
  return result;
};

export const customerService = {
  createCustomerForDb,
};
