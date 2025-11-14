import { prismaClient } from "../infrastructure/database.js";

import { logger } from "../utils/logger.js";

class AccountService {
  async getAccount() {
    logger.info("AccountService.getAccount - start");
    const result = await prismaClient.account.findMany();

    logger.info("AccountService.getAccount - end");
    return { data: result };
  }

  async createAccount(account: { name: string; email: string }) {
    logger.info("AccountService.createAccount - start");
    const result = await prismaClient.account.create({ data: account });

    logger.info("AccountService.createAccount - end");
    return { data: result };
  }
}

export const accountService = new AccountService();
