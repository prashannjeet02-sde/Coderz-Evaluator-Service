import express from "express";
import serverConfig from "./config/server.config";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// Server
app.listen(serverConfig.PORT, () => {
  console.log(`Server is up at Port:${serverConfig.PORT}`);
});
