import express from "express";
import { customerRouters } from "../modules/customer/customer.route";
import { bikeRouters } from "../modules/bike/bike.route";
import { serviceRecordRouters } from "../modules/serviceRecord/serviceRecord.route";
const router = express.Router();

const moduleRouters = [
  {
    path: "/customers",
    route: customerRouters,
  },
  {
    path: "/bikes",
    route: bikeRouters,
  },
  {
    path: "/services",
    route: serviceRecordRouters,
  },
];

moduleRouters.forEach((item) => router.use(item.path, item.route));

export default router;
