export type SelfCorrectionAttempt<T> = {
  attempt: number;
  value: T;
  passed: boolean;
  reason?: string;
};

export async function runSelfCorrection<T>(
  initialValue: T,
  retryLimit: number,
  correct: (value: T, attempt: number) => Promise<T>,
  validate: (value: T) => Promise<{ passed: boolean; reason?: string }>,
) {
  const attempts: SelfCorrectionAttempt<T>[] = [];
  let currentValue = initialValue;

  for (let attempt = 0; attempt <= retryLimit; attempt += 1) {
    const validation = await validate(currentValue);
    attempts.push({ attempt, value: currentValue, ...validation });

    if (validation.passed) {
      return { status: "corrected" as const, value: currentValue, attempts };
    }

    if (attempt < retryLimit) {
      currentValue = await correct(currentValue, attempt + 1);
    }
  }

  return { status: "exception" as const, value: currentValue, attempts };
}
