import { createExecutionContext } from "./execution-context";

export function createOrganizationContext(organizationId: string, tenantId?: string) {
  return createExecutionContext({ organizationId, tenantId });
}
