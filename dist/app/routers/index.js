"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_route_1 = require("../modules/customer/customer.route");
const bike_route_1 = require("../modules/bike/bike.route");
const serviceRecord_route_1 = require("../modules/serviceRecord/serviceRecord.route");
const router = express_1.default.Router();
const moduleRouters = [
    {
        path: "/customers",
        route: customer_route_1.customerRouters,
    },
    {
        path: "/bikes",
        route: bike_route_1.bikeRouters,
    },
    {
        path: "/services",
        route: serviceRecord_route_1.serviceRecordRouters,
    },
];
moduleRouters.forEach((item) => router.use(item.path, item.route));
exports.default = router;
