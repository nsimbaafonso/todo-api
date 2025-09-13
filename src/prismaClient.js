// src/prismaClient.js
import { PrismaClient } from "@prisma/client";

// cria apenas uma instância
const prisma = new PrismaClient();

// exporta para usar em qualquer lugar
export default prisma;
