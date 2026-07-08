import type { IntelligenceEngine, IntelligenceEngineKey, IntelligenceRequest, IntelligenceResponse } from "../../types/src";

export class IntelligenceRuntime {
  private engines = new Map<IntelligenceEngineKey, IntelligenceEngine>();

  registerEngine(engine: IntelligenceEngine) {
    this.engines.set(engine.key, engine);
  }

  getEngine(key: IntelligenceEngineKey) {
    return this.engines.get(key);
  }

  async execute<TInput, TOutput>(request: IntelligenceRequest<TInput>): Promise<IntelligenceResponse<TOutput>> {
    const engine = this.engines.get(request.engine);

    if (!engine) {
      throw new Error(`CACSMS Brain engine is not registered: ${request.engine}`);
    }

    const started = Date.now();
    const startedAt = new Date(started).toISOString();
    const methodName = request.capability.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase()) as keyof IntelligenceEngine;
    const method = engine[methodName];

    if (typeof method !== "function") {
      throw new Error(`CACSMS Brain engine ${engine.key} does not support capability ${request.capability}`);
    }

    const output = await (method as (input: TInput) => Promise<TOutput>)(request.input);
    const completed = Date.now();

    return {
      requestId: request.id,
      engine: engine.key,
      engineVersion: engine.version,
      confidence: 1,
      output,
      telemetry: {
        startedAt,
        completedAt: new Date(completed).toISOString(),
        executionMs: completed - started,
      },
    };
  }
}
