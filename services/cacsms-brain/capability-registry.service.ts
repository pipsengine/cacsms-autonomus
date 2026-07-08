import { intelligenceCapabilities, intelligenceEngineKeys } from "../../packages/types/src";

export function getBrainCapabilityRegistry() {
  return intelligenceEngineKeys.map((engine) => ({
    engine,
    capabilities: intelligenceCapabilities,
  }));
}
