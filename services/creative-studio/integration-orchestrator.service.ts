import { creativeStudioIntegrations } from "../../modules/creative-studio/constants/module-integrations";

export type CreativeProductionContext = {
  workspaceId: string;
  brandId: string;
  campaignId: string;
  projectId: string;
  productionId: string;
};

export function validateCreativeProductionContext(context: CreativeProductionContext) {
  return Object.entries(context).every(([, value]) => value.trim().length > 0);
}

export function getCreativeStudioIntegrations() {
  return creativeStudioIntegrations;
}

export function assertNoStandaloneProduction(context: CreativeProductionContext) {
  if (!validateCreativeProductionContext(context)) {
    throw new Error("Creative productions must belong to a workspace, brand, campaign, project, and production record.");
  }

  return context;
}
