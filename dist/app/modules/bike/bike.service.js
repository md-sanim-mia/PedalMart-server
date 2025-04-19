"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeServices = void 0;
const prisma_1 = require("../../utils/prisma");
const createBikeForDb = (paylood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.create({ data: paylood });
    return result;
});
const getAllBikeForDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.findMany({});
    return result;
});
const getSingleBikeForDb = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.findUnique({
        where: { bikeId: bikeId },
    });
    return result;
});
const updatedSingleBikeForDb = (bikeId, paylood) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.update({
        where: { bikeId: bikeId },
        data: paylood,
    });
    return result;
});
const deletedSingleBikeForDb = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.delete({
        where: { bikeId: bikeId },
    });
    return result;
});
exports.bikeServices = {
    createBikeForDb,
    getAllBikeForDb,
    getSingleBikeForDb,
    updatedSingleBikeForDb,
    deletedSingleBikeForDb,
};
