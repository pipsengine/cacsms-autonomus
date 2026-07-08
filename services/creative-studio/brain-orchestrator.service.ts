import { executeWithCacsmsBrain } from "../cacsms-brain/brain-client.service";
import type { IntelligenceEngineKey, IntelligenceRequest } from "../../packages/types/src";

export const creativeStudioBrainFlow = [
  "creative-intelligence",
  "vision-intelligence",
  "video-intelligence",
  "audio-intelligence",
  "knowledge-intelligence",
  "decision-intelligence",
  "learning-intelligence",
] as const satisfies readonly IntelligenceEngineKey[];

export async function executeCreativeStudioBrainStep<TInput, TOutput>(
  engine: (typeof creativeStudioBrainFlow)[number],
  capability: IntelligenceRequest<TInput>["capability"],
  input: TInput,
) {
  return executeWithCacsmsBrain<TInput, TOutput>({
    id: `creative-studio-${engine}-${Date.now()}`,
    engine,
    capability,
    input,
    context: { module: "creative-studio" },
  });
}
