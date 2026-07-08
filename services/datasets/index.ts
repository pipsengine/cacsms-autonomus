import { datasetDomains, datasetGovernanceCapabilities } from "../../packages/types/src";

export type DatasetRecord = {
  id: string;
  domain: (typeof datasetDomains)[number];
  version: string;
  tags: string[];
  lineage: string[];
  qualityScore: number;
  approved: boolean;
  retentionPolicy: string;
};

export function getDatasetDomains() {
  return datasetDomains;
}

export function getDatasetGovernanceCapabilities() {
  return datasetGovernanceCapabilities;
}
