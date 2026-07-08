import { createExecutionContext } from "./execution-context";

export function createRequestContext(requestId: string, permissions: readonly string[] = []) {
  return createExecutionContext({ requestId, permissions });
}
