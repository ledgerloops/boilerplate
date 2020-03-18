import { createServer, IncomingMessage, ServerResponse } from "http";
import { HelloWorld } from "..";

createServer((req: IncomingMessage, res: ServerResponse) => {
  const message = HelloWorld();
  res.end(message);
}).listen(3000);
console.log("Listening on port 3000");
