import { createExecutionContext } from "./execution-context";

export function createSecurityContext(userId: string, permissions: readonly string[]) {
  return createExecutionContext({ userId, permissions });
}
