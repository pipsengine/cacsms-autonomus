import type { CreativeDecisionScores } from "../../packages/types/src";

export type CreativePolicyThresholds = {
  brandFitMinimum: number;
  brandAlignmentMinimum: number;
  businessAlignmentMinimum: number;
  complianceMinimum: number;
  qualityMinimum: number;
  riskMaximum: number;
  platformSuitabilityMinimum: number;
  audienceFitMinimum: number;
  predictedEngagementMinimum: number;
  predictedRoiMinimum: number;
  confidenceMinimum: number;
  historicalSuccessMinimum: number;
  duplicateDetectionMaximum: number;
  trendAlignmentMinimum: number;
  publishingWindowMinimum: number;
};

export const defaultCreativePolicyThresholds = {
  brandFitMinimum: 90,
  brandAlignmentMinimum: 90,
  businessAlignmentMinimum: 85,
  complianceMinimum: 95,
  qualityMinimum: 85,
  riskMaximum: 15,
  platformSuitabilityMinimum: 80,
  audienceFitMinimum: 80,
  predictedEngagementMinimum: 70,
  predictedRoiMinimum: 65,
  confidenceMinimum: 90,
  historicalSuccessMinimum: 70,
  duplicateDetectionMaximum: 10,
  trendAlignmentMinimum: 70,
  publishingWindowMinimum: 75,
} as const satisfies CreativePolicyThresholds;

export function evaluateCreativeProduction(
  scores: CreativeDecisionScores,
  thresholds: CreativePolicyThresholds = defaultCreativePolicyThresholds,
) {
  const failures = [
    scores.brandFit >= thresholds.brandFitMinimum ? null : "Brand fit below threshold.",
    scores.brandAlignment >= thresholds.brandAlignmentMinimum ? null : "Brand alignment below threshold.",
    scores.businessAlignment >= thresholds.businessAlignmentMinimum ? null : "Business alignment below threshold.",
    scores.compliance >= thresholds.complianceMinimum ? null : "Compliance below threshold.",
    scores.quality >= thresholds.qualityMinimum ? null : "Quality below threshold.",
    scores.risk <= thresholds.riskMaximum ? null : "Risk exceeds threshold.",
    scores.platformSuitability >= thresholds.platformSuitabilityMinimum ? null : "Platform suitability below threshold.",
    scores.audienceFit >= thresholds.audienceFitMinimum ? null : "Audience fit below threshold.",
    scores.predictedEngagement >= thresholds.predictedEngagementMinimum ? null : "Predicted engagement below threshold.",
    scores.predictedRoi >= thresholds.predictedRoiMinimum ? null : "Predicted ROI below threshold.",
    scores.confidence >= thresholds.confidenceMinimum ? null : "Confidence below threshold.",
    scores.historicalSuccess >= thresholds.historicalSuccessMinimum ? null : "Historical success below threshold.",
    scores.duplicateDetection <= thresholds.duplicateDetectionMaximum ? null : "Duplicate detection exceeds threshold.",
    scores.trendAlignment >= thresholds.trendAlignmentMinimum ? null : "Trend alignment below threshold.",
    scores.publishingWindow >= thresholds.publishingWindowMinimum ? null : "Publishing window below threshold.",
  ].filter((failure): failure is string => Boolean(failure));

  return {
    approvedForPublishing: failures.length === 0,
    failures,
    scores,
  };
}
