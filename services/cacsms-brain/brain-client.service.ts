import { IntelligenceRuntime } from "../../packages/brain/src";
import type { IntelligenceRequest } from "../../packages/types/src";

const runtime = new IntelligenceRuntime();

export function getCacsmsBrainRuntime() {
  return runtime;
}

export async function executeWithCacsmsBrain<TInput, TOutput>(request: IntelligenceRequest<TInput>) {
  return runtime.execute<TInput, TOutput>(request);
}
