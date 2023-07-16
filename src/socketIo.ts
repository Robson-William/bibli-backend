import { Server } from "socket.io";
import { createClient } from "redis";
import { createAdapter } from "@socket.io/redis-adapter";
import env from "./envConfig";

export default async () => {
  const io: Server = new Server({
    cors: {
      origin: env.CLIENT_URL,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    },
  });

  const pubClient = createClient({ url: env.REDIS_HOST });
  const subClient = pubClient.duplicate();

  await Promise.all([pubClient.connect(), subClient.connect()]);
  io.adapter(createAdapter(pubClient, subClient));
  return io;
};
