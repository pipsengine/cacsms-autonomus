import { creativeAgents } from "../../packages/types/src";

export type CreativeAgentProfile = {
  key: (typeof creativeAgents)[number];
  mission: string;
  responsibilities: string[];
  tools: string[];
  permissions: string[];
  kpis: string[];
};

export function getRequiredCreativeAgents() {
  return creativeAgents;
}

export function createCreativeAgentProfile(key: (typeof creativeAgents)[number]): CreativeAgentProfile {
  return {
    key,
    mission: "Autonomously improve creative production outcomes while respecting brand, policy, and risk constraints.",
    responsibilities: ["plan", "produce", "review", "optimize", "learn"],
    tools: [],
    permissions: ["creative-studio.agents." + key + ".execute"],
    kpis: ["quality", "confidence", "brand-fit", "business-impact"],
  };
}
