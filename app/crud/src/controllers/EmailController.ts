import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { EmailService } from "../services/EmailService.js";

export class EmailController {
  router = Router();

  private readonly path = "/v1/email";
  private readonly emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
    this.createRoutes();
  }

  private createRoutes() {
    this.router.post(this.path + "/:accountId", this.sendEmail.bind(this));
  }

  private async sendEmail(
    request: Request<{ accountId: string }>,
    response: Response,
  ) {
    await this.emailService.sendEmail(request.params.accountId);

    response
      .status(StatusCodes.OK)
      .send({ message: "Email sent successfully" });
  }
}
