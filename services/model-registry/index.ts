export type EngineRegistration = {
  engineKey: string;
  version: string;
  capabilities: string[];
  benchmarkIds: string[];
  deploymentStatus: "development" | "testing" | "active" | "deprecated" | "rolled-back";
  healthStatus: "healthy" | "degraded" | "unavailable";
};

const registrations = new Map<string, EngineRegistration>();

export function registerIntelligenceEngine(registration: EngineRegistration) {
  registrations.set(`${registration.engineKey}@${registration.version}`, registration);
  return registration;
}

export function listIntelligenceEngines() {
  return [...registrations.values()];
}

export function getIntelligenceEngine(engineKey: string, version: string) {
  return registrations.get(`${engineKey}@${version}`);
}
