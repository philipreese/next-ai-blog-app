/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

let prismaInit: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prismaInit = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prismaInit = global.prisma;
}

export const prisma = prismaInit;
