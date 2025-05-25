/*
  Warnings:

  - You are about to drop the column `name` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `teacher` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admin" DROP COLUMN "name",
ADD COLUMN     "fullName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "teacher" DROP COLUMN "name",
ADD COLUMN     "fullName" TEXT NOT NULL;
