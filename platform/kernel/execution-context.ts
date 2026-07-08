export type ExecutionContext = {
  requestId: string;
  sessionId?: string;
  userId?: string;
  tenantId?: string;
  organizationId?: string;
  workspaceId?: string;
  permissions: readonly string[];
};

export function createExecutionContext(context: Partial<ExecutionContext> = {}): ExecutionContext {
  return {
    requestId: context.requestId ?? "kernel-" + Date.now(),
    sessionId: context.sessionId,
    userId: context.userId,
    tenantId: context.tenantId,
    organizationId: context.organizationId,
    workspaceId: context.workspaceId,
    permissions: context.permissions ?? [],
  };
}
