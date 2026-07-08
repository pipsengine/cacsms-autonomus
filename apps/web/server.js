import { createServer } from "node:http";
import { dirname } from "node:path";
import { parse } from "node:url";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT ?? 2527);
const hostname = process.env.HOSTNAME ?? "127.0.0.1";
const appDir = dirname(fileURLToPath(import.meta.url));

async function start() {
  let next;

  try {
    next = await import("next");
  } catch (error) {
    console.error("Next.js is required to run CACSMS Autonomous under IIS.");
    console.error("Install the web runtime dependencies before starting the IIS app.");
    throw error;
  }

  const app = next.default({
    dev: process.env.NODE_ENV !== "production",
    hostname,
    port,
    dir: appDir,
  });
  const handle = app.getRequestHandler();

  await app.prepare();

  createServer((request, response) => {
    const parsedUrl = parse(request.url ?? "/", true);
    handle(request, response, parsedUrl);
  }).listen(port, hostname, () => {
    console.log(`CACSMS Autonomous web server listening on http://${hostname}:${port}`);
  });
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
