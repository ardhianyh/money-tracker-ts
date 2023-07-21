-- CreateEnum
CREATE TYPE "Type" AS ENUM ('INCOME', 'EXPENSE');

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "label" VARCHAR(255) NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "type" "Type" NOT NULL DEFAULT 'EXPENSE',
    "category" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);
