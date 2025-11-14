import { Router } from "express";

const router = Router();

router.get("/health", async (_, res) => {
  res.status(200).json({});
});

export const healthController = router;
