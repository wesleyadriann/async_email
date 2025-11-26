import { App } from "./App.js";

(() => {
  const port = parseInt(process.env.PORT || "3000");
  const app = new App(port);

  app.listen();
})();
