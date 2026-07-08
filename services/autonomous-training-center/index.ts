import { trainingCenterCapabilities } from "../../packages/types/src";

export type TrainingJob = {
  id: string;
  datasetIds: string[];
  targetEngine: string;
  status: "queued" | "running" | "evaluating" | "validated" | "deployed" | "rolled-back" | "failed";
  experimentId?: string;
};

export function getTrainingCenterCapabilities() {
  return trainingCenterCapabilities;
}

export function createTrainingJob(job: TrainingJob) {
  return job;
}
