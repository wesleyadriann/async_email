import { QueueClient } from "../infrastructure/Queue.js";
import { logger } from "../utils/logger.js";

export class EmailService {
  queueService: QueueClient;

  constructor() {
    this.queueService = new QueueClient();
  }
  async sendEmail(accountId: string) {
    logger.info("EmailService.sendEmail - start");
    const status = this.queueService.sendToQueue(accountId);

    logger.info("EmailService.sendEmail - end - sucess:", status);
  }
}
