import { executeWithCacsmsBrain } from "../cacsms-brain/brain-client.service";
import type { IntelligenceEngineKey, IntelligenceRequest } from "../../packages/types/src";

export function createAgentBrainRequest<TInput>(
  agentKey: string,
  engine: IntelligenceEngineKey,
  capability: IntelligenceRequest<TInput>["capability"],
  input: TInput,
): IntelligenceRequest<TInput> {
  return {
    id: `${agentKey}-${Date.now()}`,
    engine,
    capability,
    input,
    context: { agentKey },
  };
}

export async function executeAgentThroughBrain<TInput, TOutput>(request: IntelligenceRequest<TInput>) {
  return executeWithCacsmsBrain<TInput, TOutput>(request);
}
