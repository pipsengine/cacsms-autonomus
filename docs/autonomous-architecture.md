# Autonomous Architecture

CACSMS Autonomous behaves like a digital workforce. Agents coordinate through the autonomous lifecycle and consume intelligence through CACSMS Brain. Decision, policy, exception, learning, and memory services remain stable application services, while intelligence execution is routed through native Brain engines.

## Core Engines

| Engine | Responsibility | Location |
| --- | --- | --- |
| Decision Engine | Scores proposed actions against quality, compliance, confidence, risk, goals, and probability of success. | `services/autonomous-control/decision-engine.service.ts` |
| Policy Engine | Converts scores and thresholds into auto-approval, self-correction, or exception decisions. | `services/autonomous-control/policy-engine.service.ts` |
| Self-Correction | Retries failed validations until success or retry limit. | `services/autonomous-control/self-correction.service.ts` |
| Exception Engine | Captures root cause, suggested fix, retry strategy, and escalation policy. | `services/autonomous-control/exception-engine.service.ts` |
| Learning Engine | Applies completed workflow insights to future operations. | `services/autonomous-control/learning-engine.service.ts` |

## Daily Autonomous Content Workflow

1. Research Agent finds trends and opportunities.
2. Planning Agent selects the highest-value topic.
3. Content Agent generates content.
4. Editor Agent improves quality.
5. Brand Agent checks voice.
6. Compliance Agent validates.
7. Decision Engine scores.
8. Policy Engine approves or requests correction.
9. Scheduler Agent determines best posting time.
10. Publishing Agent publishes.
11. Analytics Agent measures.
12. Learning Agent improves future strategy.

## Agent Collaboration

Research Agent -> Planning Agent -> Content Agent -> Editor Agent -> Brand Agent -> Compliance Agent -> Scheduler Agent -> Publishing Agent -> Analytics Agent -> Learning Agent.

## Principle

The platform must never ask "What should I do next?" It continuously determines what needs attention, what should be created, what should be improved, what should be executed, and what should be learned.
