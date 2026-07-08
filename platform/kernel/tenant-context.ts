import { createExecutionContext } from "./execution-context";

export function createTenantContext(tenantId: string) {
  return createExecutionContext({ tenantId });
}
