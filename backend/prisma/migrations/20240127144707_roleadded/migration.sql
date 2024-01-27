/*
  Warnings:

  - Added the required column `role` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Staff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL
);
INSERT INTO "new_Staff" ("id", "password", "username") SELECT "id", "password", "username" FROM "Staff";
DROP TABLE "Staff";
ALTER TABLE "new_Staff" RENAME TO "Staff";
CREATE UNIQUE INDEX "Staff_username_key" ON "Staff"("username");
CREATE UNIQUE INDEX "Staff_password_key" ON "Staff"("password");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
