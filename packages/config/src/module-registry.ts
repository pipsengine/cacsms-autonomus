export type ModuleRegistryItem = {
  key: string;
  label: string;
  route: string;
  permission: string;
  children?: readonly ModuleRegistryItem[];
};

export const MODULE_REGISTRY = [
  {
    "key": "dashboard",
    "label": "Dashboard",
    "route": "/dashboard",
    "permission": "dashboard.view",
    "children": [
      {
        "key": "overview",
        "label": "Overview",
        "route": "/dashboard/overview",
        "permission": "dashboard.overview.view",
        "children": []
      },
      {
        "key": "activity-feed",
        "label": "Activity Feed",
        "route": "/dashboard/activity-feed",
        "permission": "dashboard.activity-feed.view",
        "children": []
      },
      {
        "key": "my-tasks",
        "label": "My Tasks",
        "route": "/dashboard/my-tasks",
        "permission": "dashboard.my-tasks.view",
        "children": []
      },
      {
        "key": "notifications",
        "label": "Notifications",
        "route": "/dashboard/notifications",
        "permission": "dashboard.notifications.view",
        "children": []
      },
      {
        "key": "recent-activities",
        "label": "Recent Activities",
        "route": "/dashboard/recent-activities",
        "permission": "dashboard.recent-activities.view",
        "children": []
      },
      {
        "key": "performance-snapshot",
        "label": "Performance Snapshot",
        "route": "/dashboard/performance-snapshot",
        "permission": "dashboard.performance-snapshot.view",
        "children": []
      },
      {
        "key": "autonomous-recommendations",
        "label": "Autonomous Recommendations",
        "route": "/dashboard/autonomous-recommendations",
        "permission": "dashboard.autonomous-recommendations.view",
        "children": []
      },
      {
        "key": "system-health",
        "label": "System Health",
        "route": "/dashboard/system-health",
        "permission": "dashboard.system-health.view",
        "children": []
      }
    ]
  },
  {
    "key": "workspace",
    "label": "Workspace",
    "route": "/workspace",
    "permission": "workspace.view",
    "children": [
      {
        "key": "my-workspace",
        "label": "My Workspace",
        "route": "/workspace/my-workspace",
        "permission": "workspace.my-workspace.view",
        "children": []
      },
      {
        "key": "organizations",
        "label": "Organizations",
        "route": "/workspace/organizations",
        "permission": "workspace.organizations.view",
        "children": []
      },
      {
        "key": "companies",
        "label": "Companies",
        "route": "/workspace/companies",
        "permission": "workspace.companies.view",
        "children": []
      },
      {
        "key": "departments",
        "label": "Departments",
        "route": "/workspace/departments",
        "permission": "workspace.departments.view",
        "children": []
      },
      {
        "key": "teams",
        "label": "Teams",
        "route": "/workspace/teams",
        "permission": "workspace.teams.view",
        "children": []
      },
      {
        "key": "brands",
        "label": "Brands",
        "route": "/workspace/brands",
        "permission": "workspace.brands.view",
        "children": []
      },
      {
        "key": "clients",
        "label": "Clients",
        "route": "/workspace/clients",
        "permission": "workspace.clients.view",
        "children": []
      },
      {
        "key": "projects",
        "label": "Projects",
        "route": "/workspace/projects",
        "permission": "workspace.projects.view",
        "children": []
      },
      {
        "key": "campaigns",
        "label": "Campaigns",
        "route": "/workspace/campaigns",
        "permission": "workspace.campaigns.view",
        "children": []
      },
      {
        "key": "social-accounts",
        "label": "Social Accounts",
        "route": "/workspace/social-accounts",
        "permission": "workspace.social-accounts.view",
        "children": []
      },
      {
        "key": "workspace-settings",
        "label": "Workspace Settings",
        "route": "/workspace/workspace-settings",
        "permission": "workspace.workspace-settings.view",
        "children": []
      }
    ]
  },
  {
    "key": "brand-manager",
    "label": "Brand Manager",
    "route": "/brand-manager",
    "permission": "brand-manager.view",
    "children": [
      {
        "key": "brand-profile",
        "label": "Brand Profile",
        "route": "/brand-manager/brand-profile",
        "permission": "brand-manager.brand-profile.view",
        "children": []
      },
      {
        "key": "audience-profile",
        "label": "Audience Profile",
        "route": "/brand-manager/audience-profile",
        "permission": "brand-manager.audience-profile.view",
        "children": []
      },
      {
        "key": "brand-voice",
        "label": "Brand Voice",
        "route": "/brand-manager/brand-voice",
        "permission": "brand-manager.brand-voice.view",
        "children": []
      },
      {
        "key": "content-pillars",
        "label": "Content Pillars",
        "route": "/brand-manager/content-pillars",
        "permission": "brand-manager.content-pillars.view",
        "children": []
      },
      {
        "key": "products-and-services",
        "label": "Products & Services",
        "route": "/brand-manager/products-and-services",
        "permission": "brand-manager.products-and-services.view",
        "children": []
      },
      {
        "key": "case-studies",
        "label": "Case Studies",
        "route": "/brand-manager/case-studies",
        "permission": "brand-manager.case-studies.view",
        "children": []
      },
      {
        "key": "keywords",
        "label": "Keywords",
        "route": "/brand-manager/keywords",
        "permission": "brand-manager.keywords.view",
        "children": []
      },
      {
        "key": "competitors",
        "label": "Competitors",
        "route": "/brand-manager/competitors",
        "permission": "brand-manager.competitors.view",
        "children": []
      },
      {
        "key": "brand-goals",
        "label": "Brand Goals",
        "route": "/brand-manager/brand-goals",
        "permission": "brand-manager.brand-goals.view",
        "children": []
      },
      {
        "key": "messaging-guidelines",
        "label": "Messaging Guidelines",
        "route": "/brand-manager/messaging-guidelines",
        "permission": "brand-manager.messaging-guidelines.view",
        "children": []
      },
      {
        "key": "brand-assets",
        "label": "Brand Assets",
        "route": "/brand-manager/brand-assets",
        "permission": "brand-manager.brand-assets.view",
        "children": []
      }
    ]
  },
  {
    "key": "content-platform",
    "label": "Content Platform",
    "route": "/content-platform",
    "permission": "content-platform.view",
    "children": [
      {
        "key": "content-ideas",
        "label": "Content Ideas",
        "route": "/content-platform/content-ideas",
        "permission": "content-platform.content-ideas.view",
        "children": []
      },
      {
        "key": "monthly-planner",
        "label": "Monthly Planner",
        "route": "/content-platform/monthly-planner",
        "permission": "content-platform.monthly-planner.view",
        "children": []
      },
      {
        "key": "weekly-planner",
        "label": "Weekly Planner",
        "route": "/content-platform/weekly-planner",
        "permission": "content-platform.weekly-planner.view",
        "children": []
      },
      {
        "key": "daily-planner",
        "label": "Daily Planner",
        "route": "/content-platform/daily-planner",
        "permission": "content-platform.daily-planner.view",
        "children": []
      },
      {
        "key": "content-calendar",
        "label": "Content Calendar",
        "route": "/content-platform/content-calendar",
        "permission": "content-platform.content-calendar.view",
        "children": []
      },
      {
        "key": "content-generator",
        "label": "Content Generator",
        "route": "/content-platform/content-generator",
        "permission": "content-platform.content-generator.view",
        "children": []
      },
      {
        "key": "content-editor",
        "label": "Content Editor",
        "route": "/content-platform/content-editor",
        "permission": "content-platform.content-editor.view",
        "children": []
      },
      {
        "key": "ai-reviewer",
        "label": "AI Reviewer",
        "route": "/content-platform/ai-reviewer",
        "permission": "content-platform.ai-reviewer.view",
        "children": []
      },
      {
        "key": "social-preview",
        "label": "Social Preview",
        "route": "/content-platform/social-preview",
        "permission": "content-platform.social-preview.view",
        "children": []
      },
      {
        "key": "scheduled-posts",
        "label": "Scheduled Posts",
        "route": "/content-platform/scheduled-posts",
        "permission": "content-platform.scheduled-posts.view",
        "children": []
      },
      {
        "key": "publishing-queue",
        "label": "Publishing Queue",
        "route": "/content-platform/publishing-queue",
        "permission": "content-platform.publishing-queue.view",
        "children": []
      },
      {
        "key": "content-library",
        "label": "Content Library",
        "route": "/content-platform/content-library",
        "permission": "content-platform.content-library.view",
        "children": []
      },
      {
        "key": "templates",
        "label": "Templates",
        "route": "/content-platform/templates",
        "permission": "content-platform.templates.view",
        "children": []
      },
      {
        "key": "carousel-builder",
        "label": "Carousel Builder",
        "route": "/content-platform/carousel-builder",
        "permission": "content-platform.carousel-builder.view",
        "children": []
      },
      {
        "key": "video-script-writer",
        "label": "Video Script Writer",
        "route": "/content-platform/video-script-writer",
        "permission": "content-platform.video-script-writer.view",
        "children": []
      },
      {
        "key": "blog-writer",
        "label": "Blog Writer",
        "route": "/content-platform/blog-writer",
        "permission": "content-platform.blog-writer.view",
        "children": []
      },
      {
        "key": "newsletter-writer",
        "label": "Newsletter Writer",
        "route": "/content-platform/newsletter-writer",
        "permission": "content-platform.newsletter-writer.view",
        "children": []
      },
      {
        "key": "repurpose-content",
        "label": "Repurpose Content",
        "route": "/content-platform/repurpose-content",
        "permission": "content-platform.repurpose-content.view",
        "children": []
      },
      {
        "key": "content-archive",
        "label": "Content Archive",
        "route": "/content-platform/content-archive",
        "permission": "content-platform.content-archive.view",
        "children": []
      }
    ]
  },
  {
    "key": "research-center",
    "label": "Research Center",
    "route": "/research-center",
    "permission": "research-center.view",
    "children": [
      {
        "key": "topic-research",
        "label": "Topic Research",
        "route": "/research-center/topic-research",
        "permission": "research-center.topic-research.view",
        "children": []
      },
      {
        "key": "trend-discovery",
        "label": "Trend Discovery",
        "route": "/research-center/trend-discovery",
        "permission": "research-center.trend-discovery.view",
        "children": []
      },
      {
        "key": "competitor-research",
        "label": "Competitor Research",
        "route": "/research-center/competitor-research",
        "permission": "research-center.competitor-research.view",
        "children": []
      },
      {
        "key": "industry-insights",
        "label": "Industry Insights",
        "route": "/research-center/industry-insights",
        "permission": "research-center.industry-insights.view",
        "children": []
      },
      {
        "key": "keyword-research",
        "label": "Keyword Research",
        "route": "/research-center/keyword-research",
        "permission": "research-center.keyword-research.view",
        "children": []
      },
      {
        "key": "news-monitor",
        "label": "News Monitor",
        "route": "/research-center/news-monitor",
        "permission": "research-center.news-monitor.view",
        "children": []
      },
      {
        "key": "audience-research",
        "label": "Audience Research",
        "route": "/research-center/audience-research",
        "permission": "research-center.audience-research.view",
        "children": []
      },
      {
        "key": "hashtag-research",
        "label": "Hashtag Research",
        "route": "/research-center/hashtag-research",
        "permission": "research-center.hashtag-research.view",
        "children": []
      },
      {
        "key": "market-research",
        "label": "Market Research",
        "route": "/research-center/market-research",
        "permission": "research-center.market-research.view",
        "children": []
      },
      {
        "key": "research-library",
        "label": "Research Library",
        "route": "/research-center/research-library",
        "permission": "research-center.research-library.view",
        "children": []
      },
      {
        "key": "saved-insights",
        "label": "Saved Insights",
        "route": "/research-center/saved-insights",
        "permission": "research-center.saved-insights.view",
        "children": []
      }
    ]
  },
  {
    "key": "campaign-manager",
    "label": "Campaign Manager",
    "route": "/campaign-manager",
    "permission": "campaign-manager.view",
    "children": [
      {
        "key": "campaigns",
        "label": "Campaigns",
        "route": "/campaign-manager/campaigns",
        "permission": "campaign-manager.campaigns.view",
        "children": []
      },
      {
        "key": "campaign-goals",
        "label": "Campaign Goals",
        "route": "/campaign-manager/campaign-goals",
        "permission": "campaign-manager.campaign-goals.view",
        "children": []
      },
      {
        "key": "campaign-strategy",
        "label": "Campaign Strategy",
        "route": "/campaign-manager/campaign-strategy",
        "permission": "campaign-manager.campaign-strategy.view",
        "children": []
      },
      {
        "key": "campaign-calendar",
        "label": "Campaign Calendar",
        "route": "/campaign-manager/campaign-calendar",
        "permission": "campaign-manager.campaign-calendar.view",
        "children": []
      },
      {
        "key": "campaign-assets",
        "label": "Campaign Assets",
        "route": "/campaign-manager/campaign-assets",
        "permission": "campaign-manager.campaign-assets.view",
        "children": []
      },
      {
        "key": "campaign-tasks",
        "label": "Campaign Tasks",
        "route": "/campaign-manager/campaign-tasks",
        "permission": "campaign-manager.campaign-tasks.view",
        "children": []
      },
      {
        "key": "campaign-content",
        "label": "Campaign Content",
        "route": "/campaign-manager/campaign-content",
        "permission": "campaign-manager.campaign-content.view",
        "children": []
      },
      {
        "key": "campaign-approvals",
        "label": "Campaign Approvals",
        "route": "/campaign-manager/campaign-approvals",
        "permission": "campaign-manager.campaign-approvals.view",
        "children": []
      },
      {
        "key": "campaign-performance",
        "label": "Campaign Performance",
        "route": "/campaign-manager/campaign-performance",
        "permission": "campaign-manager.campaign-performance.view",
        "children": []
      },
      {
        "key": "campaign-reports",
        "label": "Campaign Reports",
        "route": "/campaign-manager/campaign-reports",
        "permission": "campaign-manager.campaign-reports.view",
        "children": []
      }
    ]
  },
  {
    "key": "approval-center",
    "label": "Approval Center",
    "route": "/approval-center",
    "permission": "approval-center.view",
    "children": [
      {
        "key": "drafts",
        "label": "Drafts",
        "route": "/approval-center/drafts",
        "permission": "approval-center.drafts.view",
        "children": []
      },
      {
        "key": "ai-review-queue",
        "label": "AI Review Queue",
        "route": "/approval-center/ai-review-queue",
        "permission": "approval-center.ai-review-queue.view",
        "children": []
      },
      {
        "key": "pending-approval",
        "label": "Pending Approval",
        "route": "/approval-center/pending-approval",
        "permission": "approval-center.pending-approval.view",
        "children": []
      },
      {
        "key": "revision-requests",
        "label": "Revision Requests",
        "route": "/approval-center/revision-requests",
        "permission": "approval-center.revision-requests.view",
        "children": []
      },
      {
        "key": "approved-content",
        "label": "Approved Content",
        "route": "/approval-center/approved-content",
        "permission": "approval-center.approved-content.view",
        "children": []
      },
      {
        "key": "rejected-content",
        "label": "Rejected Content",
        "route": "/approval-center/rejected-content",
        "permission": "approval-center.rejected-content.view",
        "children": []
      },
      {
        "key": "approval-workflow",
        "label": "Approval Workflow",
        "route": "/approval-center/approval-workflow",
        "permission": "approval-center.approval-workflow.view",
        "children": []
      },
      {
        "key": "review-comments",
        "label": "Review Comments",
        "route": "/approval-center/review-comments",
        "permission": "approval-center.review-comments.view",
        "children": []
      },
      {
        "key": "version-history",
        "label": "Version History",
        "route": "/approval-center/version-history",
        "permission": "approval-center.version-history.view",
        "children": []
      },
      {
        "key": "approval-audit-trail",
        "label": "Approval Audit Trail",
        "route": "/approval-center/approval-audit-trail",
        "permission": "approval-center.approval-audit-trail.view",
        "children": []
      }
    ]
  },
  {
    "key": "social-publishing",
    "label": "Social Publishing",
    "route": "/social-publishing",
    "permission": "social-publishing.view",
    "children": [
      {
        "key": "connected-accounts",
        "label": "Connected Accounts",
        "route": "/social-publishing/connected-accounts",
        "permission": "social-publishing.connected-accounts.view",
        "children": []
      },
      {
        "key": "linkedin",
        "label": "LinkedIn",
        "route": "/social-publishing/linkedin",
        "permission": "social-publishing.linkedin.view",
        "children": []
      },
      {
        "key": "facebook",
        "label": "Facebook",
        "route": "/social-publishing/facebook",
        "permission": "social-publishing.facebook.view",
        "children": []
      },
      {
        "key": "instagram",
        "label": "Instagram",
        "route": "/social-publishing/instagram",
        "permission": "social-publishing.instagram.view",
        "children": []
      },
      {
        "key": "x-twitter",
        "label": "X / Twitter",
        "route": "/social-publishing/x-twitter",
        "permission": "social-publishing.x-twitter.view",
        "children": []
      },
      {
        "key": "youtube",
        "label": "YouTube",
        "route": "/social-publishing/youtube",
        "permission": "social-publishing.youtube.view",
        "children": []
      },
      {
        "key": "tiktok",
        "label": "TikTok",
        "route": "/social-publishing/tiktok",
        "permission": "social-publishing.tiktok.view",
        "children": []
      },
      {
        "key": "threads",
        "label": "Threads",
        "route": "/social-publishing/threads",
        "permission": "social-publishing.threads.view",
        "children": []
      },
      {
        "key": "blog-website",
        "label": "Blog / Website",
        "route": "/social-publishing/blog-website",
        "permission": "social-publishing.blog-website.view",
        "children": []
      },
      {
        "key": "email-newsletter",
        "label": "Email Newsletter",
        "route": "/social-publishing/email-newsletter",
        "permission": "social-publishing.email-newsletter.view",
        "children": []
      },
      {
        "key": "publishing-queue",
        "label": "Publishing Queue",
        "route": "/social-publishing/publishing-queue",
        "permission": "social-publishing.publishing-queue.view",
        "children": []
      },
      {
        "key": "scheduled-posts",
        "label": "Scheduled Posts",
        "route": "/social-publishing/scheduled-posts",
        "permission": "social-publishing.scheduled-posts.view",
        "children": []
      },
      {
        "key": "published-posts",
        "label": "Published Posts",
        "route": "/social-publishing/published-posts",
        "permission": "social-publishing.published-posts.view",
        "children": []
      },
      {
        "key": "failed-posts",
        "label": "Failed Posts",
        "route": "/social-publishing/failed-posts",
        "permission": "social-publishing.failed-posts.view",
        "children": []
      },
      {
        "key": "reconnect-accounts",
        "label": "Reconnect Accounts",
        "route": "/social-publishing/reconnect-accounts",
        "permission": "social-publishing.reconnect-accounts.view",
        "children": []
      },
      {
        "key": "publishing-logs",
        "label": "Publishing Logs",
        "route": "/social-publishing/publishing-logs",
        "permission": "social-publishing.publishing-logs.view",
        "children": []
      }
    ]
  },
  {
    "key": "demo-platforms",
    "label": "Demo Platforms",
    "route": "/demo-platforms",
    "permission": "demo-platforms.view",
    "children": [
      {
        "key": "demo-linkedin",
        "label": "Demo LinkedIn",
        "route": "/demo-platforms/demo-linkedin",
        "permission": "demo-platforms.demo-linkedin.view",
        "children": []
      },
      {
        "key": "demo-facebook",
        "label": "Demo Facebook",
        "route": "/demo-platforms/demo-facebook",
        "permission": "demo-platforms.demo-facebook.view",
        "children": []
      },
      {
        "key": "demo-instagram",
        "label": "Demo Instagram",
        "route": "/demo-platforms/demo-instagram",
        "permission": "demo-platforms.demo-instagram.view",
        "children": []
      },
      {
        "key": "demo-x-twitter",
        "label": "Demo X / Twitter",
        "route": "/demo-platforms/demo-x-twitter",
        "permission": "demo-platforms.demo-x-twitter.view",
        "children": []
      },
      {
        "key": "demo-youtube",
        "label": "Demo YouTube",
        "route": "/demo-platforms/demo-youtube",
        "permission": "demo-platforms.demo-youtube.view",
        "children": []
      },
      {
        "key": "demo-blog",
        "label": "Demo Blog",
        "route": "/demo-platforms/demo-blog",
        "permission": "demo-platforms.demo-blog.view",
        "children": []
      },
      {
        "key": "feed-preview",
        "label": "Feed Preview",
        "route": "/demo-platforms/feed-preview",
        "permission": "demo-platforms.feed-preview.view",
        "children": []
      },
      {
        "key": "desktop-preview",
        "label": "Desktop Preview",
        "route": "/demo-platforms/desktop-preview",
        "permission": "demo-platforms.desktop-preview.view",
        "children": []
      },
      {
        "key": "mobile-preview",
        "label": "Mobile Preview",
        "route": "/demo-platforms/mobile-preview",
        "permission": "demo-platforms.mobile-preview.view",
        "children": []
      },
      {
        "key": "engagement-simulator",
        "label": "Engagement Simulator",
        "route": "/demo-platforms/engagement-simulator",
        "permission": "demo-platforms.engagement-simulator.view",
        "children": []
      },
      {
        "key": "comment-simulator",
        "label": "Comment Simulator",
        "route": "/demo-platforms/comment-simulator",
        "permission": "demo-platforms.comment-simulator.view",
        "children": []
      },
      {
        "key": "share-preview",
        "label": "Share Preview",
        "route": "/demo-platforms/share-preview",
        "permission": "demo-platforms.share-preview.view",
        "children": []
      }
    ]
  },
  {
    "key": "autonomous-agents",
    "label": "Autonomous Agents",
    "route": "/autonomous-agents",
    "permission": "autonomous-agents.view",
    "children": [
      {
        "key": "agent-dashboard",
        "label": "Agent Dashboard",
        "route": "/autonomous-agents/agent-dashboard",
        "permission": "autonomous-agents.agent-dashboard.view",
        "children": []
      },
      {
        "key": "executive-agent",
        "label": "Executive Agent",
        "route": "/autonomous-agents/executive-agent",
        "permission": "autonomous-agents.executive-agent.view",
        "children": []
      },
      {
        "key": "content-agent",
        "label": "Content Agent",
        "route": "/autonomous-agents/content-agent",
        "permission": "autonomous-agents.content-agent.view",
        "children": []
      },
      {
        "key": "research-agent",
        "label": "Research Agent",
        "route": "/autonomous-agents/research-agent",
        "permission": "autonomous-agents.research-agent.view",
        "children": []
      },
      {
        "key": "brand-agent",
        "label": "Brand Agent",
        "route": "/autonomous-agents/brand-agent",
        "permission": "autonomous-agents.brand-agent.view",
        "children": []
      },
      {
        "key": "social-media-agent",
        "label": "Social Media Agent",
        "route": "/autonomous-agents/social-media-agent",
        "permission": "autonomous-agents.social-media-agent.view",
        "children": []
      },
      {
        "key": "editor-agent",
        "label": "Editor Agent",
        "route": "/autonomous-agents/editor-agent",
        "permission": "autonomous-agents.editor-agent.view",
        "children": []
      },
      {
        "key": "compliance-agent",
        "label": "Compliance Agent",
        "route": "/autonomous-agents/compliance-agent",
        "permission": "autonomous-agents.compliance-agent.view",
        "children": []
      },
      {
        "key": "scheduler-agent",
        "label": "Scheduler Agent",
        "route": "/autonomous-agents/scheduler-agent",
        "permission": "autonomous-agents.scheduler-agent.view",
        "children": []
      },
      {
        "key": "analytics-agent",
        "label": "Analytics Agent",
        "route": "/autonomous-agents/analytics-agent",
        "permission": "autonomous-agents.analytics-agent.view",
        "children": []
      },
      {
        "key": "engagement-agent",
        "label": "Engagement Agent",
        "route": "/autonomous-agents/engagement-agent",
        "permission": "autonomous-agents.engagement-agent.view",
        "children": []
      },
      {
        "key": "sales-agent",
        "label": "Sales Agent",
        "route": "/autonomous-agents/sales-agent",
        "permission": "autonomous-agents.sales-agent.view",
        "children": []
      },
      {
        "key": "workflow-agent",
        "label": "Workflow Agent",
        "route": "/autonomous-agents/workflow-agent",
        "permission": "autonomous-agents.workflow-agent.view",
        "children": []
      },
      {
        "key": "agent-marketplace",
        "label": "Agent Marketplace",
        "route": "/autonomous-agents/agent-marketplace",
        "permission": "autonomous-agents.agent-marketplace.view",
        "children": []
      },
      {
        "key": "agent-memory",
        "label": "Agent Memory",
        "route": "/autonomous-agents/agent-memory",
        "permission": "autonomous-agents.agent-memory.view",
        "children": []
      },
      {
        "key": "agent-permissions",
        "label": "Agent Permissions",
        "route": "/autonomous-agents/agent-permissions",
        "permission": "autonomous-agents.agent-permissions.view",
        "children": []
      },
      {
        "key": "agent-activity-logs",
        "label": "Agent Activity Logs",
        "route": "/autonomous-agents/agent-activity-logs",
        "permission": "autonomous-agents.agent-activity-logs.view",
        "children": []
      },
      {
        "key": "agent-performance",
        "label": "Agent Performance",
        "route": "/autonomous-agents/agent-performance",
        "permission": "autonomous-agents.agent-performance.view",
        "children": []
      }
    ]
  },
  {
    "key": "knowledge-base",
    "label": "Knowledge Base",
    "route": "/knowledge-base",
    "permission": "knowledge-base.view",
    "children": [
      {
        "key": "business-profile",
        "label": "Business Profile",
        "route": "/knowledge-base/business-profile",
        "permission": "knowledge-base.business-profile.view",
        "children": []
      },
      {
        "key": "documents",
        "label": "Documents",
        "route": "/knowledge-base/documents",
        "permission": "knowledge-base.documents.view",
        "children": []
      },
      {
        "key": "uploaded-files",
        "label": "Uploaded Files",
        "route": "/knowledge-base/uploaded-files",
        "permission": "knowledge-base.uploaded-files.view",
        "children": []
      },
      {
        "key": "prompt-library",
        "label": "Prompt Library",
        "route": "/knowledge-base/prompt-library",
        "permission": "knowledge-base.prompt-library.view",
        "children": []
      },
      {
        "key": "memory-center",
        "label": "Memory Center",
        "route": "/knowledge-base/memory-center",
        "permission": "knowledge-base.memory-center.view",
        "children": []
      },
      {
        "key": "content-history",
        "label": "Content History",
        "route": "/knowledge-base/content-history",
        "permission": "knowledge-base.content-history.view",
        "children": []
      },
      {
        "key": "case-studies",
        "label": "Case Studies",
        "route": "/knowledge-base/case-studies",
        "permission": "knowledge-base.case-studies.view",
        "children": []
      },
      {
        "key": "products-and-services",
        "label": "Products & Services",
        "route": "/knowledge-base/products-and-services",
        "permission": "knowledge-base.products-and-services.view",
        "children": []
      },
      {
        "key": "approved-phrases",
        "label": "Approved Phrases",
        "route": "/knowledge-base/approved-phrases",
        "permission": "knowledge-base.approved-phrases.view",
        "children": []
      },
      {
        "key": "restricted-phrases",
        "label": "Restricted Phrases",
        "route": "/knowledge-base/restricted-phrases",
        "permission": "knowledge-base.restricted-phrases.view",
        "children": []
      },
      {
        "key": "saved-insights",
        "label": "Saved Insights",
        "route": "/knowledge-base/saved-insights",
        "permission": "knowledge-base.saved-insights.view",
        "children": []
      },
      {
        "key": "knowledge-search",
        "label": "Knowledge Search",
        "route": "/knowledge-base/knowledge-search",
        "permission": "knowledge-base.knowledge-search.view",
        "children": []
      },
      {
        "key": "knowledge-tags",
        "label": "Knowledge Tags",
        "route": "/knowledge-base/knowledge-tags",
        "permission": "knowledge-base.knowledge-tags.view",
        "children": []
      },
      {
        "key": "knowledge-settings",
        "label": "Knowledge Settings",
        "route": "/knowledge-base/knowledge-settings",
        "permission": "knowledge-base.knowledge-settings.view",
        "children": []
      }
    ]
  },
  {
    "key": "workflow-engine",
    "label": "Workflow Engine",
    "route": "/workflow-engine",
    "permission": "workflow-engine.view",
    "children": [
      {
        "key": "workflow-dashboard",
        "label": "Workflow Dashboard",
        "route": "/workflow-engine/workflow-dashboard",
        "permission": "workflow-engine.workflow-dashboard.view",
        "children": []
      },
      {
        "key": "workflow-builder",
        "label": "Workflow Builder",
        "route": "/workflow-engine/workflow-builder",
        "permission": "workflow-engine.workflow-builder.view",
        "children": []
      },
      {
        "key": "approval-workflows",
        "label": "Approval Workflows",
        "route": "/workflow-engine/approval-workflows",
        "permission": "workflow-engine.approval-workflows.view",
        "children": []
      },
      {
        "key": "automation-rules",
        "label": "Automation Rules",
        "route": "/workflow-engine/automation-rules",
        "permission": "workflow-engine.automation-rules.view",
        "children": []
      },
      {
        "key": "review-queue",
        "label": "Review Queue",
        "route": "/workflow-engine/review-queue",
        "permission": "workflow-engine.review-queue.view",
        "children": []
      },
      {
        "key": "task-assignment",
        "label": "Task Assignment",
        "route": "/workflow-engine/task-assignment",
        "permission": "workflow-engine.task-assignment.view",
        "children": []
      },
      {
        "key": "scheduled-tasks",
        "label": "Scheduled Tasks",
        "route": "/workflow-engine/scheduled-tasks",
        "permission": "workflow-engine.scheduled-tasks.view",
        "children": []
      },
      {
        "key": "notifications",
        "label": "Notifications",
        "route": "/workflow-engine/notifications",
        "permission": "workflow-engine.notifications.view",
        "children": []
      },
      {
        "key": "escalations",
        "label": "Escalations",
        "route": "/workflow-engine/escalations",
        "permission": "workflow-engine.escalations.view",
        "children": []
      },
      {
        "key": "execution-history",
        "label": "Execution History",
        "route": "/workflow-engine/execution-history",
        "permission": "workflow-engine.execution-history.view",
        "children": []
      },
      {
        "key": "version-control",
        "label": "Version Control",
        "route": "/workflow-engine/version-control",
        "permission": "workflow-engine.version-control.view",
        "children": []
      },
      {
        "key": "audit-trail",
        "label": "Audit Trail",
        "route": "/workflow-engine/audit-trail",
        "permission": "workflow-engine.audit-trail.view",
        "children": []
      },
      {
        "key": "workflow-templates",
        "label": "Workflow Templates",
        "route": "/workflow-engine/workflow-templates",
        "permission": "workflow-engine.workflow-templates.view",
        "children": []
      }
    ]
  },
  {
    "key": "analytics-center",
    "label": "Analytics Center",
    "route": "/analytics-center",
    "permission": "analytics-center.view",
    "children": [
      {
        "key": "analytics-dashboard",
        "label": "Analytics Dashboard",
        "route": "/analytics-center/analytics-dashboard",
        "permission": "analytics-center.analytics-dashboard.view",
        "children": []
      },
      {
        "key": "content-analytics",
        "label": "Content Analytics",
        "route": "/analytics-center/content-analytics",
        "permission": "analytics-center.content-analytics.view",
        "children": []
      },
      {
        "key": "social-analytics",
        "label": "Social Analytics",
        "route": "/analytics-center/social-analytics",
        "permission": "analytics-center.social-analytics.view",
        "children": []
      },
      {
        "key": "platform-analytics",
        "label": "Platform Analytics",
        "route": "/analytics-center/platform-analytics",
        "permission": "analytics-center.platform-analytics.view",
        "children": []
      },
      {
        "key": "audience-growth",
        "label": "Audience Growth",
        "route": "/analytics-center/audience-growth",
        "permission": "analytics-center.audience-growth.view",
        "children": []
      },
      {
        "key": "engagement-reports",
        "label": "Engagement Reports",
        "route": "/analytics-center/engagement-reports",
        "permission": "analytics-center.engagement-reports.view",
        "children": []
      },
      {
        "key": "campaign-performance",
        "label": "Campaign Performance",
        "route": "/analytics-center/campaign-performance",
        "permission": "analytics-center.campaign-performance.view",
        "children": []
      },
      {
        "key": "lead-analytics",
        "label": "Lead Analytics",
        "route": "/analytics-center/lead-analytics",
        "permission": "analytics-center.lead-analytics.view",
        "children": []
      },
      {
        "key": "best-performing-topics",
        "label": "Best Performing Topics",
        "route": "/analytics-center/best-performing-topics",
        "permission": "analytics-center.best-performing-topics.view",
        "children": []
      },
      {
        "key": "best-performing-formats",
        "label": "Best Performing Formats",
        "route": "/analytics-center/best-performing-formats",
        "permission": "analytics-center.best-performing-formats.view",
        "children": []
      },
      {
        "key": "best-posting-times",
        "label": "Best Posting Times",
        "route": "/analytics-center/best-posting-times",
        "permission": "analytics-center.best-posting-times.view",
        "children": []
      },
      {
        "key": "ai-recommendations",
        "label": "AI Recommendations",
        "route": "/analytics-center/ai-recommendations",
        "permission": "analytics-center.ai-recommendations.view",
        "children": []
      },
      {
        "key": "reports",
        "label": "Reports",
        "route": "/analytics-center/reports",
        "permission": "analytics-center.reports.view",
        "children": []
      },
      {
        "key": "export-center",
        "label": "Export Center",
        "route": "/analytics-center/export-center",
        "permission": "analytics-center.export-center.view",
        "children": []
      }
    ]
  },
  {
    "key": "integration-hub",
    "label": "Integration Hub",
    "route": "/integration-hub",
    "permission": "integration-hub.view",
    "children": [
      {
        "key": "integration-dashboard",
        "label": "Integration Dashboard",
        "route": "/integration-hub/integration-dashboard",
        "permission": "integration-hub.integration-dashboard.view",
        "children": []
      },
      {
        "key": "social-integrations",
        "label": "Social Integrations",
        "route": "/integration-hub/social-integrations",
        "permission": "integration-hub.social-integrations.view",
        "children": [
          {
            "key": "linkedin",
            "label": "LinkedIn",
            "route": "/integration-hub/social-integrations/linkedin",
            "permission": "integration-hub.social-integrations.linkedin.view"
          },
          {
            "key": "facebook",
            "label": "Facebook",
            "route": "/integration-hub/social-integrations/facebook",
            "permission": "integration-hub.social-integrations.facebook.view"
          },
          {
            "key": "instagram",
            "label": "Instagram",
            "route": "/integration-hub/social-integrations/instagram",
            "permission": "integration-hub.social-integrations.instagram.view"
          },
          {
            "key": "x-twitter",
            "label": "X / Twitter",
            "route": "/integration-hub/social-integrations/x-twitter",
            "permission": "integration-hub.social-integrations.x-twitter.view"
          },
          {
            "key": "youtube",
            "label": "YouTube",
            "route": "/integration-hub/social-integrations/youtube",
            "permission": "integration-hub.social-integrations.youtube.view"
          },
          {
            "key": "tiktok",
            "label": "TikTok",
            "route": "/integration-hub/social-integrations/tiktok",
            "permission": "integration-hub.social-integrations.tiktok.view"
          },
          {
            "key": "threads",
            "label": "Threads",
            "route": "/integration-hub/social-integrations/threads",
            "permission": "integration-hub.social-integrations.threads.view"
          }
        ]
      },
      {
        "key": "email-integrations",
        "label": "Email Integrations",
        "route": "/integration-hub/email-integrations",
        "permission": "integration-hub.email-integrations.view",
        "children": [
          {
            "key": "gmail",
            "label": "Gmail",
            "route": "/integration-hub/email-integrations/gmail",
            "permission": "integration-hub.email-integrations.gmail.view"
          },
          {
            "key": "outlook",
            "label": "Outlook",
            "route": "/integration-hub/email-integrations/outlook",
            "permission": "integration-hub.email-integrations.outlook.view"
          }
        ]
      },
      {
        "key": "calendar-integrations",
        "label": "Calendar Integrations",
        "route": "/integration-hub/calendar-integrations",
        "permission": "integration-hub.calendar-integrations.view",
        "children": [
          {
            "key": "google-calendar",
            "label": "Google Calendar",
            "route": "/integration-hub/calendar-integrations/google-calendar",
            "permission": "integration-hub.calendar-integrations.google-calendar.view"
          },
          {
            "key": "microsoft-calendar",
            "label": "Microsoft Calendar",
            "route": "/integration-hub/calendar-integrations/microsoft-calendar",
            "permission": "integration-hub.calendar-integrations.microsoft-calendar.view"
          }
        ]
      },
      {
        "key": "cloud-storage",
        "label": "Cloud Storage",
        "route": "/integration-hub/cloud-storage",
        "permission": "integration-hub.cloud-storage.view",
        "children": [
          {
            "key": "google-drive",
            "label": "Google Drive",
            "route": "/integration-hub/cloud-storage/google-drive",
            "permission": "integration-hub.cloud-storage.google-drive.view"
          },
          {
            "key": "onedrive",
            "label": "OneDrive",
            "route": "/integration-hub/cloud-storage/onedrive",
            "permission": "integration-hub.cloud-storage.onedrive.view"
          },
          {
            "key": "dropbox",
            "label": "Dropbox",
            "route": "/integration-hub/cloud-storage/dropbox",
            "permission": "integration-hub.cloud-storage.dropbox.view"
          }
        ]
      },
      {
        "key": "communication",
        "label": "Communication",
        "route": "/integration-hub/communication",
        "permission": "integration-hub.communication.view",
        "children": [
          {
            "key": "slack",
            "label": "Slack",
            "route": "/integration-hub/communication/slack",
            "permission": "integration-hub.communication.slack.view"
          },
          {
            "key": "microsoft-teams",
            "label": "Microsoft Teams",
            "route": "/integration-hub/communication/microsoft-teams",
            "permission": "integration-hub.communication.microsoft-teams.view"
          },
          {
            "key": "whatsapp-business",
            "label": "WhatsApp Business",
            "route": "/integration-hub/communication/whatsapp-business",
            "permission": "integration-hub.communication.whatsapp-business.view"
          }
        ]
      },
      {
        "key": "business-systems",
        "label": "Business Systems",
        "route": "/integration-hub/business-systems",
        "permission": "integration-hub.business-systems.view",
        "children": [
          {
            "key": "crm",
            "label": "CRM",
            "route": "/integration-hub/business-systems/crm",
            "permission": "integration-hub.business-systems.crm.view"
          },
          {
            "key": "erp",
            "label": "ERP",
            "route": "/integration-hub/business-systems/erp",
            "permission": "integration-hub.business-systems.erp.view"
          },
          {
            "key": "cms-website",
            "label": "CMS / Website",
            "route": "/integration-hub/business-systems/cms-website",
            "permission": "integration-hub.business-systems.cms-website.view"
          }
        ]
      },
      {
        "key": "payment-integrations",
        "label": "Payment Integrations",
        "route": "/integration-hub/payment-integrations",
        "permission": "integration-hub.payment-integrations.view",
        "children": [
          {
            "key": "paystack",
            "label": "Paystack",
            "route": "/integration-hub/payment-integrations/paystack",
            "permission": "integration-hub.payment-integrations.paystack.view"
          },
          {
            "key": "flutterwave",
            "label": "Flutterwave",
            "route": "/integration-hub/payment-integrations/flutterwave",
            "permission": "integration-hub.payment-integrations.flutterwave.view"
          },
          {
            "key": "stripe",
            "label": "Stripe",
            "route": "/integration-hub/payment-integrations/stripe",
            "permission": "integration-hub.payment-integrations.stripe.view"
          }
        ]
      },
      {
        "key": "sms-gateway",
        "label": "SMS Gateway",
        "route": "/integration-hub/sms-gateway",
        "permission": "integration-hub.sms-gateway.view",
        "children": []
      },
      {
        "key": "api-keys",
        "label": "API Keys",
        "route": "/integration-hub/api-keys",
        "permission": "integration-hub.api-keys.view",
        "children": []
      },
      {
        "key": "webhooks",
        "label": "Webhooks",
        "route": "/integration-hub/webhooks",
        "permission": "integration-hub.webhooks.view",
        "children": []
      },
      {
        "key": "oauth-connections",
        "label": "OAuth Connections",
        "route": "/integration-hub/oauth-connections",
        "permission": "integration-hub.oauth-connections.view",
        "children": []
      },
      {
        "key": "integration-logs",
        "label": "Integration Logs",
        "route": "/integration-hub/integration-logs",
        "permission": "integration-hub.integration-logs.view",
        "children": []
      }
    ]
  },
  {
    "key": "notification-center",
    "label": "Notification Center",
    "route": "/notification-center",
    "permission": "notification-center.view",
    "children": [
      {
        "key": "all-notifications",
        "label": "All Notifications",
        "route": "/notification-center/all-notifications",
        "permission": "notification-center.all-notifications.view",
        "children": []
      },
      {
        "key": "task-notifications",
        "label": "Task Notifications",
        "route": "/notification-center/task-notifications",
        "permission": "notification-center.task-notifications.view",
        "children": []
      },
      {
        "key": "approval-notifications",
        "label": "Approval Notifications",
        "route": "/notification-center/approval-notifications",
        "permission": "notification-center.approval-notifications.view",
        "children": []
      },
      {
        "key": "publishing-alerts",
        "label": "Publishing Alerts",
        "route": "/notification-center/publishing-alerts",
        "permission": "notification-center.publishing-alerts.view",
        "children": []
      },
      {
        "key": "integration-alerts",
        "label": "Integration Alerts",
        "route": "/notification-center/integration-alerts",
        "permission": "notification-center.integration-alerts.view",
        "children": []
      },
      {
        "key": "agent-alerts",
        "label": "Agent Alerts",
        "route": "/notification-center/agent-alerts",
        "permission": "notification-center.agent-alerts.view",
        "children": []
      },
      {
        "key": "system-alerts",
        "label": "System Alerts",
        "route": "/notification-center/system-alerts",
        "permission": "notification-center.system-alerts.view",
        "children": []
      },
      {
        "key": "notification-settings",
        "label": "Notification Settings",
        "route": "/notification-center/notification-settings",
        "permission": "notification-center.notification-settings.view",
        "children": []
      }
    ]
  },
  {
    "key": "user-administration",
    "label": "User Administration",
    "route": "/user-administration",
    "permission": "user-administration.view",
    "children": [
      {
        "key": "users",
        "label": "Users",
        "route": "/user-administration/users",
        "permission": "user-administration.users.view",
        "children": []
      },
      {
        "key": "user-profiles",
        "label": "User Profiles",
        "route": "/user-administration/user-profiles",
        "permission": "user-administration.user-profiles.view",
        "children": []
      },
      {
        "key": "teams",
        "label": "Teams",
        "route": "/user-administration/teams",
        "permission": "user-administration.teams.view",
        "children": []
      },
      {
        "key": "organizations",
        "label": "Organizations",
        "route": "/user-administration/organizations",
        "permission": "user-administration.organizations.view",
        "children": []
      },
      {
        "key": "workspaces",
        "label": "Workspaces",
        "route": "/user-administration/workspaces",
        "permission": "user-administration.workspaces.view",
        "children": []
      },
      {
        "key": "roles",
        "label": "Roles",
        "route": "/user-administration/roles",
        "permission": "user-administration.roles.view",
        "children": []
      },
      {
        "key": "permissions",
        "label": "Permissions",
        "route": "/user-administration/permissions",
        "permission": "user-administration.permissions.view",
        "children": []
      },
      {
        "key": "access-control",
        "label": "Access Control",
        "route": "/user-administration/access-control",
        "permission": "user-administration.access-control.view",
        "children": []
      },
      {
        "key": "subscription-plans",
        "label": "Subscription Plans",
        "route": "/user-administration/subscription-plans",
        "permission": "user-administration.subscription-plans.view",
        "children": []
      },
      {
        "key": "billing",
        "label": "Billing",
        "route": "/user-administration/billing",
        "permission": "user-administration.billing.view",
        "children": []
      },
      {
        "key": "invoices",
        "label": "Invoices",
        "route": "/user-administration/invoices",
        "permission": "user-administration.invoices.view",
        "children": []
      },
      {
        "key": "usage-limits",
        "label": "Usage Limits",
        "route": "/user-administration/usage-limits",
        "permission": "user-administration.usage-limits.view",
        "children": []
      },
      {
        "key": "audit-logs",
        "label": "Audit Logs",
        "route": "/user-administration/audit-logs",
        "permission": "user-administration.audit-logs.view",
        "children": []
      },
      {
        "key": "activity-logs",
        "label": "Activity Logs",
        "route": "/user-administration/activity-logs",
        "permission": "user-administration.activity-logs.view",
        "children": []
      }
    ]
  },
  {
    "key": "security-compliance",
    "label": "Security & Compliance",
    "route": "/security-compliance",
    "permission": "security-compliance.view",
    "children": [
      {
        "key": "login-security",
        "label": "Login Security",
        "route": "/security-compliance/login-security",
        "permission": "security-compliance.login-security.view",
        "children": []
      },
      {
        "key": "multi-factor-authentication",
        "label": "Multi-Factor Authentication",
        "route": "/security-compliance/multi-factor-authentication",
        "permission": "security-compliance.multi-factor-authentication.view",
        "children": []
      },
      {
        "key": "oauth-tokens",
        "label": "OAuth Tokens",
        "route": "/security-compliance/oauth-tokens",
        "permission": "security-compliance.oauth-tokens.view",
        "children": []
      },
      {
        "key": "api-security",
        "label": "API Security",
        "route": "/security-compliance/api-security",
        "permission": "security-compliance.api-security.view",
        "children": []
      },
      {
        "key": "data-privacy",
        "label": "Data Privacy",
        "route": "/security-compliance/data-privacy",
        "permission": "security-compliance.data-privacy.view",
        "children": []
      },
      {
        "key": "content-moderation",
        "label": "Content Moderation",
        "route": "/security-compliance/content-moderation",
        "permission": "security-compliance.content-moderation.view",
        "children": []
      },
      {
        "key": "compliance-rules",
        "label": "Compliance Rules",
        "route": "/security-compliance/compliance-rules",
        "permission": "security-compliance.compliance-rules.view",
        "children": []
      },
      {
        "key": "tenant-isolation",
        "label": "Tenant Isolation",
        "route": "/security-compliance/tenant-isolation",
        "permission": "security-compliance.tenant-isolation.view",
        "children": []
      },
      {
        "key": "backup-and-recovery",
        "label": "Backup & Recovery",
        "route": "/security-compliance/backup-and-recovery",
        "permission": "security-compliance.backup-and-recovery.view",
        "children": []
      },
      {
        "key": "access-logs",
        "label": "Access Logs",
        "route": "/security-compliance/access-logs",
        "permission": "security-compliance.access-logs.view",
        "children": []
      },
      {
        "key": "security-audit-trail",
        "label": "Security Audit Trail",
        "route": "/security-compliance/security-audit-trail",
        "permission": "security-compliance.security-audit-trail.view",
        "children": []
      },
      {
        "key": "risk-alerts",
        "label": "Risk Alerts",
        "route": "/security-compliance/risk-alerts",
        "permission": "security-compliance.risk-alerts.view",
        "children": []
      }
    ]
  },
  {
    "key": "settings",
    "label": "Settings",
    "route": "/settings",
    "permission": "settings.view",
    "children": [
      {
        "key": "general-settings",
        "label": "General Settings",
        "route": "/settings/general-settings",
        "permission": "settings.general-settings.view",
        "children": []
      },
      {
        "key": "workspace-settings",
        "label": "Workspace Settings",
        "route": "/settings/workspace-settings",
        "permission": "settings.workspace-settings.view",
        "children": []
      },
      {
        "key": "brand-settings",
        "label": "Brand Settings",
        "route": "/settings/brand-settings",
        "permission": "settings.brand-settings.view",
        "children": []
      },
      {
        "key": "ai-settings",
        "label": "AI Settings",
        "route": "/settings/ai-settings",
        "permission": "settings.ai-settings.view",
        "children": []
      },
      {
        "key": "agent-settings",
        "label": "Agent Settings",
        "route": "/settings/agent-settings",
        "permission": "settings.agent-settings.view",
        "children": []
      },
      {
        "key": "publishing-settings",
        "label": "Publishing Settings",
        "route": "/settings/publishing-settings",
        "permission": "settings.publishing-settings.view",
        "children": []
      },
      {
        "key": "notification-settings",
        "label": "Notification Settings",
        "route": "/settings/notification-settings",
        "permission": "settings.notification-settings.view",
        "children": []
      },
      {
        "key": "appearance",
        "label": "Appearance",
        "route": "/settings/appearance",
        "permission": "settings.appearance.view",
        "children": []
      },
      {
        "key": "language",
        "label": "Language",
        "route": "/settings/language",
        "permission": "settings.language.view",
        "children": []
      },
      {
        "key": "time-zone",
        "label": "Time Zone",
        "route": "/settings/time-zone",
        "permission": "settings.time-zone.view",
        "children": []
      },
      {
        "key": "backup-settings",
        "label": "Backup Settings",
        "route": "/settings/backup-settings",
        "permission": "settings.backup-settings.view",
        "children": []
      },
      {
        "key": "system-preferences",
        "label": "System Preferences",
        "route": "/settings/system-preferences",
        "permission": "settings.system-preferences.view",
        "children": []
      }
    ]
  }
] as const satisfies readonly ModuleRegistryItem[];

export type ModuleKey = (typeof MODULE_REGISTRY)[number]["key"];

export function getSidebarItems() {
  return MODULE_REGISTRY;
}

export function getRouteMap() {
  return MODULE_REGISTRY.flatMap((module) => [
    {
      key: module.key,
      label: module.label,
      route: module.route,
      permission: module.permission,
    },
    ...(module.children ?? []).flatMap((child) => [
      {
        key: child.key,
        label: child.label,
        route: child.route,
        permission: child.permission,
      },
      ...(child.children ?? []).map((nestedChild) => ({
        key: nestedChild.key,
        label: nestedChild.label,
        route: nestedChild.route,
        permission: nestedChild.permission,
      })),
    ]),
  ]);
}

export function getPermissionMap() {
  return getRouteMap().map(({ key, label, permission, route }) => ({
    key,
    label,
    permission,
    route,
  }));
}

export function getBreadcrumbs(route: string) {
  const breadcrumbs = [];

  for (const module of MODULE_REGISTRY) {
    if (route === module.route || route.startsWith(`${module.route}/`)) {
      breadcrumbs.push({ label: module.label, route: module.route });

      for (const child of module.children ?? []) {
        if (route === child.route || route.startsWith(`${child.route}/`)) {
          breadcrumbs.push({ label: child.label, route: child.route });

          for (const nestedChild of child.children ?? []) {
            if (route === nestedChild.route) {
              breadcrumbs.push({ label: nestedChild.label, route: nestedChild.route });
            }
          }
        }
      }
    }
  }

  return breadcrumbs;
}
