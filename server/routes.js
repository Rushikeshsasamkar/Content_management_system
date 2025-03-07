import { createServer } from "http";
import { MOCK_PRODUCTS } from "@shared/constants";

export async function registerRoutes(app) {
  app.get("/api/products", (_req, res) => {
    res.json(MOCK_PRODUCTS);
  });

  const httpServer = createServer(app);
  return httpServer;
}
