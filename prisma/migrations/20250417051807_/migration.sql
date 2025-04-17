-- CreateEnum
CREATE TYPE "serviceStatus" AS ENUM ('pending', 'in_progress', 'done');

-- CreateTable
CREATE TABLE "customers" (
    "customerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "bikes" (
    "bikeId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bikes_pkey" PRIMARY KEY ("bikeId")
);

-- CreateTable
CREATE TABLE "serviceRecords" (
    "serviceId" TEXT NOT NULL,
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "status" "serviceStatus" NOT NULL DEFAULT 'pending',
    "bikeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "serviceRecords_pkey" PRIMARY KEY ("serviceId")
);

-- AddForeignKey
ALTER TABLE "bikes" ADD CONSTRAINT "bikes_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceRecords" ADD CONSTRAINT "serviceRecords_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "bikes"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
