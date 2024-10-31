import express from "express";
import cors from "cors";
import { ExpressPeerServer } from "peer";

try {
  const app = express();
  const PORT = process.env.PORT || 5000;
  const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  const peerServer = ExpressPeerServer(server, {
    debug: true,
  });
  app.use(cors({ origin: "*" }));
  app.use("/peerjs", peerServer);
} catch (error) {
  console.log(error);
}
