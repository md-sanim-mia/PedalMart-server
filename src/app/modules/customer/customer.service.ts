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

const getAllCustomerForDb = async () => {
  const result = await prisma.customer.findMany({});
  return result;
};
const getSingleCustomerForDb = async (customerId: string) => {
  const result = await prisma.customer.findUnique({
    where: { customerId: customerId },
  });
  return result;
};
const updatedSingleCustomerForDb = async (customerId: string, paylood: any) => {
  const result = await prisma.customer.update({
    where: { customerId: customerId },
    data: paylood,
  });
  return result;
};

const deletedSingleCustomerForDb = async (customerId: string) => {
  const result = await prisma.customer.delete({
    where: { customerId: customerId },
  });
  return result;
};
export const customerService = {
  createCustomerForDb,
  getAllCustomerForDb,
  getSingleCustomerForDb,
  updatedSingleCustomerForDb,
  deletedSingleCustomerForDb,
};
