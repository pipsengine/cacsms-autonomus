import { learningInputs } from "../../packages/types/src";

export type LearningUpdate = {
  source: (typeof learningInputs)[number];
  insight: string;
  appliedTo: "planning" | "scheduling" | "content-generation" | "recommendations" | "agent-behaviour";
  confidence: number;
};

export function applyLearning(update: LearningUpdate) {
  return {
    ...update,
    appliedAt: new Date().toISOString(),
  };
}
