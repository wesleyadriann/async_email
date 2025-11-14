import { Router } from "express";

import { accountService } from "../services/AccountService.js";

const router = Router();

router.get("/v1/account", async (req, res) => {
  const response = await accountService.getAccount();
  res.status(200).json(response);
});

router.post("/v1/account", async (req, res) => {
  const bodyRequest = req.body;
  const response = await accountService.createAccount(bodyRequest);

  res.status(200).json(response);
});

router.delete("/v1/account/:id", async (req, res) => {});

export const accountController = router;
