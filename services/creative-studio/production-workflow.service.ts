import { creativeLifecycle, videoProductionPipeline } from "../../packages/types/src";

export function getCreativeLifecycle() {
  return creativeLifecycle;
}

export function getVideoProductionPipeline() {
  return videoProductionPipeline;
}

export function createProductionRun(objective: string) {
  return {
    objective,
    currentStep: creativeLifecycle[0],
    requiredPipeline: creativeLifecycle,
    createdAt: new Date().toISOString(),
  };
}
