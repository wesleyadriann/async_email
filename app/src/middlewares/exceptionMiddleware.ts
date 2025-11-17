import { NextFunction, Request, Response } from "express";

import { getReasonPhrase, StatusCodes } from "http-status-codes";

import { Exception } from "../exceptions/Exception.js";
import { logger } from "../utils/logger.js";

export const exceptionMiddleware = (
  error: Exception,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  logger.error("exceptionMiddleware - Exception:", error.message);

  const status = error.getStatus?.() ?? StatusCodes.INTERNAL_SERVER_ERROR;

  res.status(status).json({
    code: status,
    message: getReasonPhrase(status),
    details: error.message,
  });
};
