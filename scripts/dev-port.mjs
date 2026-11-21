import { createServer } from "node:net";

const DEFAULT_DEV_PORT = 3000;
const PORT_SCAN_LIMIT = 100;

function readPortFlag(args) {
  let port;
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--port" || arg === "-p") {
      port = Number(args[index + 1]);
      index += 1;
    } else if (arg.startsWith("--port=")) {
      port = Number(arg.slice("--port=".length));
    }
  }
  return Number.isInteger(port) && port >= 0 && port <= 65535 ? port : undefined;
}

export function requestedDevPort(args, env = process.env) {
  const fromArgs = readPortFlag(args);
  if (fromArgs !== undefined) return fromArgs;

  const fromEnv = Number(env.PORT);
  if (Number.isInteger(fromEnv) && fromEnv >= 0 && fromEnv <= 65535) return fromEnv;

  return DEFAULT_DEV_PORT;
}

function isPortFree(port, host) {
  return new Promise((resolve) => {
    const server = createServer();
    server.unref();
    server.once("error", () => resolve(false));
    server.listen({ port, host, exclusive: true }, () => {
      server.close(() => resolve(true));
    });
  });
}

export async function findAvailablePort(startPort, { host = "0.0.0.0" } = {}) {
  if (startPort === 0) return 0;

  const lastPort = Math.min(startPort + PORT_SCAN_LIMIT, 65535);
  for (let port = startPort; port <= lastPort; port += 1) {
    if (await isPortFree(port, host)) return port;
  }

  throw new Error(`No free port found between ${startPort} and ${lastPort}.`);
}
