# Sidebar Structure

CACSMS Autonomous uses the module registry as the canonical source for sidebar modules, routes, permissions, and breadcrumbs.

## Dashboard

- Key: `dashboard`
- Route: `/dashboard`
- Permission: `dashboard.view`

- Overview: `/dashboard/overview` / `dashboard.overview.view`
- Activity Feed: `/dashboard/activity-feed` / `dashboard.activity-feed.view`
- My Tasks: `/dashboard/my-tasks` / `dashboard.my-tasks.view`
- Notifications: `/dashboard/notifications` / `dashboard.notifications.view`
- Recent Activities: `/dashboard/recent-activities` / `dashboard.recent-activities.view`
- Performance Snapshot: `/dashboard/performance-snapshot` / `dashboard.performance-snapshot.view`
- Autonomous Recommendations: `/dashboard/autonomous-recommendations` / `dashboard.autonomous-recommendations.view`
- System Health: `/dashboard/system-health` / `dashboard.system-health.view`

## Workspace

- Key: `workspace`
- Route: `/workspace`
- Permission: `workspace.view`

- My Workspace: `/workspace/my-workspace` / `workspace.my-workspace.view`
- Organizations: `/workspace/organizations` / `workspace.organizations.view`
- Companies: `/workspace/companies` / `workspace.companies.view`
- Departments: `/workspace/departments` / `workspace.departments.view`
- Teams: `/workspace/teams` / `workspace.teams.view`
- Brands: `/workspace/brands` / `workspace.brands.view`
- Clients: `/workspace/clients` / `workspace.clients.view`
- Projects: `/workspace/projects` / `workspace.projects.view`
- Campaigns: `/workspace/campaigns` / `workspace.campaigns.view`
- Social Accounts: `/workspace/social-accounts` / `workspace.social-accounts.view`
- Workspace Settings: `/workspace/workspace-settings` / `workspace.workspace-settings.view`

## Brand Manager

- Key: `brand-manager`
- Route: `/brand-manager`
- Permission: `brand-manager.view`

- Brand Profile: `/brand-manager/brand-profile` / `brand-manager.brand-profile.view`
- Audience Profile: `/brand-manager/audience-profile` / `brand-manager.audience-profile.view`
- Brand Voice: `/brand-manager/brand-voice` / `brand-manager.brand-voice.view`
- Content Pillars: `/brand-manager/content-pillars` / `brand-manager.content-pillars.view`
- Products & Services: `/brand-manager/products-and-services` / `brand-manager.products-and-services.view`
- Case Studies: `/brand-manager/case-studies` / `brand-manager.case-studies.view`
- Keywords: `/brand-manager/keywords` / `brand-manager.keywords.view`
- Competitors: `/brand-manager/competitors` / `brand-manager.competitors.view`
- Brand Goals: `/brand-manager/brand-goals` / `brand-manager.brand-goals.view`
- Messaging Guidelines: `/brand-manager/messaging-guidelines` / `brand-manager.messaging-guidelines.view`
- Brand Assets: `/brand-manager/brand-assets` / `brand-manager.brand-assets.view`

## Content Platform

- Key: `content-platform`
- Route: `/content-platform`
- Permission: `content-platform.view`

- Content Ideas: `/content-platform/content-ideas` / `content-platform.content-ideas.view`
- Monthly Planner: `/content-platform/monthly-planner` / `content-platform.monthly-planner.view`
- Weekly Planner: `/content-platform/weekly-planner` / `content-platform.weekly-planner.view`
- Daily Planner: `/content-platform/daily-planner` / `content-platform.daily-planner.view`
- Content Calendar: `/content-platform/content-calendar` / `content-platform.content-calendar.view`
- Content Generator: `/content-platform/content-generator` / `content-platform.content-generator.view`
- Content Editor: `/content-platform/content-editor` / `content-platform.content-editor.view`
- AI Reviewer: `/content-platform/ai-reviewer` / `content-platform.ai-reviewer.view`
- Social Preview: `/content-platform/social-preview` / `content-platform.social-preview.view`
- Scheduled Posts: `/content-platform/scheduled-posts` / `content-platform.scheduled-posts.view`
- Publishing Queue: `/content-platform/publishing-queue` / `content-platform.publishing-queue.view`
- Content Library: `/content-platform/content-library` / `content-platform.content-library.view`
- Templates: `/content-platform/templates` / `content-platform.templates.view`
- Carousel Builder: `/content-platform/carousel-builder` / `content-platform.carousel-builder.view`
- Video Script Writer: `/content-platform/video-script-writer` / `content-platform.video-script-writer.view`
- Blog Writer: `/content-platform/blog-writer` / `content-platform.blog-writer.view`
- Newsletter Writer: `/content-platform/newsletter-writer` / `content-platform.newsletter-writer.view`
- Repurpose Content: `/content-platform/repurpose-content` / `content-platform.repurpose-content.view`
- Content Archive: `/content-platform/content-archive` / `content-platform.content-archive.view`

## Creative Studio

- Key: `creative-studio`
- Route: `/creative-studio`
- Permission: `creative-studio.view`

- Dashboard: `/creative-studio/dashboard` / `creative-studio.dashboard.view`
- Creative Projects: `/creative-studio/creative-projects` / `creative-studio.creative-projects.view`
- Creative Workspace: `/creative-studio/creative-workspace` / `creative-studio.creative-workspace.view`
- Image Studio: `/creative-studio/image-studio` / `creative-studio.image-studio.view`
- Video Studio: `/creative-studio/video-studio` / `creative-studio.video-studio.view`
  - Dashboard: `/creative-studio/video-studio/dashboard` / `creative-studio.video-studio.dashboard.view`
  - Research: `/creative-studio/video-studio/research` / `creative-studio.video-studio.research.view`
  - Ideas: `/creative-studio/video-studio/ideas` / `creative-studio.video-studio.ideas.view`
  - Strategy: `/creative-studio/video-studio/strategy` / `creative-studio.video-studio.strategy.view`
  - Script Writer: `/creative-studio/video-studio/script-writer` / `creative-studio.video-studio.script-writer.view`
  - Script Reviewer: `/creative-studio/video-studio/script-reviewer` / `creative-studio.video-studio.script-reviewer.view`
  - Storyboard Builder: `/creative-studio/video-studio/storyboard-builder` / `creative-studio.video-studio.storyboard-builder.view`
  - Scene Planner: `/creative-studio/video-studio/scene-planner` / `creative-studio.video-studio.scene-planner.view`
  - Shot Planner: `/creative-studio/video-studio/shot-planner` / `creative-studio.video-studio.shot-planner.view`
  - Timeline: `/creative-studio/video-studio/timeline` / `creative-studio.video-studio.timeline.view`
  - Visual Planner: `/creative-studio/video-studio/visual-planner` / `creative-studio.video-studio.visual-planner.view`
  - Image Generation: `/creative-studio/video-studio/image-generation` / `creative-studio.video-studio.image-generation.view`
  - Video Generation: `/creative-studio/video-studio/video-generation` / `creative-studio.video-studio.video-generation.view`
  - Voice Generation: `/creative-studio/video-studio/voice-generation` / `creative-studio.video-studio.voice-generation.view`
  - Narration: `/creative-studio/video-studio/narration` / `creative-studio.video-studio.narration.view`
  - Music: `/creative-studio/video-studio/music` / `creative-studio.video-studio.music.view`
  - Animation: `/creative-studio/video-studio/animation` / `creative-studio.video-studio.animation.view`
  - Editing: `/creative-studio/video-studio/editing` / `creative-studio.video-studio.editing.view`
  - Subtitle Generator: `/creative-studio/video-studio/subtitle-generator` / `creative-studio.video-studio.subtitle-generator.view`
  - Caption Generator: `/creative-studio/video-studio/caption-generator` / `creative-studio.video-studio.caption-generator.view`
  - Thumbnail Studio: `/creative-studio/video-studio/thumbnail-studio` / `creative-studio.video-studio.thumbnail-studio.view`
  - Publishing: `/creative-studio/video-studio/publishing` / `creative-studio.video-studio.publishing.view`
  - Analytics: `/creative-studio/video-studio/analytics` / `creative-studio.video-studio.analytics.view`
  - Version History: `/creative-studio/video-studio/version-history` / `creative-studio.video-studio.version-history.view`
  - Templates: `/creative-studio/video-studio/templates` / `creative-studio.video-studio.templates.view`
  - Archive: `/creative-studio/video-studio/archive` / `creative-studio.video-studio.archive.view`
  - Asset Library: `/creative-studio/video-studio/asset-library` / `creative-studio.video-studio.asset-library.view`
- Audio Studio: `/creative-studio/audio-studio` / `creative-studio.audio-studio.view`
- Podcast Studio: `/creative-studio/podcast-studio` / `creative-studio.podcast-studio.view`
- Presentation Studio: `/creative-studio/presentation-studio` / `creative-studio.presentation-studio.view`
- Document Studio: `/creative-studio/document-studio` / `creative-studio.document-studio.view`
- Design Studio: `/creative-studio/design-studio` / `creative-studio.design-studio.view`
- Creative Templates: `/creative-studio/creative-templates` / `creative-studio.creative-templates.view`
- Brand Asset Library: `/creative-studio/brand-asset-library` / `creative-studio.brand-asset-library.view`
- Publishing Center: `/creative-studio/publishing-center` / `creative-studio.publishing-center.view`
- Creative Analytics: `/creative-studio/creative-analytics` / `creative-studio.creative-analytics.view`
- Learning Center: `/creative-studio/learning-center` / `creative-studio.learning-center.view`
- Creative Settings: `/creative-studio/creative-settings` / `creative-studio.creative-settings.view`

## Research Center

- Key: `research-center`
- Route: `/research-center`
- Permission: `research-center.view`

- Topic Research: `/research-center/topic-research` / `research-center.topic-research.view`
- Trend Discovery: `/research-center/trend-discovery` / `research-center.trend-discovery.view`
- Competitor Research: `/research-center/competitor-research` / `research-center.competitor-research.view`
- Industry Insights: `/research-center/industry-insights` / `research-center.industry-insights.view`
- Keyword Research: `/research-center/keyword-research` / `research-center.keyword-research.view`
- News Monitor: `/research-center/news-monitor` / `research-center.news-monitor.view`
- Audience Research: `/research-center/audience-research` / `research-center.audience-research.view`
- Hashtag Research: `/research-center/hashtag-research` / `research-center.hashtag-research.view`
- Market Research: `/research-center/market-research` / `research-center.market-research.view`
- Research Library: `/research-center/research-library` / `research-center.research-library.view`
- Saved Insights: `/research-center/saved-insights` / `research-center.saved-insights.view`

## Campaign Manager

- Key: `campaign-manager`
- Route: `/campaign-manager`
- Permission: `campaign-manager.view`

- Campaigns: `/campaign-manager/campaigns` / `campaign-manager.campaigns.view`
- Campaign Goals: `/campaign-manager/campaign-goals` / `campaign-manager.campaign-goals.view`
- Campaign Strategy: `/campaign-manager/campaign-strategy` / `campaign-manager.campaign-strategy.view`
- Campaign Calendar: `/campaign-manager/campaign-calendar` / `campaign-manager.campaign-calendar.view`
- Campaign Assets: `/campaign-manager/campaign-assets` / `campaign-manager.campaign-assets.view`
- Campaign Tasks: `/campaign-manager/campaign-tasks` / `campaign-manager.campaign-tasks.view`
- Campaign Content: `/campaign-manager/campaign-content` / `campaign-manager.campaign-content.view`
- Campaign Approvals: `/campaign-manager/campaign-approvals` / `campaign-manager.campaign-approvals.view`
- Campaign Performance: `/campaign-manager/campaign-performance` / `campaign-manager.campaign-performance.view`
- Campaign Reports: `/campaign-manager/campaign-reports` / `campaign-manager.campaign-reports.view`

## Approval Center

- Key: `approval-center`
- Route: `/approval-center`
- Permission: `approval-center.view`

- Drafts: `/approval-center/drafts` / `approval-center.drafts.view`
- AI Review Queue: `/approval-center/ai-review-queue` / `approval-center.ai-review-queue.view`
- Pending Approval: `/approval-center/pending-approval` / `approval-center.pending-approval.view`
- Revision Requests: `/approval-center/revision-requests` / `approval-center.revision-requests.view`
- Approved Content: `/approval-center/approved-content` / `approval-center.approved-content.view`
- Rejected Content: `/approval-center/rejected-content` / `approval-center.rejected-content.view`
- Approval Workflow: `/approval-center/approval-workflow` / `approval-center.approval-workflow.view`
- Review Comments: `/approval-center/review-comments` / `approval-center.review-comments.view`
- Version History: `/approval-center/version-history` / `approval-center.version-history.view`
- Approval Audit Trail: `/approval-center/approval-audit-trail` / `approval-center.approval-audit-trail.view`

## Social Publishing

- Key: `social-publishing`
- Route: `/social-publishing`
- Permission: `social-publishing.view`

- Connected Accounts: `/social-publishing/connected-accounts` / `social-publishing.connected-accounts.view`
- LinkedIn: `/social-publishing/linkedin` / `social-publishing.linkedin.view`
- Facebook: `/social-publishing/facebook` / `social-publishing.facebook.view`
- Instagram: `/social-publishing/instagram` / `social-publishing.instagram.view`
- X / Twitter: `/social-publishing/x-twitter` / `social-publishing.x-twitter.view`
- YouTube: `/social-publishing/youtube` / `social-publishing.youtube.view`
- TikTok: `/social-publishing/tiktok` / `social-publishing.tiktok.view`
- Threads: `/social-publishing/threads` / `social-publishing.threads.view`
- Blog / Website: `/social-publishing/blog-website` / `social-publishing.blog-website.view`
- Email Newsletter: `/social-publishing/email-newsletter` / `social-publishing.email-newsletter.view`
- Publishing Queue: `/social-publishing/publishing-queue` / `social-publishing.publishing-queue.view`
- Scheduled Posts: `/social-publishing/scheduled-posts` / `social-publishing.scheduled-posts.view`
- Published Posts: `/social-publishing/published-posts` / `social-publishing.published-posts.view`
- Failed Posts: `/social-publishing/failed-posts` / `social-publishing.failed-posts.view`
- Reconnect Accounts: `/social-publishing/reconnect-accounts` / `social-publishing.reconnect-accounts.view`
- Publishing Logs: `/social-publishing/publishing-logs` / `social-publishing.publishing-logs.view`

## Demo Platforms

- Key: `demo-platforms`
- Route: `/demo-platforms`
- Permission: `demo-platforms.view`

- Demo LinkedIn: `/demo-platforms/demo-linkedin` / `demo-platforms.demo-linkedin.view`
- Demo Facebook: `/demo-platforms/demo-facebook` / `demo-platforms.demo-facebook.view`
- Demo Instagram: `/demo-platforms/demo-instagram` / `demo-platforms.demo-instagram.view`
- Demo X / Twitter: `/demo-platforms/demo-x-twitter` / `demo-platforms.demo-x-twitter.view`
- Demo YouTube: `/demo-platforms/demo-youtube` / `demo-platforms.demo-youtube.view`
- Demo Blog: `/demo-platforms/demo-blog` / `demo-platforms.demo-blog.view`
- Feed Preview: `/demo-platforms/feed-preview` / `demo-platforms.feed-preview.view`
- Desktop Preview: `/demo-platforms/desktop-preview` / `demo-platforms.desktop-preview.view`
- Mobile Preview: `/demo-platforms/mobile-preview` / `demo-platforms.mobile-preview.view`
- Engagement Simulator: `/demo-platforms/engagement-simulator` / `demo-platforms.engagement-simulator.view`
- Comment Simulator: `/demo-platforms/comment-simulator` / `demo-platforms.comment-simulator.view`
- Share Preview: `/demo-platforms/share-preview` / `demo-platforms.share-preview.view`

## Autonomous Agents

- Key: `autonomous-agents`
- Route: `/autonomous-agents`
- Permission: `autonomous-agents.view`

- Agent Dashboard: `/autonomous-agents/agent-dashboard` / `autonomous-agents.agent-dashboard.view`
- Executive Agent: `/autonomous-agents/executive-agent` / `autonomous-agents.executive-agent.view`
- Content Agent: `/autonomous-agents/content-agent` / `autonomous-agents.content-agent.view`
- Research Agent: `/autonomous-agents/research-agent` / `autonomous-agents.research-agent.view`
- Brand Agent: `/autonomous-agents/brand-agent` / `autonomous-agents.brand-agent.view`
- Social Media Agent: `/autonomous-agents/social-media-agent` / `autonomous-agents.social-media-agent.view`
- Editor Agent: `/autonomous-agents/editor-agent` / `autonomous-agents.editor-agent.view`
- Compliance Agent: `/autonomous-agents/compliance-agent` / `autonomous-agents.compliance-agent.view`
- Scheduler Agent: `/autonomous-agents/scheduler-agent` / `autonomous-agents.scheduler-agent.view`
- Analytics Agent: `/autonomous-agents/analytics-agent` / `autonomous-agents.analytics-agent.view`
- Engagement Agent: `/autonomous-agents/engagement-agent` / `autonomous-agents.engagement-agent.view`
- Sales Agent: `/autonomous-agents/sales-agent` / `autonomous-agents.sales-agent.view`
- Workflow Agent: `/autonomous-agents/workflow-agent` / `autonomous-agents.workflow-agent.view`
- Agent Marketplace: `/autonomous-agents/agent-marketplace` / `autonomous-agents.agent-marketplace.view`
- Agent Memory: `/autonomous-agents/agent-memory` / `autonomous-agents.agent-memory.view`
- Agent Permissions: `/autonomous-agents/agent-permissions` / `autonomous-agents.agent-permissions.view`
- Agent Activity Logs: `/autonomous-agents/agent-activity-logs` / `autonomous-agents.agent-activity-logs.view`
- Agent Performance: `/autonomous-agents/agent-performance` / `autonomous-agents.agent-performance.view`

## Autonomous Control

- Key: `autonomous-control`
- Route: `/autonomous-control`
- Permission: `autonomous-control.view`

- Autonomy Dashboard: `/autonomous-control/autonomy-dashboard` / `autonomous-control.autonomy-dashboard.view`
- Autonomy Level: `/autonomous-control/autonomy-level` / `autonomous-control.autonomy-level.view`
- Decision Rules: `/autonomous-control/decision-rules` / `autonomous-control.decision-rules.view`
- Risk Policies: `/autonomous-control/risk-policies` / `autonomous-control.risk-policies.view`
- Auto-Approval Rules: `/autonomous-control/auto-approval-rules` / `autonomous-control.auto-approval-rules.view`
- Publishing Guardrails: `/autonomous-control/publishing-guardrails` / `autonomous-control.publishing-guardrails.view`
- Exception Queue: `/autonomous-control/exception-queue` / `autonomous-control.exception-queue.view`
- Failsafe Controls: `/autonomous-control/failsafe-controls` / `autonomous-control.failsafe-controls.view`
- Human Override: `/autonomous-control/human-override` / `autonomous-control.human-override.view`
- Execution Logs: `/autonomous-control/execution-logs` / `autonomous-control.execution-logs.view`
- Learning Settings: `/autonomous-control/learning-settings` / `autonomous-control.learning-settings.view`

## Knowledge Base

- Key: `knowledge-base`
- Route: `/knowledge-base`
- Permission: `knowledge-base.view`

- Business Profile: `/knowledge-base/business-profile` / `knowledge-base.business-profile.view`
- Documents: `/knowledge-base/documents` / `knowledge-base.documents.view`
- Uploaded Files: `/knowledge-base/uploaded-files` / `knowledge-base.uploaded-files.view`
- Prompt Library: `/knowledge-base/prompt-library` / `knowledge-base.prompt-library.view`
- Memory Center: `/knowledge-base/memory-center` / `knowledge-base.memory-center.view`
- Content History: `/knowledge-base/content-history` / `knowledge-base.content-history.view`
- Case Studies: `/knowledge-base/case-studies` / `knowledge-base.case-studies.view`
- Products & Services: `/knowledge-base/products-and-services` / `knowledge-base.products-and-services.view`
- Approved Phrases: `/knowledge-base/approved-phrases` / `knowledge-base.approved-phrases.view`
- Restricted Phrases: `/knowledge-base/restricted-phrases` / `knowledge-base.restricted-phrases.view`
- Saved Insights: `/knowledge-base/saved-insights` / `knowledge-base.saved-insights.view`
- Knowledge Search: `/knowledge-base/knowledge-search` / `knowledge-base.knowledge-search.view`
- Knowledge Tags: `/knowledge-base/knowledge-tags` / `knowledge-base.knowledge-tags.view`
- Knowledge Settings: `/knowledge-base/knowledge-settings` / `knowledge-base.knowledge-settings.view`

## Workflow Engine

- Key: `workflow-engine`
- Route: `/workflow-engine`
- Permission: `workflow-engine.view`

- Workflow Dashboard: `/workflow-engine/workflow-dashboard` / `workflow-engine.workflow-dashboard.view`
- Workflow Builder: `/workflow-engine/workflow-builder` / `workflow-engine.workflow-builder.view`
- Approval Workflows: `/workflow-engine/approval-workflows` / `workflow-engine.approval-workflows.view`
- Automation Rules: `/workflow-engine/automation-rules` / `workflow-engine.automation-rules.view`
- Review Queue: `/workflow-engine/review-queue` / `workflow-engine.review-queue.view`
- Task Assignment: `/workflow-engine/task-assignment` / `workflow-engine.task-assignment.view`
- Scheduled Tasks: `/workflow-engine/scheduled-tasks` / `workflow-engine.scheduled-tasks.view`
- Notifications: `/workflow-engine/notifications` / `workflow-engine.notifications.view`
- Escalations: `/workflow-engine/escalations` / `workflow-engine.escalations.view`
- Execution History: `/workflow-engine/execution-history` / `workflow-engine.execution-history.view`
- Version Control: `/workflow-engine/version-control` / `workflow-engine.version-control.view`
- Audit Trail: `/workflow-engine/audit-trail` / `workflow-engine.audit-trail.view`
- Workflow Templates: `/workflow-engine/workflow-templates` / `workflow-engine.workflow-templates.view`

## Analytics Center

- Key: `analytics-center`
- Route: `/analytics-center`
- Permission: `analytics-center.view`

- Analytics Dashboard: `/analytics-center/analytics-dashboard` / `analytics-center.analytics-dashboard.view`
- Content Analytics: `/analytics-center/content-analytics` / `analytics-center.content-analytics.view`
- Social Analytics: `/analytics-center/social-analytics` / `analytics-center.social-analytics.view`
- Platform Analytics: `/analytics-center/platform-analytics` / `analytics-center.platform-analytics.view`
- Audience Growth: `/analytics-center/audience-growth` / `analytics-center.audience-growth.view`
- Engagement Reports: `/analytics-center/engagement-reports` / `analytics-center.engagement-reports.view`
- Campaign Performance: `/analytics-center/campaign-performance` / `analytics-center.campaign-performance.view`
- Lead Analytics: `/analytics-center/lead-analytics` / `analytics-center.lead-analytics.view`
- Best Performing Topics: `/analytics-center/best-performing-topics` / `analytics-center.best-performing-topics.view`
- Best Performing Formats: `/analytics-center/best-performing-formats` / `analytics-center.best-performing-formats.view`
- Best Posting Times: `/analytics-center/best-posting-times` / `analytics-center.best-posting-times.view`
- AI Recommendations: `/analytics-center/ai-recommendations` / `analytics-center.ai-recommendations.view`
- Reports: `/analytics-center/reports` / `analytics-center.reports.view`
- Export Center: `/analytics-center/export-center` / `analytics-center.export-center.view`

## Integration Hub

- Key: `integration-hub`
- Route: `/integration-hub`
- Permission: `integration-hub.view`

- Integration Dashboard: `/integration-hub/integration-dashboard` / `integration-hub.integration-dashboard.view`
- Social Integrations: `/integration-hub/social-integrations` / `integration-hub.social-integrations.view`
- LinkedIn: `/integration-hub/linkedin` / `integration-hub.linkedin.view`
- Facebook: `/integration-hub/facebook` / `integration-hub.facebook.view`
- Instagram: `/integration-hub/instagram` / `integration-hub.instagram.view`
- X / Twitter: `/integration-hub/x-twitter` / `integration-hub.x-twitter.view`
- YouTube: `/integration-hub/youtube` / `integration-hub.youtube.view`
- TikTok: `/integration-hub/tiktok` / `integration-hub.tiktok.view`
- Threads: `/integration-hub/threads` / `integration-hub.threads.view`
- Email Integrations: `/integration-hub/email-integrations` / `integration-hub.email-integrations.view`
- Gmail: `/integration-hub/gmail` / `integration-hub.gmail.view`
- Outlook: `/integration-hub/outlook` / `integration-hub.outlook.view`
- Calendar Integrations: `/integration-hub/calendar-integrations` / `integration-hub.calendar-integrations.view`
- Google Calendar: `/integration-hub/google-calendar` / `integration-hub.google-calendar.view`
- Microsoft Calendar: `/integration-hub/microsoft-calendar` / `integration-hub.microsoft-calendar.view`
- Cloud Storage: `/integration-hub/cloud-storage` / `integration-hub.cloud-storage.view`
- Google Drive: `/integration-hub/google-drive` / `integration-hub.google-drive.view`
- OneDrive: `/integration-hub/onedrive` / `integration-hub.onedrive.view`
- Dropbox: `/integration-hub/dropbox` / `integration-hub.dropbox.view`
- Communication: `/integration-hub/communication` / `integration-hub.communication.view`
- Slack: `/integration-hub/slack` / `integration-hub.slack.view`
- Microsoft Teams: `/integration-hub/microsoft-teams` / `integration-hub.microsoft-teams.view`
- WhatsApp Business: `/integration-hub/whatsapp-business` / `integration-hub.whatsapp-business.view`
- Business Systems: `/integration-hub/business-systems` / `integration-hub.business-systems.view`
- CRM: `/integration-hub/crm` / `integration-hub.crm.view`
- ERP: `/integration-hub/erp` / `integration-hub.erp.view`
- CMS / Website: `/integration-hub/cms-website` / `integration-hub.cms-website.view`
- Payment Integrations: `/integration-hub/payment-integrations` / `integration-hub.payment-integrations.view`
- Paystack: `/integration-hub/paystack` / `integration-hub.paystack.view`
- Flutterwave: `/integration-hub/flutterwave` / `integration-hub.flutterwave.view`
- Stripe: `/integration-hub/stripe` / `integration-hub.stripe.view`
- SMS Gateway: `/integration-hub/sms-gateway` / `integration-hub.sms-gateway.view`
- API Keys: `/integration-hub/api-keys` / `integration-hub.api-keys.view`
- Webhooks: `/integration-hub/webhooks` / `integration-hub.webhooks.view`
- OAuth Connections: `/integration-hub/oauth-connections` / `integration-hub.oauth-connections.view`
- Integration Logs: `/integration-hub/integration-logs` / `integration-hub.integration-logs.view`

## Notification Center

- Key: `notification-center`
- Route: `/notification-center`
- Permission: `notification-center.view`

- All Notifications: `/notification-center/all-notifications` / `notification-center.all-notifications.view`
- Task Notifications: `/notification-center/task-notifications` / `notification-center.task-notifications.view`
- Approval Notifications: `/notification-center/approval-notifications` / `notification-center.approval-notifications.view`
- Publishing Alerts: `/notification-center/publishing-alerts` / `notification-center.publishing-alerts.view`
- Integration Alerts: `/notification-center/integration-alerts` / `notification-center.integration-alerts.view`
- Agent Alerts: `/notification-center/agent-alerts` / `notification-center.agent-alerts.view`
- System Alerts: `/notification-center/system-alerts` / `notification-center.system-alerts.view`
- Notification Settings: `/notification-center/notification-settings` / `notification-center.notification-settings.view`

## User Administration

- Key: `user-administration`
- Route: `/user-administration`
- Permission: `user-administration.view`

- Users: `/user-administration/users` / `user-administration.users.view`
- User Profiles: `/user-administration/user-profiles` / `user-administration.user-profiles.view`
- Teams: `/user-administration/teams` / `user-administration.teams.view`
- Organizations: `/user-administration/organizations` / `user-administration.organizations.view`
- Workspaces: `/user-administration/workspaces` / `user-administration.workspaces.view`
- Roles: `/user-administration/roles` / `user-administration.roles.view`
- Permissions: `/user-administration/permissions` / `user-administration.permissions.view`
- Access Control: `/user-administration/access-control` / `user-administration.access-control.view`
- Subscription Plans: `/user-administration/subscription-plans` / `user-administration.subscription-plans.view`
- Billing: `/user-administration/billing` / `user-administration.billing.view`
- Invoices: `/user-administration/invoices` / `user-administration.invoices.view`
- Usage Limits: `/user-administration/usage-limits` / `user-administration.usage-limits.view`
- Audit Logs: `/user-administration/audit-logs` / `user-administration.audit-logs.view`
- Activity Logs: `/user-administration/activity-logs` / `user-administration.activity-logs.view`

## Security & Compliance

- Key: `security-compliance`
- Route: `/security-compliance`
- Permission: `security-compliance.view`

- Login Security: `/security-compliance/login-security` / `security-compliance.login-security.view`
- Multi-Factor Authentication: `/security-compliance/multi-factor-authentication` / `security-compliance.multi-factor-authentication.view`
- OAuth Tokens: `/security-compliance/oauth-tokens` / `security-compliance.oauth-tokens.view`
- API Security: `/security-compliance/api-security` / `security-compliance.api-security.view`
- Data Privacy: `/security-compliance/data-privacy` / `security-compliance.data-privacy.view`
- Content Moderation: `/security-compliance/content-moderation` / `security-compliance.content-moderation.view`
- Compliance Rules: `/security-compliance/compliance-rules` / `security-compliance.compliance-rules.view`
- Tenant Isolation: `/security-compliance/tenant-isolation` / `security-compliance.tenant-isolation.view`
- Backup & Recovery: `/security-compliance/backup-and-recovery` / `security-compliance.backup-and-recovery.view`
- Access Logs: `/security-compliance/access-logs` / `security-compliance.access-logs.view`
- Security Audit Trail: `/security-compliance/security-audit-trail` / `security-compliance.security-audit-trail.view`
- Risk Alerts: `/security-compliance/risk-alerts` / `security-compliance.risk-alerts.view`

## Settings

- Key: `settings`
- Route: `/settings`
- Permission: `settings.view`

- General Settings: `/settings/general-settings` / `settings.general-settings.view`
- Workspace Settings: `/settings/workspace-settings` / `settings.workspace-settings.view`
- Brand Settings: `/settings/brand-settings` / `settings.brand-settings.view`
- AI Settings: `/settings/ai-settings` / `settings.ai-settings.view`
- Agent Settings: `/settings/agent-settings` / `settings.agent-settings.view`
- Publishing Settings: `/settings/publishing-settings` / `settings.publishing-settings.view`
- Notification Settings: `/settings/notification-settings` / `settings.notification-settings.view`
- Appearance: `/settings/appearance` / `settings.appearance.view`
- Language: `/settings/language` / `settings.language.view`
- Time Zone: `/settings/time-zone` / `settings.time-zone.view`
- Backup Settings: `/settings/backup-settings` / `settings.backup-settings.view`
- System Preferences: `/settings/system-preferences` / `settings.system-preferences.view`
