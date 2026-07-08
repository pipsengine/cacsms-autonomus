import { createExecutionContext } from "./execution-context";

export function createWorkspaceContext(workspaceId: string, organizationId?: string) {
  return createExecutionContext({ workspaceId, organizationId });
}
