import type { IntelligenceEngineKey } from "../../types/src";

export const cacsmsBrainEngines = [
  { key: "language-intelligence", label: "Language Intelligence" },
  { key: "vision-intelligence", label: "Vision Intelligence" },
  { key: "video-intelligence", label: "Video Intelligence" },
  { key: "audio-intelligence", label: "Audio Intelligence" },
  { key: "voice-intelligence", label: "Voice Intelligence" },
  { key: "creative-intelligence", label: "Creative Intelligence" },
  { key: "knowledge-intelligence", label: "Knowledge Intelligence" },
  { key: "memory-intelligence", label: "Memory Intelligence" },
  { key: "decision-intelligence", label: "Decision Intelligence" },
  { key: "workflow-intelligence", label: "Workflow Intelligence" },
  { key: "planning-intelligence", label: "Planning Intelligence" },
  { key: "reasoning-intelligence", label: "Reasoning Intelligence" },
  { key: "prediction-intelligence", label: "Prediction Intelligence" },
  { key: "analytics-intelligence", label: "Analytics Intelligence" },
  { key: "business-intelligence", label: "Business Intelligence" },
  { key: "trading-intelligence", label: "Trading Intelligence" },
  { key: "learning-intelligence", label: "Learning Intelligence" },
  { key: "optimization-intelligence", label: "Optimization Intelligence" },
  { key: "agent-intelligence", label: "Agent Intelligence" },
  { key: "security-intelligence", label: "Security Intelligence" },
] as const satisfies readonly { key: IntelligenceEngineKey; label: string }[];

export function isCacsmsBrainEngine(key: string): key is IntelligenceEngineKey {
  return cacsmsBrainEngines.some((engine) => engine.key === key);
}
