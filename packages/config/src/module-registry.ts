export type ModuleRegistryItem = {
  key: string;
  label: string;
  parentKey: string | null;
  icon: string;
  route: string;
  permission: string;
  description: string;
  featureFlag: string | null;
  status: "active" | "beta" | "planned" | "disabled";
  order: number;
  visibilityRules: {
    roles: readonly string[];
    permissions: readonly string[];
  };
  children?: readonly ModuleRegistryItem[];
};

export const MODULE_REGISTRY = [
  {
    "key": "dashboard",
    "label": "Dashboard",
    "parentKey": null,
    "icon": "LayoutDashboard",
    "route": "/dashboard",
    "permission": "dashboard.view",
    "description": "Dashboard module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 1,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "dashboard.view"
      ]
    },
    "children": [
      {
        "key": "overview",
        "label": "Overview",
        "parentKey": "dashboard",
        "icon": "PanelRightOpen",
        "route": "/dashboard/overview",
        "permission": "dashboard.overview.view",
        "description": "Overview workspace for the Dashboard module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "dashboard.overview.view"
          ]
        },
        "children": []
      },
      {
        "key": "activity-feed",
        "label": "Activity Feed",
        "parentKey": "dashboard",
        "icon": "PanelRightOpen",
        "route": "/dashboard/activity-feed",
        "permission": "dashboard.activity-feed.view",
        "description": "Activity Feed workspace for the Dashboard module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "dashboard.activity-feed.view"
          ]
        },
        "children": []
      },
      {
        "key": "my-tasks",
        "label": "My Tasks",
        "parentKey": "dashboard",
        "icon": "PanelRightOpen",
        "route": "/dashboard/my-tasks",
        "permission": "dashboard.my-tasks.view",
        "description": "My Tasks workspace for the Dashboard module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "dashboard.my-tasks.view"
          ]
        },
        "children": []
      },
      {
        "key": "notifications",
        "label": "Notifications",
        "parentKey": "dashboard",
        "icon": "PanelRightOpen",
        "route": "/dashboard/notifications",
        "permission": "dashboard.notifications.view",
        "description": "Notifications workspace for the Dashboard module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "dashboard.notifications.view"
          ]
        },
        "children": []
      },
      {
        "key": "recent-activities",
        "label": "Recent Activities",
        "parentKey": "dashboard",
        "icon": "PanelRightOpen",
        "route": "/dashboard/recent-activities",
        "permission": "dashboard.recent-activities.view",
        "description": "Recent Activities workspace for the Dashboard module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "dashboard.recent-activities.view"
          ]
        },
        "children": []
      },
      {
        "key": "performance-snapshot",
        "label": "Performance Snapshot",
        "parentKey": "dashboard",
        "icon": "PanelRightOpen",
        "route": "/dashboard/performance-snapshot",
        "permission": "dashboard.performance-snapshot.view",
        "description": "Performance Snapshot workspace for the Dashboard module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "dashboard.performance-snapshot.view"
          ]
        },
        "children": []
      },
      {
        "key": "autonomous-recommendations",
        "label": "Autonomous Recommendations",
        "parentKey": "dashboard",
        "icon": "PanelRightOpen",
        "route": "/dashboard/autonomous-recommendations",
        "permission": "dashboard.autonomous-recommendations.view",
        "description": "Autonomous Recommendations workspace for the Dashboard module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "dashboard.autonomous-recommendations.view"
          ]
        },
        "children": []
      },
      {
        "key": "system-health",
        "label": "System Health",
        "parentKey": "dashboard",
        "icon": "PanelRightOpen",
        "route": "/dashboard/system-health",
        "permission": "dashboard.system-health.view",
        "description": "System Health workspace for the Dashboard module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "dashboard.system-health.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "workspace",
    "label": "Workspace",
    "parentKey": null,
    "icon": "BriefcaseBusiness",
    "route": "/workspace",
    "permission": "workspace.view",
    "description": "Workspace module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 2,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "workspace.view"
      ]
    },
    "children": [
      {
        "key": "my-workspace",
        "label": "My Workspace",
        "parentKey": "workspace",
        "icon": "PanelRightOpen",
        "route": "/workspace/my-workspace",
        "permission": "workspace.my-workspace.view",
        "description": "My Workspace workspace for the Workspace module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workspace.my-workspace.view"
          ]
        },
        "children": []
      },
      {
        "key": "organizations",
        "label": "Organizations",
        "parentKey": "workspace",
        "icon": "PanelRightOpen",
        "route": "/workspace/organizations",
        "permission": "workspace.organizations.view",
        "description": "Organizations workspace for the Workspace module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workspace.organizations.view"
          ]
        },
        "children": []
      },
      {
        "key": "companies",
        "label": "Companies",
        "parentKey": "workspace",
        "icon": "PanelRightOpen",
        "route": "/workspace/companies",
        "permission": "workspace.companies.view",
        "description": "Companies workspace for the Workspace module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workspace.companies.view"
          ]
        },
        "children": []
      },
      {
        "key": "departments",
        "label": "Departments",
        "parentKey": "workspace",
        "icon": "PanelRightOpen",
        "route": "/workspace/departments",
        "permission": "workspace.departments.view",
        "description": "Departments workspace for the Workspace module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workspace.departments.view"
          ]
        },
        "children": []
      },
      {
        "key": "teams",
        "label": "Teams",
        "parentKey": "workspace",
        "icon": "PanelRightOpen",
        "route": "/workspace/teams",
        "permission": "workspace.teams.view",
        "description": "Teams workspace for the Workspace module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workspace.teams.view"
          ]
        },
        "children": []
      },
      {
        "key": "brands",
        "label": "Brands",
        "parentKey": "workspace",
        "icon": "PanelRightOpen",
        "route": "/workspace/brands",
        "permission": "workspace.brands.view",
        "description": "Brands workspace for the Workspace module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workspace.brands.view"
          ]
        },
        "children": []
      },
      {
        "key": "clients",
        "label": "Clients",
        "parentKey": "workspace",
        "icon": "PanelRightOpen",
        "route": "/workspace/clients",
        "permission": "workspace.clients.view",
        "description": "Clients workspace for the Workspace module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workspace.clients.view"
          ]
        },
        "children": []
      },
      {
        "key": "projects",
        "label": "Projects",
        "parentKey": "workspace",
        "icon": "PanelRightOpen",
        "route": "/workspace/projects",
        "permission": "workspace.projects.view",
        "description": "Projects workspace for the Workspace module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workspace.projects.view"
          ]
        },
        "children": []
      },
      {
        "key": "campaigns",
        "label": "Campaigns",
        "parentKey": "workspace",
        "icon": "PanelRightOpen",
        "route": "/workspace/campaigns",
        "permission": "workspace.campaigns.view",
        "description": "Campaigns workspace for the Workspace module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workspace.campaigns.view"
          ]
        },
        "children": []
      },
      {
        "key": "social-accounts",
        "label": "Social Accounts",
        "parentKey": "workspace",
        "icon": "PanelRightOpen",
        "route": "/workspace/social-accounts",
        "permission": "workspace.social-accounts.view",
        "description": "Social Accounts workspace for the Workspace module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workspace.social-accounts.view"
          ]
        },
        "children": []
      },
      {
        "key": "workspace-settings",
        "label": "Workspace Settings",
        "parentKey": "workspace",
        "icon": "PanelRightOpen",
        "route": "/workspace/workspace-settings",
        "permission": "workspace.workspace-settings.view",
        "description": "Workspace Settings workspace for the Workspace module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workspace.workspace-settings.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "brand-manager",
    "label": "Brand Manager",
    "parentKey": null,
    "icon": "BadgeCheck",
    "route": "/brand-manager",
    "permission": "brand-manager.view",
    "description": "Brand Manager module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 3,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "brand-manager.view"
      ]
    },
    "children": [
      {
        "key": "brand-profile",
        "label": "Brand Profile",
        "parentKey": "brand-manager",
        "icon": "PanelRightOpen",
        "route": "/brand-manager/brand-profile",
        "permission": "brand-manager.brand-profile.view",
        "description": "Brand Profile workspace for the Brand Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "brand-manager.brand-profile.view"
          ]
        },
        "children": []
      },
      {
        "key": "audience-profile",
        "label": "Audience Profile",
        "parentKey": "brand-manager",
        "icon": "PanelRightOpen",
        "route": "/brand-manager/audience-profile",
        "permission": "brand-manager.audience-profile.view",
        "description": "Audience Profile workspace for the Brand Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "brand-manager.audience-profile.view"
          ]
        },
        "children": []
      },
      {
        "key": "brand-voice",
        "label": "Brand Voice",
        "parentKey": "brand-manager",
        "icon": "PanelRightOpen",
        "route": "/brand-manager/brand-voice",
        "permission": "brand-manager.brand-voice.view",
        "description": "Brand Voice workspace for the Brand Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "brand-manager.brand-voice.view"
          ]
        },
        "children": []
      },
      {
        "key": "content-pillars",
        "label": "Content Pillars",
        "parentKey": "brand-manager",
        "icon": "PanelRightOpen",
        "route": "/brand-manager/content-pillars",
        "permission": "brand-manager.content-pillars.view",
        "description": "Content Pillars workspace for the Brand Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "brand-manager.content-pillars.view"
          ]
        },
        "children": []
      },
      {
        "key": "products-and-services",
        "label": "Products & Services",
        "parentKey": "brand-manager",
        "icon": "PanelRightOpen",
        "route": "/brand-manager/products-and-services",
        "permission": "brand-manager.products-and-services.view",
        "description": "Products & Services workspace for the Brand Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "brand-manager.products-and-services.view"
          ]
        },
        "children": []
      },
      {
        "key": "case-studies",
        "label": "Case Studies",
        "parentKey": "brand-manager",
        "icon": "PanelRightOpen",
        "route": "/brand-manager/case-studies",
        "permission": "brand-manager.case-studies.view",
        "description": "Case Studies workspace for the Brand Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "brand-manager.case-studies.view"
          ]
        },
        "children": []
      },
      {
        "key": "keywords",
        "label": "Keywords",
        "parentKey": "brand-manager",
        "icon": "PanelRightOpen",
        "route": "/brand-manager/keywords",
        "permission": "brand-manager.keywords.view",
        "description": "Keywords workspace for the Brand Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "brand-manager.keywords.view"
          ]
        },
        "children": []
      },
      {
        "key": "competitors",
        "label": "Competitors",
        "parentKey": "brand-manager",
        "icon": "PanelRightOpen",
        "route": "/brand-manager/competitors",
        "permission": "brand-manager.competitors.view",
        "description": "Competitors workspace for the Brand Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "brand-manager.competitors.view"
          ]
        },
        "children": []
      },
      {
        "key": "brand-goals",
        "label": "Brand Goals",
        "parentKey": "brand-manager",
        "icon": "PanelRightOpen",
        "route": "/brand-manager/brand-goals",
        "permission": "brand-manager.brand-goals.view",
        "description": "Brand Goals workspace for the Brand Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "brand-manager.brand-goals.view"
          ]
        },
        "children": []
      },
      {
        "key": "messaging-guidelines",
        "label": "Messaging Guidelines",
        "parentKey": "brand-manager",
        "icon": "PanelRightOpen",
        "route": "/brand-manager/messaging-guidelines",
        "permission": "brand-manager.messaging-guidelines.view",
        "description": "Messaging Guidelines workspace for the Brand Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "brand-manager.messaging-guidelines.view"
          ]
        },
        "children": []
      },
      {
        "key": "brand-assets",
        "label": "Brand Assets",
        "parentKey": "brand-manager",
        "icon": "PanelRightOpen",
        "route": "/brand-manager/brand-assets",
        "permission": "brand-manager.brand-assets.view",
        "description": "Brand Assets workspace for the Brand Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "brand-manager.brand-assets.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "content-platform",
    "label": "Content Platform",
    "parentKey": null,
    "icon": "FileText",
    "route": "/content-platform",
    "permission": "content-platform.view",
    "description": "Content Platform module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 4,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "content-platform.view"
      ]
    },
    "children": [
      {
        "key": "content-ideas",
        "label": "Content Ideas",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/content-ideas",
        "permission": "content-platform.content-ideas.view",
        "description": "Content Ideas workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.content-ideas.view"
          ]
        },
        "children": []
      },
      {
        "key": "monthly-planner",
        "label": "Monthly Planner",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/monthly-planner",
        "permission": "content-platform.monthly-planner.view",
        "description": "Monthly Planner workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.monthly-planner.view"
          ]
        },
        "children": []
      },
      {
        "key": "weekly-planner",
        "label": "Weekly Planner",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/weekly-planner",
        "permission": "content-platform.weekly-planner.view",
        "description": "Weekly Planner workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.weekly-planner.view"
          ]
        },
        "children": []
      },
      {
        "key": "daily-planner",
        "label": "Daily Planner",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/daily-planner",
        "permission": "content-platform.daily-planner.view",
        "description": "Daily Planner workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.daily-planner.view"
          ]
        },
        "children": []
      },
      {
        "key": "content-calendar",
        "label": "Content Calendar",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/content-calendar",
        "permission": "content-platform.content-calendar.view",
        "description": "Content Calendar workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.content-calendar.view"
          ]
        },
        "children": []
      },
      {
        "key": "content-generator",
        "label": "Content Generator",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/content-generator",
        "permission": "content-platform.content-generator.view",
        "description": "Content Generator workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.content-generator.view"
          ]
        },
        "children": []
      },
      {
        "key": "content-editor",
        "label": "Content Editor",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/content-editor",
        "permission": "content-platform.content-editor.view",
        "description": "Content Editor workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.content-editor.view"
          ]
        },
        "children": []
      },
      {
        "key": "ai-reviewer",
        "label": "AI Reviewer",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/ai-reviewer",
        "permission": "content-platform.ai-reviewer.view",
        "description": "AI Reviewer workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.ai-reviewer.view"
          ]
        },
        "children": []
      },
      {
        "key": "social-preview",
        "label": "Social Preview",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/social-preview",
        "permission": "content-platform.social-preview.view",
        "description": "Social Preview workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.social-preview.view"
          ]
        },
        "children": []
      },
      {
        "key": "scheduled-posts",
        "label": "Scheduled Posts",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/scheduled-posts",
        "permission": "content-platform.scheduled-posts.view",
        "description": "Scheduled Posts workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.scheduled-posts.view"
          ]
        },
        "children": []
      },
      {
        "key": "publishing-queue",
        "label": "Publishing Queue",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/publishing-queue",
        "permission": "content-platform.publishing-queue.view",
        "description": "Publishing Queue workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.publishing-queue.view"
          ]
        },
        "children": []
      },
      {
        "key": "content-library",
        "label": "Content Library",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/content-library",
        "permission": "content-platform.content-library.view",
        "description": "Content Library workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.content-library.view"
          ]
        },
        "children": []
      },
      {
        "key": "templates",
        "label": "Templates",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/templates",
        "permission": "content-platform.templates.view",
        "description": "Templates workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 13,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.templates.view"
          ]
        },
        "children": []
      },
      {
        "key": "carousel-builder",
        "label": "Carousel Builder",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/carousel-builder",
        "permission": "content-platform.carousel-builder.view",
        "description": "Carousel Builder workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 14,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.carousel-builder.view"
          ]
        },
        "children": []
      },
      {
        "key": "video-script-writer",
        "label": "Video Script Writer",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/video-script-writer",
        "permission": "content-platform.video-script-writer.view",
        "description": "Video Script Writer workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 15,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.video-script-writer.view"
          ]
        },
        "children": []
      },
      {
        "key": "blog-writer",
        "label": "Blog Writer",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/blog-writer",
        "permission": "content-platform.blog-writer.view",
        "description": "Blog Writer workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 16,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.blog-writer.view"
          ]
        },
        "children": []
      },
      {
        "key": "newsletter-writer",
        "label": "Newsletter Writer",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/newsletter-writer",
        "permission": "content-platform.newsletter-writer.view",
        "description": "Newsletter Writer workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 17,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.newsletter-writer.view"
          ]
        },
        "children": []
      },
      {
        "key": "repurpose-content",
        "label": "Repurpose Content",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/repurpose-content",
        "permission": "content-platform.repurpose-content.view",
        "description": "Repurpose Content workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 18,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.repurpose-content.view"
          ]
        },
        "children": []
      },
      {
        "key": "content-archive",
        "label": "Content Archive",
        "parentKey": "content-platform",
        "icon": "PanelRightOpen",
        "route": "/content-platform/content-archive",
        "permission": "content-platform.content-archive.view",
        "description": "Content Archive workspace for the Content Platform module.",
        "featureFlag": null,
        "status": "active",
        "order": 19,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "content-platform.content-archive.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "creative-studio",
    "label": "Creative Studio",
    "parentKey": null,
    "icon": "Palette",
    "route": "/creative-studio",
    "permission": "creative-studio.view",
    "description": "Creative Studio module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 5,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "creative-studio.view"
      ]
    },
    "children": [
      {
        "key": "dashboard",
        "label": "Dashboard",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/dashboard",
        "permission": "creative-studio.dashboard.view",
        "description": "Dashboard workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.dashboard.view"
          ]
        },
        "children": []
      },
      {
        "key": "creative-projects",
        "label": "Creative Projects",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/creative-projects",
        "permission": "creative-studio.creative-projects.view",
        "description": "Creative Projects workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.creative-projects.view"
          ]
        },
        "children": []
      },
      {
        "key": "creative-workspace",
        "label": "Creative Workspace",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/creative-workspace",
        "permission": "creative-studio.creative-workspace.view",
        "description": "Creative Workspace workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.creative-workspace.view"
          ]
        },
        "children": []
      },
      {
        "key": "image-studio",
        "label": "Image Studio",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/image-studio",
        "permission": "creative-studio.image-studio.view",
        "description": "Image Studio workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.image-studio.view"
          ]
        },
        "children": []
      },
      {
        "key": "video-studio",
        "label": "Video Studio",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/video-studio",
        "permission": "creative-studio.video-studio.view",
        "description": "Video Studio workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.video-studio.view"
          ]
        },
        "children": [
          {
            "key": "dashboard",
            "label": "Dashboard",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/dashboard",
            "permission": "creative-studio.video-studio.dashboard.view",
            "description": "Dashboard page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 1,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.dashboard.view"
              ]
            }
          },
          {
            "key": "research",
            "label": "Research",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/research",
            "permission": "creative-studio.video-studio.research.view",
            "description": "Research page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 2,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.research.view"
              ]
            }
          },
          {
            "key": "ideas",
            "label": "Ideas",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/ideas",
            "permission": "creative-studio.video-studio.ideas.view",
            "description": "Ideas page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 3,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.ideas.view"
              ]
            }
          },
          {
            "key": "strategy",
            "label": "Strategy",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/strategy",
            "permission": "creative-studio.video-studio.strategy.view",
            "description": "Strategy page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 4,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.strategy.view"
              ]
            }
          },
          {
            "key": "script-writer",
            "label": "Script Writer",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/script-writer",
            "permission": "creative-studio.video-studio.script-writer.view",
            "description": "Script Writer page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 5,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.script-writer.view"
              ]
            }
          },
          {
            "key": "script-reviewer",
            "label": "Script Reviewer",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/script-reviewer",
            "permission": "creative-studio.video-studio.script-reviewer.view",
            "description": "Script Reviewer page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 6,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.script-reviewer.view"
              ]
            }
          },
          {
            "key": "storyboard-builder",
            "label": "Storyboard Builder",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/storyboard-builder",
            "permission": "creative-studio.video-studio.storyboard-builder.view",
            "description": "Storyboard Builder page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 7,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.storyboard-builder.view"
              ]
            }
          },
          {
            "key": "scene-planner",
            "label": "Scene Planner",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/scene-planner",
            "permission": "creative-studio.video-studio.scene-planner.view",
            "description": "Scene Planner page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 8,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.scene-planner.view"
              ]
            }
          },
          {
            "key": "shot-planner",
            "label": "Shot Planner",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/shot-planner",
            "permission": "creative-studio.video-studio.shot-planner.view",
            "description": "Shot Planner page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 9,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.shot-planner.view"
              ]
            }
          },
          {
            "key": "timeline",
            "label": "Timeline",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/timeline",
            "permission": "creative-studio.video-studio.timeline.view",
            "description": "Timeline page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 10,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.timeline.view"
              ]
            }
          },
          {
            "key": "visual-planner",
            "label": "Visual Planner",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/visual-planner",
            "permission": "creative-studio.video-studio.visual-planner.view",
            "description": "Visual Planner page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 11,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.visual-planner.view"
              ]
            }
          },
          {
            "key": "image-generation",
            "label": "Image Generation",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/image-generation",
            "permission": "creative-studio.video-studio.image-generation.view",
            "description": "Image Generation page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 12,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.image-generation.view"
              ]
            }
          },
          {
            "key": "video-generation",
            "label": "Video Generation",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/video-generation",
            "permission": "creative-studio.video-studio.video-generation.view",
            "description": "Video Generation page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 13,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.video-generation.view"
              ]
            }
          },
          {
            "key": "voice-generation",
            "label": "Voice Generation",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/voice-generation",
            "permission": "creative-studio.video-studio.voice-generation.view",
            "description": "Voice Generation page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 14,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.voice-generation.view"
              ]
            }
          },
          {
            "key": "narration",
            "label": "Narration",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/narration",
            "permission": "creative-studio.video-studio.narration.view",
            "description": "Narration page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 15,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.narration.view"
              ]
            }
          },
          {
            "key": "music",
            "label": "Music",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/music",
            "permission": "creative-studio.video-studio.music.view",
            "description": "Music page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 16,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.music.view"
              ]
            }
          },
          {
            "key": "animation",
            "label": "Animation",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/animation",
            "permission": "creative-studio.video-studio.animation.view",
            "description": "Animation page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 17,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.animation.view"
              ]
            }
          },
          {
            "key": "editing",
            "label": "Editing",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/editing",
            "permission": "creative-studio.video-studio.editing.view",
            "description": "Editing page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 18,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.editing.view"
              ]
            }
          },
          {
            "key": "subtitle-generator",
            "label": "Subtitle Generator",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/subtitle-generator",
            "permission": "creative-studio.video-studio.subtitle-generator.view",
            "description": "Subtitle Generator page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 19,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.subtitle-generator.view"
              ]
            }
          },
          {
            "key": "caption-generator",
            "label": "Caption Generator",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/caption-generator",
            "permission": "creative-studio.video-studio.caption-generator.view",
            "description": "Caption Generator page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 20,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.caption-generator.view"
              ]
            }
          },
          {
            "key": "thumbnail-studio",
            "label": "Thumbnail Studio",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/thumbnail-studio",
            "permission": "creative-studio.video-studio.thumbnail-studio.view",
            "description": "Thumbnail Studio page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 21,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.thumbnail-studio.view"
              ]
            }
          },
          {
            "key": "publishing",
            "label": "Publishing",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/publishing",
            "permission": "creative-studio.video-studio.publishing.view",
            "description": "Publishing page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 22,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.publishing.view"
              ]
            }
          },
          {
            "key": "analytics",
            "label": "Analytics",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/analytics",
            "permission": "creative-studio.video-studio.analytics.view",
            "description": "Analytics page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 23,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.analytics.view"
              ]
            }
          },
          {
            "key": "version-history",
            "label": "Version History",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/version-history",
            "permission": "creative-studio.video-studio.version-history.view",
            "description": "Version History page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 24,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.version-history.view"
              ]
            }
          },
          {
            "key": "templates",
            "label": "Templates",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/templates",
            "permission": "creative-studio.video-studio.templates.view",
            "description": "Templates page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 25,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.templates.view"
              ]
            }
          },
          {
            "key": "archive",
            "label": "Archive",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/archive",
            "permission": "creative-studio.video-studio.archive.view",
            "description": "Archive page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 26,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.archive.view"
              ]
            }
          },
          {
            "key": "asset-library",
            "label": "Asset Library",
            "parentKey": "video-studio",
            "icon": "PanelRightOpen",
            "route": "/creative-studio/video-studio/asset-library",
            "permission": "creative-studio.video-studio.asset-library.view",
            "description": "Asset Library page under Video Studio in the Creative Studio module.",
            "featureFlag": null,
            "status": "active",
            "order": 27,
            "visibilityRules": {
              "roles": [
                "owner",
                "admin",
                "member"
              ],
              "permissions": [
                "creative-studio.video-studio.asset-library.view"
              ]
            }
          }
        ]
      },
      {
        "key": "audio-studio",
        "label": "Audio Studio",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/audio-studio",
        "permission": "creative-studio.audio-studio.view",
        "description": "Audio Studio workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.audio-studio.view"
          ]
        },
        "children": []
      },
      {
        "key": "podcast-studio",
        "label": "Podcast Studio",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/podcast-studio",
        "permission": "creative-studio.podcast-studio.view",
        "description": "Podcast Studio workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.podcast-studio.view"
          ]
        },
        "children": []
      },
      {
        "key": "presentation-studio",
        "label": "Presentation Studio",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/presentation-studio",
        "permission": "creative-studio.presentation-studio.view",
        "description": "Presentation Studio workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.presentation-studio.view"
          ]
        },
        "children": []
      },
      {
        "key": "document-studio",
        "label": "Document Studio",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/document-studio",
        "permission": "creative-studio.document-studio.view",
        "description": "Document Studio workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.document-studio.view"
          ]
        },
        "children": []
      },
      {
        "key": "design-studio",
        "label": "Design Studio",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/design-studio",
        "permission": "creative-studio.design-studio.view",
        "description": "Design Studio workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.design-studio.view"
          ]
        },
        "children": []
      },
      {
        "key": "creative-templates",
        "label": "Creative Templates",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/creative-templates",
        "permission": "creative-studio.creative-templates.view",
        "description": "Creative Templates workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.creative-templates.view"
          ]
        },
        "children": []
      },
      {
        "key": "brand-asset-library",
        "label": "Brand Asset Library",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/brand-asset-library",
        "permission": "creative-studio.brand-asset-library.view",
        "description": "Brand Asset Library workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.brand-asset-library.view"
          ]
        },
        "children": []
      },
      {
        "key": "publishing-center",
        "label": "Publishing Center",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/publishing-center",
        "permission": "creative-studio.publishing-center.view",
        "description": "Publishing Center workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 13,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.publishing-center.view"
          ]
        },
        "children": []
      },
      {
        "key": "creative-analytics",
        "label": "Creative Analytics",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/creative-analytics",
        "permission": "creative-studio.creative-analytics.view",
        "description": "Creative Analytics workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 14,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.creative-analytics.view"
          ]
        },
        "children": []
      },
      {
        "key": "learning-center",
        "label": "Learning Center",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/learning-center",
        "permission": "creative-studio.learning-center.view",
        "description": "Learning Center workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 15,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.learning-center.view"
          ]
        },
        "children": []
      },
      {
        "key": "creative-settings",
        "label": "Creative Settings",
        "parentKey": "creative-studio",
        "icon": "PanelRightOpen",
        "route": "/creative-studio/creative-settings",
        "permission": "creative-studio.creative-settings.view",
        "description": "Creative Settings workspace for the Creative Studio module.",
        "featureFlag": null,
        "status": "active",
        "order": 16,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "creative-studio.creative-settings.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "research-center",
    "label": "Research Center",
    "parentKey": null,
    "icon": "Search",
    "route": "/research-center",
    "permission": "research-center.view",
    "description": "Research Center module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 6,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "research-center.view"
      ]
    },
    "children": [
      {
        "key": "topic-research",
        "label": "Topic Research",
        "parentKey": "research-center",
        "icon": "PanelRightOpen",
        "route": "/research-center/topic-research",
        "permission": "research-center.topic-research.view",
        "description": "Topic Research workspace for the Research Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "research-center.topic-research.view"
          ]
        },
        "children": []
      },
      {
        "key": "trend-discovery",
        "label": "Trend Discovery",
        "parentKey": "research-center",
        "icon": "PanelRightOpen",
        "route": "/research-center/trend-discovery",
        "permission": "research-center.trend-discovery.view",
        "description": "Trend Discovery workspace for the Research Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "research-center.trend-discovery.view"
          ]
        },
        "children": []
      },
      {
        "key": "competitor-research",
        "label": "Competitor Research",
        "parentKey": "research-center",
        "icon": "PanelRightOpen",
        "route": "/research-center/competitor-research",
        "permission": "research-center.competitor-research.view",
        "description": "Competitor Research workspace for the Research Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "research-center.competitor-research.view"
          ]
        },
        "children": []
      },
      {
        "key": "industry-insights",
        "label": "Industry Insights",
        "parentKey": "research-center",
        "icon": "PanelRightOpen",
        "route": "/research-center/industry-insights",
        "permission": "research-center.industry-insights.view",
        "description": "Industry Insights workspace for the Research Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "research-center.industry-insights.view"
          ]
        },
        "children": []
      },
      {
        "key": "keyword-research",
        "label": "Keyword Research",
        "parentKey": "research-center",
        "icon": "PanelRightOpen",
        "route": "/research-center/keyword-research",
        "permission": "research-center.keyword-research.view",
        "description": "Keyword Research workspace for the Research Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "research-center.keyword-research.view"
          ]
        },
        "children": []
      },
      {
        "key": "news-monitor",
        "label": "News Monitor",
        "parentKey": "research-center",
        "icon": "PanelRightOpen",
        "route": "/research-center/news-monitor",
        "permission": "research-center.news-monitor.view",
        "description": "News Monitor workspace for the Research Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "research-center.news-monitor.view"
          ]
        },
        "children": []
      },
      {
        "key": "audience-research",
        "label": "Audience Research",
        "parentKey": "research-center",
        "icon": "PanelRightOpen",
        "route": "/research-center/audience-research",
        "permission": "research-center.audience-research.view",
        "description": "Audience Research workspace for the Research Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "research-center.audience-research.view"
          ]
        },
        "children": []
      },
      {
        "key": "hashtag-research",
        "label": "Hashtag Research",
        "parentKey": "research-center",
        "icon": "PanelRightOpen",
        "route": "/research-center/hashtag-research",
        "permission": "research-center.hashtag-research.view",
        "description": "Hashtag Research workspace for the Research Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "research-center.hashtag-research.view"
          ]
        },
        "children": []
      },
      {
        "key": "market-research",
        "label": "Market Research",
        "parentKey": "research-center",
        "icon": "PanelRightOpen",
        "route": "/research-center/market-research",
        "permission": "research-center.market-research.view",
        "description": "Market Research workspace for the Research Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "research-center.market-research.view"
          ]
        },
        "children": []
      },
      {
        "key": "research-library",
        "label": "Research Library",
        "parentKey": "research-center",
        "icon": "PanelRightOpen",
        "route": "/research-center/research-library",
        "permission": "research-center.research-library.view",
        "description": "Research Library workspace for the Research Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "research-center.research-library.view"
          ]
        },
        "children": []
      },
      {
        "key": "saved-insights",
        "label": "Saved Insights",
        "parentKey": "research-center",
        "icon": "PanelRightOpen",
        "route": "/research-center/saved-insights",
        "permission": "research-center.saved-insights.view",
        "description": "Saved Insights workspace for the Research Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "research-center.saved-insights.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "campaign-manager",
    "label": "Campaign Manager",
    "parentKey": null,
    "icon": "Megaphone",
    "route": "/campaign-manager",
    "permission": "campaign-manager.view",
    "description": "Campaign Manager module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 7,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "campaign-manager.view"
      ]
    },
    "children": [
      {
        "key": "campaigns",
        "label": "Campaigns",
        "parentKey": "campaign-manager",
        "icon": "PanelRightOpen",
        "route": "/campaign-manager/campaigns",
        "permission": "campaign-manager.campaigns.view",
        "description": "Campaigns workspace for the Campaign Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "campaign-manager.campaigns.view"
          ]
        },
        "children": []
      },
      {
        "key": "campaign-goals",
        "label": "Campaign Goals",
        "parentKey": "campaign-manager",
        "icon": "PanelRightOpen",
        "route": "/campaign-manager/campaign-goals",
        "permission": "campaign-manager.campaign-goals.view",
        "description": "Campaign Goals workspace for the Campaign Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "campaign-manager.campaign-goals.view"
          ]
        },
        "children": []
      },
      {
        "key": "campaign-strategy",
        "label": "Campaign Strategy",
        "parentKey": "campaign-manager",
        "icon": "PanelRightOpen",
        "route": "/campaign-manager/campaign-strategy",
        "permission": "campaign-manager.campaign-strategy.view",
        "description": "Campaign Strategy workspace for the Campaign Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "campaign-manager.campaign-strategy.view"
          ]
        },
        "children": []
      },
      {
        "key": "campaign-calendar",
        "label": "Campaign Calendar",
        "parentKey": "campaign-manager",
        "icon": "PanelRightOpen",
        "route": "/campaign-manager/campaign-calendar",
        "permission": "campaign-manager.campaign-calendar.view",
        "description": "Campaign Calendar workspace for the Campaign Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "campaign-manager.campaign-calendar.view"
          ]
        },
        "children": []
      },
      {
        "key": "campaign-assets",
        "label": "Campaign Assets",
        "parentKey": "campaign-manager",
        "icon": "PanelRightOpen",
        "route": "/campaign-manager/campaign-assets",
        "permission": "campaign-manager.campaign-assets.view",
        "description": "Campaign Assets workspace for the Campaign Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "campaign-manager.campaign-assets.view"
          ]
        },
        "children": []
      },
      {
        "key": "campaign-tasks",
        "label": "Campaign Tasks",
        "parentKey": "campaign-manager",
        "icon": "PanelRightOpen",
        "route": "/campaign-manager/campaign-tasks",
        "permission": "campaign-manager.campaign-tasks.view",
        "description": "Campaign Tasks workspace for the Campaign Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "campaign-manager.campaign-tasks.view"
          ]
        },
        "children": []
      },
      {
        "key": "campaign-content",
        "label": "Campaign Content",
        "parentKey": "campaign-manager",
        "icon": "PanelRightOpen",
        "route": "/campaign-manager/campaign-content",
        "permission": "campaign-manager.campaign-content.view",
        "description": "Campaign Content workspace for the Campaign Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "campaign-manager.campaign-content.view"
          ]
        },
        "children": []
      },
      {
        "key": "campaign-approvals",
        "label": "Campaign Approvals",
        "parentKey": "campaign-manager",
        "icon": "PanelRightOpen",
        "route": "/campaign-manager/campaign-approvals",
        "permission": "campaign-manager.campaign-approvals.view",
        "description": "Campaign Approvals workspace for the Campaign Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "campaign-manager.campaign-approvals.view"
          ]
        },
        "children": []
      },
      {
        "key": "campaign-performance",
        "label": "Campaign Performance",
        "parentKey": "campaign-manager",
        "icon": "PanelRightOpen",
        "route": "/campaign-manager/campaign-performance",
        "permission": "campaign-manager.campaign-performance.view",
        "description": "Campaign Performance workspace for the Campaign Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "campaign-manager.campaign-performance.view"
          ]
        },
        "children": []
      },
      {
        "key": "campaign-reports",
        "label": "Campaign Reports",
        "parentKey": "campaign-manager",
        "icon": "PanelRightOpen",
        "route": "/campaign-manager/campaign-reports",
        "permission": "campaign-manager.campaign-reports.view",
        "description": "Campaign Reports workspace for the Campaign Manager module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "campaign-manager.campaign-reports.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "approval-center",
    "label": "Approval Center",
    "parentKey": null,
    "icon": "CircleCheckBig",
    "route": "/approval-center",
    "permission": "approval-center.view",
    "description": "Approval Center module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 8,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "approval-center.view"
      ]
    },
    "children": [
      {
        "key": "drafts",
        "label": "Drafts",
        "parentKey": "approval-center",
        "icon": "PanelRightOpen",
        "route": "/approval-center/drafts",
        "permission": "approval-center.drafts.view",
        "description": "Drafts workspace for the Approval Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "approval-center.drafts.view"
          ]
        },
        "children": []
      },
      {
        "key": "ai-review-queue",
        "label": "AI Review Queue",
        "parentKey": "approval-center",
        "icon": "PanelRightOpen",
        "route": "/approval-center/ai-review-queue",
        "permission": "approval-center.ai-review-queue.view",
        "description": "AI Review Queue workspace for the Approval Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "approval-center.ai-review-queue.view"
          ]
        },
        "children": []
      },
      {
        "key": "pending-approval",
        "label": "Pending Approval",
        "parentKey": "approval-center",
        "icon": "PanelRightOpen",
        "route": "/approval-center/pending-approval",
        "permission": "approval-center.pending-approval.view",
        "description": "Pending Approval workspace for the Approval Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "approval-center.pending-approval.view"
          ]
        },
        "children": []
      },
      {
        "key": "revision-requests",
        "label": "Revision Requests",
        "parentKey": "approval-center",
        "icon": "PanelRightOpen",
        "route": "/approval-center/revision-requests",
        "permission": "approval-center.revision-requests.view",
        "description": "Revision Requests workspace for the Approval Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "approval-center.revision-requests.view"
          ]
        },
        "children": []
      },
      {
        "key": "approved-content",
        "label": "Approved Content",
        "parentKey": "approval-center",
        "icon": "PanelRightOpen",
        "route": "/approval-center/approved-content",
        "permission": "approval-center.approved-content.view",
        "description": "Approved Content workspace for the Approval Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "approval-center.approved-content.view"
          ]
        },
        "children": []
      },
      {
        "key": "rejected-content",
        "label": "Rejected Content",
        "parentKey": "approval-center",
        "icon": "PanelRightOpen",
        "route": "/approval-center/rejected-content",
        "permission": "approval-center.rejected-content.view",
        "description": "Rejected Content workspace for the Approval Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "approval-center.rejected-content.view"
          ]
        },
        "children": []
      },
      {
        "key": "approval-workflow",
        "label": "Approval Workflow",
        "parentKey": "approval-center",
        "icon": "PanelRightOpen",
        "route": "/approval-center/approval-workflow",
        "permission": "approval-center.approval-workflow.view",
        "description": "Approval Workflow workspace for the Approval Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "approval-center.approval-workflow.view"
          ]
        },
        "children": []
      },
      {
        "key": "review-comments",
        "label": "Review Comments",
        "parentKey": "approval-center",
        "icon": "PanelRightOpen",
        "route": "/approval-center/review-comments",
        "permission": "approval-center.review-comments.view",
        "description": "Review Comments workspace for the Approval Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "approval-center.review-comments.view"
          ]
        },
        "children": []
      },
      {
        "key": "version-history",
        "label": "Version History",
        "parentKey": "approval-center",
        "icon": "PanelRightOpen",
        "route": "/approval-center/version-history",
        "permission": "approval-center.version-history.view",
        "description": "Version History workspace for the Approval Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "approval-center.version-history.view"
          ]
        },
        "children": []
      },
      {
        "key": "approval-audit-trail",
        "label": "Approval Audit Trail",
        "parentKey": "approval-center",
        "icon": "PanelRightOpen",
        "route": "/approval-center/approval-audit-trail",
        "permission": "approval-center.approval-audit-trail.view",
        "description": "Approval Audit Trail workspace for the Approval Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "approval-center.approval-audit-trail.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "social-publishing",
    "label": "Social Publishing",
    "parentKey": null,
    "icon": "Send",
    "route": "/social-publishing",
    "permission": "social-publishing.view",
    "description": "Social Publishing module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 9,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "social-publishing.view"
      ]
    },
    "children": [
      {
        "key": "connected-accounts",
        "label": "Connected Accounts",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/connected-accounts",
        "permission": "social-publishing.connected-accounts.view",
        "description": "Connected Accounts workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.connected-accounts.view"
          ]
        },
        "children": []
      },
      {
        "key": "linkedin",
        "label": "LinkedIn",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/linkedin",
        "permission": "social-publishing.linkedin.view",
        "description": "LinkedIn workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.linkedin.view"
          ]
        },
        "children": []
      },
      {
        "key": "facebook",
        "label": "Facebook",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/facebook",
        "permission": "social-publishing.facebook.view",
        "description": "Facebook workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.facebook.view"
          ]
        },
        "children": []
      },
      {
        "key": "instagram",
        "label": "Instagram",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/instagram",
        "permission": "social-publishing.instagram.view",
        "description": "Instagram workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.instagram.view"
          ]
        },
        "children": []
      },
      {
        "key": "x-twitter",
        "label": "X / Twitter",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/x-twitter",
        "permission": "social-publishing.x-twitter.view",
        "description": "X / Twitter workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.x-twitter.view"
          ]
        },
        "children": []
      },
      {
        "key": "youtube",
        "label": "YouTube",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/youtube",
        "permission": "social-publishing.youtube.view",
        "description": "YouTube workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.youtube.view"
          ]
        },
        "children": []
      },
      {
        "key": "tiktok",
        "label": "TikTok",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/tiktok",
        "permission": "social-publishing.tiktok.view",
        "description": "TikTok workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.tiktok.view"
          ]
        },
        "children": []
      },
      {
        "key": "threads",
        "label": "Threads",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/threads",
        "permission": "social-publishing.threads.view",
        "description": "Threads workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.threads.view"
          ]
        },
        "children": []
      },
      {
        "key": "blog-website",
        "label": "Blog / Website",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/blog-website",
        "permission": "social-publishing.blog-website.view",
        "description": "Blog / Website workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.blog-website.view"
          ]
        },
        "children": []
      },
      {
        "key": "email-newsletter",
        "label": "Email Newsletter",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/email-newsletter",
        "permission": "social-publishing.email-newsletter.view",
        "description": "Email Newsletter workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.email-newsletter.view"
          ]
        },
        "children": []
      },
      {
        "key": "publishing-queue",
        "label": "Publishing Queue",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/publishing-queue",
        "permission": "social-publishing.publishing-queue.view",
        "description": "Publishing Queue workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.publishing-queue.view"
          ]
        },
        "children": []
      },
      {
        "key": "scheduled-posts",
        "label": "Scheduled Posts",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/scheduled-posts",
        "permission": "social-publishing.scheduled-posts.view",
        "description": "Scheduled Posts workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.scheduled-posts.view"
          ]
        },
        "children": []
      },
      {
        "key": "published-posts",
        "label": "Published Posts",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/published-posts",
        "permission": "social-publishing.published-posts.view",
        "description": "Published Posts workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 13,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.published-posts.view"
          ]
        },
        "children": []
      },
      {
        "key": "failed-posts",
        "label": "Failed Posts",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/failed-posts",
        "permission": "social-publishing.failed-posts.view",
        "description": "Failed Posts workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 14,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.failed-posts.view"
          ]
        },
        "children": []
      },
      {
        "key": "reconnect-accounts",
        "label": "Reconnect Accounts",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/reconnect-accounts",
        "permission": "social-publishing.reconnect-accounts.view",
        "description": "Reconnect Accounts workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 15,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.reconnect-accounts.view"
          ]
        },
        "children": []
      },
      {
        "key": "publishing-logs",
        "label": "Publishing Logs",
        "parentKey": "social-publishing",
        "icon": "PanelRightOpen",
        "route": "/social-publishing/publishing-logs",
        "permission": "social-publishing.publishing-logs.view",
        "description": "Publishing Logs workspace for the Social Publishing module.",
        "featureFlag": null,
        "status": "active",
        "order": 16,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "social-publishing.publishing-logs.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "demo-platforms",
    "label": "Demo Platforms",
    "parentKey": null,
    "icon": "MonitorSmartphone",
    "route": "/demo-platforms",
    "permission": "demo-platforms.view",
    "description": "Demo Platforms module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 10,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "demo-platforms.view"
      ]
    },
    "children": [
      {
        "key": "demo-linkedin",
        "label": "Demo LinkedIn",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/demo-linkedin",
        "permission": "demo-platforms.demo-linkedin.view",
        "description": "Demo LinkedIn workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.demo-linkedin.view"
          ]
        },
        "children": []
      },
      {
        "key": "demo-facebook",
        "label": "Demo Facebook",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/demo-facebook",
        "permission": "demo-platforms.demo-facebook.view",
        "description": "Demo Facebook workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.demo-facebook.view"
          ]
        },
        "children": []
      },
      {
        "key": "demo-instagram",
        "label": "Demo Instagram",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/demo-instagram",
        "permission": "demo-platforms.demo-instagram.view",
        "description": "Demo Instagram workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.demo-instagram.view"
          ]
        },
        "children": []
      },
      {
        "key": "demo-x-twitter",
        "label": "Demo X / Twitter",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/demo-x-twitter",
        "permission": "demo-platforms.demo-x-twitter.view",
        "description": "Demo X / Twitter workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.demo-x-twitter.view"
          ]
        },
        "children": []
      },
      {
        "key": "demo-youtube",
        "label": "Demo YouTube",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/demo-youtube",
        "permission": "demo-platforms.demo-youtube.view",
        "description": "Demo YouTube workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.demo-youtube.view"
          ]
        },
        "children": []
      },
      {
        "key": "demo-blog",
        "label": "Demo Blog",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/demo-blog",
        "permission": "demo-platforms.demo-blog.view",
        "description": "Demo Blog workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.demo-blog.view"
          ]
        },
        "children": []
      },
      {
        "key": "feed-preview",
        "label": "Feed Preview",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/feed-preview",
        "permission": "demo-platforms.feed-preview.view",
        "description": "Feed Preview workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.feed-preview.view"
          ]
        },
        "children": []
      },
      {
        "key": "desktop-preview",
        "label": "Desktop Preview",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/desktop-preview",
        "permission": "demo-platforms.desktop-preview.view",
        "description": "Desktop Preview workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.desktop-preview.view"
          ]
        },
        "children": []
      },
      {
        "key": "mobile-preview",
        "label": "Mobile Preview",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/mobile-preview",
        "permission": "demo-platforms.mobile-preview.view",
        "description": "Mobile Preview workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.mobile-preview.view"
          ]
        },
        "children": []
      },
      {
        "key": "engagement-simulator",
        "label": "Engagement Simulator",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/engagement-simulator",
        "permission": "demo-platforms.engagement-simulator.view",
        "description": "Engagement Simulator workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.engagement-simulator.view"
          ]
        },
        "children": []
      },
      {
        "key": "comment-simulator",
        "label": "Comment Simulator",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/comment-simulator",
        "permission": "demo-platforms.comment-simulator.view",
        "description": "Comment Simulator workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.comment-simulator.view"
          ]
        },
        "children": []
      },
      {
        "key": "share-preview",
        "label": "Share Preview",
        "parentKey": "demo-platforms",
        "icon": "PanelRightOpen",
        "route": "/demo-platforms/share-preview",
        "permission": "demo-platforms.share-preview.view",
        "description": "Share Preview workspace for the Demo Platforms module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "demo-platforms.share-preview.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "autonomous-agents",
    "label": "Autonomous Agents",
    "parentKey": null,
    "icon": "Bot",
    "route": "/autonomous-agents",
    "permission": "autonomous-agents.view",
    "description": "Autonomous Agents module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 11,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "autonomous-agents.view"
      ]
    },
    "children": [
      {
        "key": "agent-dashboard",
        "label": "Agent Dashboard",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/agent-dashboard",
        "permission": "autonomous-agents.agent-dashboard.view",
        "description": "Agent Dashboard workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.agent-dashboard.view"
          ]
        },
        "children": []
      },
      {
        "key": "executive-agent",
        "label": "Executive Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/executive-agent",
        "permission": "autonomous-agents.executive-agent.view",
        "description": "Executive Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.executive-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "content-agent",
        "label": "Content Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/content-agent",
        "permission": "autonomous-agents.content-agent.view",
        "description": "Content Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.content-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "research-agent",
        "label": "Research Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/research-agent",
        "permission": "autonomous-agents.research-agent.view",
        "description": "Research Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.research-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "brand-agent",
        "label": "Brand Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/brand-agent",
        "permission": "autonomous-agents.brand-agent.view",
        "description": "Brand Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.brand-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "social-media-agent",
        "label": "Social Media Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/social-media-agent",
        "permission": "autonomous-agents.social-media-agent.view",
        "description": "Social Media Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.social-media-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "editor-agent",
        "label": "Editor Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/editor-agent",
        "permission": "autonomous-agents.editor-agent.view",
        "description": "Editor Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.editor-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "compliance-agent",
        "label": "Compliance Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/compliance-agent",
        "permission": "autonomous-agents.compliance-agent.view",
        "description": "Compliance Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.compliance-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "scheduler-agent",
        "label": "Scheduler Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/scheduler-agent",
        "permission": "autonomous-agents.scheduler-agent.view",
        "description": "Scheduler Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.scheduler-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "analytics-agent",
        "label": "Analytics Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/analytics-agent",
        "permission": "autonomous-agents.analytics-agent.view",
        "description": "Analytics Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.analytics-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "engagement-agent",
        "label": "Engagement Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/engagement-agent",
        "permission": "autonomous-agents.engagement-agent.view",
        "description": "Engagement Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.engagement-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "sales-agent",
        "label": "Sales Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/sales-agent",
        "permission": "autonomous-agents.sales-agent.view",
        "description": "Sales Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.sales-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "workflow-agent",
        "label": "Workflow Agent",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/workflow-agent",
        "permission": "autonomous-agents.workflow-agent.view",
        "description": "Workflow Agent workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 13,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.workflow-agent.view"
          ]
        },
        "children": []
      },
      {
        "key": "agent-marketplace",
        "label": "Agent Marketplace",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/agent-marketplace",
        "permission": "autonomous-agents.agent-marketplace.view",
        "description": "Agent Marketplace workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 14,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.agent-marketplace.view"
          ]
        },
        "children": []
      },
      {
        "key": "agent-memory",
        "label": "Agent Memory",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/agent-memory",
        "permission": "autonomous-agents.agent-memory.view",
        "description": "Agent Memory workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 15,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.agent-memory.view"
          ]
        },
        "children": []
      },
      {
        "key": "agent-permissions",
        "label": "Agent Permissions",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/agent-permissions",
        "permission": "autonomous-agents.agent-permissions.view",
        "description": "Agent Permissions workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 16,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.agent-permissions.view"
          ]
        },
        "children": []
      },
      {
        "key": "agent-activity-logs",
        "label": "Agent Activity Logs",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/agent-activity-logs",
        "permission": "autonomous-agents.agent-activity-logs.view",
        "description": "Agent Activity Logs workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 17,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.agent-activity-logs.view"
          ]
        },
        "children": []
      },
      {
        "key": "agent-performance",
        "label": "Agent Performance",
        "parentKey": "autonomous-agents",
        "icon": "PanelRightOpen",
        "route": "/autonomous-agents/agent-performance",
        "permission": "autonomous-agents.agent-performance.view",
        "description": "Agent Performance workspace for the Autonomous Agents module.",
        "featureFlag": null,
        "status": "active",
        "order": 18,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-agents.agent-performance.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "autonomous-control",
    "label": "Autonomous Control",
    "parentKey": null,
    "icon": "SlidersHorizontal",
    "route": "/autonomous-control",
    "permission": "autonomous-control.view",
    "description": "Autonomous Control module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 12,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "autonomous-control.view"
      ]
    },
    "children": [
      {
        "key": "autonomy-dashboard",
        "label": "Autonomy Dashboard",
        "parentKey": "autonomous-control",
        "icon": "PanelRightOpen",
        "route": "/autonomous-control/autonomy-dashboard",
        "permission": "autonomous-control.autonomy-dashboard.view",
        "description": "Autonomy Dashboard workspace for the Autonomous Control module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-control.autonomy-dashboard.view"
          ]
        },
        "children": []
      },
      {
        "key": "autonomy-level",
        "label": "Autonomy Level",
        "parentKey": "autonomous-control",
        "icon": "PanelRightOpen",
        "route": "/autonomous-control/autonomy-level",
        "permission": "autonomous-control.autonomy-level.view",
        "description": "Autonomy Level workspace for the Autonomous Control module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-control.autonomy-level.view"
          ]
        },
        "children": []
      },
      {
        "key": "decision-rules",
        "label": "Decision Rules",
        "parentKey": "autonomous-control",
        "icon": "PanelRightOpen",
        "route": "/autonomous-control/decision-rules",
        "permission": "autonomous-control.decision-rules.view",
        "description": "Decision Rules workspace for the Autonomous Control module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-control.decision-rules.view"
          ]
        },
        "children": []
      },
      {
        "key": "risk-policies",
        "label": "Risk Policies",
        "parentKey": "autonomous-control",
        "icon": "PanelRightOpen",
        "route": "/autonomous-control/risk-policies",
        "permission": "autonomous-control.risk-policies.view",
        "description": "Risk Policies workspace for the Autonomous Control module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-control.risk-policies.view"
          ]
        },
        "children": []
      },
      {
        "key": "auto-approval-rules",
        "label": "Auto-Approval Rules",
        "parentKey": "autonomous-control",
        "icon": "PanelRightOpen",
        "route": "/autonomous-control/auto-approval-rules",
        "permission": "autonomous-control.auto-approval-rules.view",
        "description": "Auto-Approval Rules workspace for the Autonomous Control module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-control.auto-approval-rules.view"
          ]
        },
        "children": []
      },
      {
        "key": "publishing-guardrails",
        "label": "Publishing Guardrails",
        "parentKey": "autonomous-control",
        "icon": "PanelRightOpen",
        "route": "/autonomous-control/publishing-guardrails",
        "permission": "autonomous-control.publishing-guardrails.view",
        "description": "Publishing Guardrails workspace for the Autonomous Control module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-control.publishing-guardrails.view"
          ]
        },
        "children": []
      },
      {
        "key": "exception-queue",
        "label": "Exception Queue",
        "parentKey": "autonomous-control",
        "icon": "PanelRightOpen",
        "route": "/autonomous-control/exception-queue",
        "permission": "autonomous-control.exception-queue.view",
        "description": "Exception Queue workspace for the Autonomous Control module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-control.exception-queue.view"
          ]
        },
        "children": []
      },
      {
        "key": "failsafe-controls",
        "label": "Failsafe Controls",
        "parentKey": "autonomous-control",
        "icon": "PanelRightOpen",
        "route": "/autonomous-control/failsafe-controls",
        "permission": "autonomous-control.failsafe-controls.view",
        "description": "Failsafe Controls workspace for the Autonomous Control module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-control.failsafe-controls.view"
          ]
        },
        "children": []
      },
      {
        "key": "human-override",
        "label": "Human Override",
        "parentKey": "autonomous-control",
        "icon": "PanelRightOpen",
        "route": "/autonomous-control/human-override",
        "permission": "autonomous-control.human-override.view",
        "description": "Human Override workspace for the Autonomous Control module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-control.human-override.view"
          ]
        },
        "children": []
      },
      {
        "key": "execution-logs",
        "label": "Execution Logs",
        "parentKey": "autonomous-control",
        "icon": "PanelRightOpen",
        "route": "/autonomous-control/execution-logs",
        "permission": "autonomous-control.execution-logs.view",
        "description": "Execution Logs workspace for the Autonomous Control module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-control.execution-logs.view"
          ]
        },
        "children": []
      },
      {
        "key": "learning-settings",
        "label": "Learning Settings",
        "parentKey": "autonomous-control",
        "icon": "PanelRightOpen",
        "route": "/autonomous-control/learning-settings",
        "permission": "autonomous-control.learning-settings.view",
        "description": "Learning Settings workspace for the Autonomous Control module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "autonomous-control.learning-settings.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "knowledge-base",
    "label": "Knowledge Base",
    "parentKey": null,
    "icon": "BookOpen",
    "route": "/knowledge-base",
    "permission": "knowledge-base.view",
    "description": "Knowledge Base module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 13,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "knowledge-base.view"
      ]
    },
    "children": [
      {
        "key": "business-profile",
        "label": "Business Profile",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/business-profile",
        "permission": "knowledge-base.business-profile.view",
        "description": "Business Profile workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.business-profile.view"
          ]
        },
        "children": []
      },
      {
        "key": "documents",
        "label": "Documents",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/documents",
        "permission": "knowledge-base.documents.view",
        "description": "Documents workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.documents.view"
          ]
        },
        "children": []
      },
      {
        "key": "uploaded-files",
        "label": "Uploaded Files",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/uploaded-files",
        "permission": "knowledge-base.uploaded-files.view",
        "description": "Uploaded Files workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.uploaded-files.view"
          ]
        },
        "children": []
      },
      {
        "key": "prompt-library",
        "label": "Prompt Library",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/prompt-library",
        "permission": "knowledge-base.prompt-library.view",
        "description": "Prompt Library workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.prompt-library.view"
          ]
        },
        "children": []
      },
      {
        "key": "memory-center",
        "label": "Memory Center",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/memory-center",
        "permission": "knowledge-base.memory-center.view",
        "description": "Memory Center workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.memory-center.view"
          ]
        },
        "children": []
      },
      {
        "key": "content-history",
        "label": "Content History",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/content-history",
        "permission": "knowledge-base.content-history.view",
        "description": "Content History workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.content-history.view"
          ]
        },
        "children": []
      },
      {
        "key": "case-studies",
        "label": "Case Studies",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/case-studies",
        "permission": "knowledge-base.case-studies.view",
        "description": "Case Studies workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.case-studies.view"
          ]
        },
        "children": []
      },
      {
        "key": "products-and-services",
        "label": "Products & Services",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/products-and-services",
        "permission": "knowledge-base.products-and-services.view",
        "description": "Products & Services workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.products-and-services.view"
          ]
        },
        "children": []
      },
      {
        "key": "approved-phrases",
        "label": "Approved Phrases",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/approved-phrases",
        "permission": "knowledge-base.approved-phrases.view",
        "description": "Approved Phrases workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.approved-phrases.view"
          ]
        },
        "children": []
      },
      {
        "key": "restricted-phrases",
        "label": "Restricted Phrases",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/restricted-phrases",
        "permission": "knowledge-base.restricted-phrases.view",
        "description": "Restricted Phrases workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.restricted-phrases.view"
          ]
        },
        "children": []
      },
      {
        "key": "saved-insights",
        "label": "Saved Insights",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/saved-insights",
        "permission": "knowledge-base.saved-insights.view",
        "description": "Saved Insights workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.saved-insights.view"
          ]
        },
        "children": []
      },
      {
        "key": "knowledge-search",
        "label": "Knowledge Search",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/knowledge-search",
        "permission": "knowledge-base.knowledge-search.view",
        "description": "Knowledge Search workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.knowledge-search.view"
          ]
        },
        "children": []
      },
      {
        "key": "knowledge-tags",
        "label": "Knowledge Tags",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/knowledge-tags",
        "permission": "knowledge-base.knowledge-tags.view",
        "description": "Knowledge Tags workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 13,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.knowledge-tags.view"
          ]
        },
        "children": []
      },
      {
        "key": "knowledge-settings",
        "label": "Knowledge Settings",
        "parentKey": "knowledge-base",
        "icon": "PanelRightOpen",
        "route": "/knowledge-base/knowledge-settings",
        "permission": "knowledge-base.knowledge-settings.view",
        "description": "Knowledge Settings workspace for the Knowledge Base module.",
        "featureFlag": null,
        "status": "active",
        "order": 14,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "knowledge-base.knowledge-settings.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "workflow-engine",
    "label": "Workflow Engine",
    "parentKey": null,
    "icon": "Workflow",
    "route": "/workflow-engine",
    "permission": "workflow-engine.view",
    "description": "Workflow Engine module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 14,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "workflow-engine.view"
      ]
    },
    "children": [
      {
        "key": "workflow-dashboard",
        "label": "Workflow Dashboard",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/workflow-dashboard",
        "permission": "workflow-engine.workflow-dashboard.view",
        "description": "Workflow Dashboard workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.workflow-dashboard.view"
          ]
        },
        "children": []
      },
      {
        "key": "workflow-builder",
        "label": "Workflow Builder",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/workflow-builder",
        "permission": "workflow-engine.workflow-builder.view",
        "description": "Workflow Builder workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.workflow-builder.view"
          ]
        },
        "children": []
      },
      {
        "key": "approval-workflows",
        "label": "Approval Workflows",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/approval-workflows",
        "permission": "workflow-engine.approval-workflows.view",
        "description": "Approval Workflows workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.approval-workflows.view"
          ]
        },
        "children": []
      },
      {
        "key": "automation-rules",
        "label": "Automation Rules",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/automation-rules",
        "permission": "workflow-engine.automation-rules.view",
        "description": "Automation Rules workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.automation-rules.view"
          ]
        },
        "children": []
      },
      {
        "key": "review-queue",
        "label": "Review Queue",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/review-queue",
        "permission": "workflow-engine.review-queue.view",
        "description": "Review Queue workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.review-queue.view"
          ]
        },
        "children": []
      },
      {
        "key": "task-assignment",
        "label": "Task Assignment",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/task-assignment",
        "permission": "workflow-engine.task-assignment.view",
        "description": "Task Assignment workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.task-assignment.view"
          ]
        },
        "children": []
      },
      {
        "key": "scheduled-tasks",
        "label": "Scheduled Tasks",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/scheduled-tasks",
        "permission": "workflow-engine.scheduled-tasks.view",
        "description": "Scheduled Tasks workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.scheduled-tasks.view"
          ]
        },
        "children": []
      },
      {
        "key": "notifications",
        "label": "Notifications",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/notifications",
        "permission": "workflow-engine.notifications.view",
        "description": "Notifications workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.notifications.view"
          ]
        },
        "children": []
      },
      {
        "key": "escalations",
        "label": "Escalations",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/escalations",
        "permission": "workflow-engine.escalations.view",
        "description": "Escalations workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.escalations.view"
          ]
        },
        "children": []
      },
      {
        "key": "execution-history",
        "label": "Execution History",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/execution-history",
        "permission": "workflow-engine.execution-history.view",
        "description": "Execution History workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.execution-history.view"
          ]
        },
        "children": []
      },
      {
        "key": "version-control",
        "label": "Version Control",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/version-control",
        "permission": "workflow-engine.version-control.view",
        "description": "Version Control workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.version-control.view"
          ]
        },
        "children": []
      },
      {
        "key": "audit-trail",
        "label": "Audit Trail",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/audit-trail",
        "permission": "workflow-engine.audit-trail.view",
        "description": "Audit Trail workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.audit-trail.view"
          ]
        },
        "children": []
      },
      {
        "key": "workflow-templates",
        "label": "Workflow Templates",
        "parentKey": "workflow-engine",
        "icon": "PanelRightOpen",
        "route": "/workflow-engine/workflow-templates",
        "permission": "workflow-engine.workflow-templates.view",
        "description": "Workflow Templates workspace for the Workflow Engine module.",
        "featureFlag": null,
        "status": "active",
        "order": 13,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "workflow-engine.workflow-templates.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "analytics-center",
    "label": "Analytics Center",
    "parentKey": null,
    "icon": "ChartNoAxesCombined",
    "route": "/analytics-center",
    "permission": "analytics-center.view",
    "description": "Analytics Center module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 15,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "analytics-center.view"
      ]
    },
    "children": [
      {
        "key": "analytics-dashboard",
        "label": "Analytics Dashboard",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/analytics-dashboard",
        "permission": "analytics-center.analytics-dashboard.view",
        "description": "Analytics Dashboard workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.analytics-dashboard.view"
          ]
        },
        "children": []
      },
      {
        "key": "content-analytics",
        "label": "Content Analytics",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/content-analytics",
        "permission": "analytics-center.content-analytics.view",
        "description": "Content Analytics workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.content-analytics.view"
          ]
        },
        "children": []
      },
      {
        "key": "social-analytics",
        "label": "Social Analytics",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/social-analytics",
        "permission": "analytics-center.social-analytics.view",
        "description": "Social Analytics workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.social-analytics.view"
          ]
        },
        "children": []
      },
      {
        "key": "platform-analytics",
        "label": "Platform Analytics",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/platform-analytics",
        "permission": "analytics-center.platform-analytics.view",
        "description": "Platform Analytics workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.platform-analytics.view"
          ]
        },
        "children": []
      },
      {
        "key": "audience-growth",
        "label": "Audience Growth",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/audience-growth",
        "permission": "analytics-center.audience-growth.view",
        "description": "Audience Growth workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.audience-growth.view"
          ]
        },
        "children": []
      },
      {
        "key": "engagement-reports",
        "label": "Engagement Reports",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/engagement-reports",
        "permission": "analytics-center.engagement-reports.view",
        "description": "Engagement Reports workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.engagement-reports.view"
          ]
        },
        "children": []
      },
      {
        "key": "campaign-performance",
        "label": "Campaign Performance",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/campaign-performance",
        "permission": "analytics-center.campaign-performance.view",
        "description": "Campaign Performance workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.campaign-performance.view"
          ]
        },
        "children": []
      },
      {
        "key": "lead-analytics",
        "label": "Lead Analytics",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/lead-analytics",
        "permission": "analytics-center.lead-analytics.view",
        "description": "Lead Analytics workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.lead-analytics.view"
          ]
        },
        "children": []
      },
      {
        "key": "best-performing-topics",
        "label": "Best Performing Topics",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/best-performing-topics",
        "permission": "analytics-center.best-performing-topics.view",
        "description": "Best Performing Topics workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.best-performing-topics.view"
          ]
        },
        "children": []
      },
      {
        "key": "best-performing-formats",
        "label": "Best Performing Formats",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/best-performing-formats",
        "permission": "analytics-center.best-performing-formats.view",
        "description": "Best Performing Formats workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.best-performing-formats.view"
          ]
        },
        "children": []
      },
      {
        "key": "best-posting-times",
        "label": "Best Posting Times",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/best-posting-times",
        "permission": "analytics-center.best-posting-times.view",
        "description": "Best Posting Times workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.best-posting-times.view"
          ]
        },
        "children": []
      },
      {
        "key": "ai-recommendations",
        "label": "AI Recommendations",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/ai-recommendations",
        "permission": "analytics-center.ai-recommendations.view",
        "description": "AI Recommendations workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.ai-recommendations.view"
          ]
        },
        "children": []
      },
      {
        "key": "reports",
        "label": "Reports",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/reports",
        "permission": "analytics-center.reports.view",
        "description": "Reports workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 13,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.reports.view"
          ]
        },
        "children": []
      },
      {
        "key": "export-center",
        "label": "Export Center",
        "parentKey": "analytics-center",
        "icon": "PanelRightOpen",
        "route": "/analytics-center/export-center",
        "permission": "analytics-center.export-center.view",
        "description": "Export Center workspace for the Analytics Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 14,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "analytics-center.export-center.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "integration-hub",
    "label": "Integration Hub",
    "parentKey": null,
    "icon": "Cable",
    "route": "/integration-hub",
    "permission": "integration-hub.view",
    "description": "Integration Hub module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 16,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "integration-hub.view"
      ]
    },
    "children": [
      {
        "key": "integration-dashboard",
        "label": "Integration Dashboard",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/integration-dashboard",
        "permission": "integration-hub.integration-dashboard.view",
        "description": "Integration Dashboard workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.integration-dashboard.view"
          ]
        },
        "children": []
      },
      {
        "key": "social-integrations",
        "label": "Social Integrations",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/social-integrations",
        "permission": "integration-hub.social-integrations.view",
        "description": "Social Integrations workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.social-integrations.view"
          ]
        },
        "children": []
      },
      {
        "key": "linkedin",
        "label": "LinkedIn",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/linkedin",
        "permission": "integration-hub.linkedin.view",
        "description": "LinkedIn workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.linkedin.view"
          ]
        },
        "children": []
      },
      {
        "key": "facebook",
        "label": "Facebook",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/facebook",
        "permission": "integration-hub.facebook.view",
        "description": "Facebook workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.facebook.view"
          ]
        },
        "children": []
      },
      {
        "key": "instagram",
        "label": "Instagram",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/instagram",
        "permission": "integration-hub.instagram.view",
        "description": "Instagram workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.instagram.view"
          ]
        },
        "children": []
      },
      {
        "key": "x-twitter",
        "label": "X / Twitter",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/x-twitter",
        "permission": "integration-hub.x-twitter.view",
        "description": "X / Twitter workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.x-twitter.view"
          ]
        },
        "children": []
      },
      {
        "key": "youtube",
        "label": "YouTube",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/youtube",
        "permission": "integration-hub.youtube.view",
        "description": "YouTube workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.youtube.view"
          ]
        },
        "children": []
      },
      {
        "key": "tiktok",
        "label": "TikTok",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/tiktok",
        "permission": "integration-hub.tiktok.view",
        "description": "TikTok workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.tiktok.view"
          ]
        },
        "children": []
      },
      {
        "key": "threads",
        "label": "Threads",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/threads",
        "permission": "integration-hub.threads.view",
        "description": "Threads workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.threads.view"
          ]
        },
        "children": []
      },
      {
        "key": "email-integrations",
        "label": "Email Integrations",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/email-integrations",
        "permission": "integration-hub.email-integrations.view",
        "description": "Email Integrations workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.email-integrations.view"
          ]
        },
        "children": []
      },
      {
        "key": "gmail",
        "label": "Gmail",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/gmail",
        "permission": "integration-hub.gmail.view",
        "description": "Gmail workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.gmail.view"
          ]
        },
        "children": []
      },
      {
        "key": "outlook",
        "label": "Outlook",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/outlook",
        "permission": "integration-hub.outlook.view",
        "description": "Outlook workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.outlook.view"
          ]
        },
        "children": []
      },
      {
        "key": "calendar-integrations",
        "label": "Calendar Integrations",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/calendar-integrations",
        "permission": "integration-hub.calendar-integrations.view",
        "description": "Calendar Integrations workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 13,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.calendar-integrations.view"
          ]
        },
        "children": []
      },
      {
        "key": "google-calendar",
        "label": "Google Calendar",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/google-calendar",
        "permission": "integration-hub.google-calendar.view",
        "description": "Google Calendar workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 14,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.google-calendar.view"
          ]
        },
        "children": []
      },
      {
        "key": "microsoft-calendar",
        "label": "Microsoft Calendar",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/microsoft-calendar",
        "permission": "integration-hub.microsoft-calendar.view",
        "description": "Microsoft Calendar workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 15,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.microsoft-calendar.view"
          ]
        },
        "children": []
      },
      {
        "key": "cloud-storage",
        "label": "Cloud Storage",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/cloud-storage",
        "permission": "integration-hub.cloud-storage.view",
        "description": "Cloud Storage workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 16,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.cloud-storage.view"
          ]
        },
        "children": []
      },
      {
        "key": "google-drive",
        "label": "Google Drive",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/google-drive",
        "permission": "integration-hub.google-drive.view",
        "description": "Google Drive workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 17,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.google-drive.view"
          ]
        },
        "children": []
      },
      {
        "key": "onedrive",
        "label": "OneDrive",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/onedrive",
        "permission": "integration-hub.onedrive.view",
        "description": "OneDrive workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 18,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.onedrive.view"
          ]
        },
        "children": []
      },
      {
        "key": "dropbox",
        "label": "Dropbox",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/dropbox",
        "permission": "integration-hub.dropbox.view",
        "description": "Dropbox workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 19,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.dropbox.view"
          ]
        },
        "children": []
      },
      {
        "key": "communication",
        "label": "Communication",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/communication",
        "permission": "integration-hub.communication.view",
        "description": "Communication workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 20,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.communication.view"
          ]
        },
        "children": []
      },
      {
        "key": "slack",
        "label": "Slack",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/slack",
        "permission": "integration-hub.slack.view",
        "description": "Slack workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 21,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.slack.view"
          ]
        },
        "children": []
      },
      {
        "key": "microsoft-teams",
        "label": "Microsoft Teams",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/microsoft-teams",
        "permission": "integration-hub.microsoft-teams.view",
        "description": "Microsoft Teams workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 22,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.microsoft-teams.view"
          ]
        },
        "children": []
      },
      {
        "key": "whatsapp-business",
        "label": "WhatsApp Business",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/whatsapp-business",
        "permission": "integration-hub.whatsapp-business.view",
        "description": "WhatsApp Business workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 23,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.whatsapp-business.view"
          ]
        },
        "children": []
      },
      {
        "key": "business-systems",
        "label": "Business Systems",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/business-systems",
        "permission": "integration-hub.business-systems.view",
        "description": "Business Systems workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 24,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.business-systems.view"
          ]
        },
        "children": []
      },
      {
        "key": "crm",
        "label": "CRM",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/crm",
        "permission": "integration-hub.crm.view",
        "description": "CRM workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 25,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.crm.view"
          ]
        },
        "children": []
      },
      {
        "key": "erp",
        "label": "ERP",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/erp",
        "permission": "integration-hub.erp.view",
        "description": "ERP workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 26,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.erp.view"
          ]
        },
        "children": []
      },
      {
        "key": "cms-website",
        "label": "CMS / Website",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/cms-website",
        "permission": "integration-hub.cms-website.view",
        "description": "CMS / Website workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 27,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.cms-website.view"
          ]
        },
        "children": []
      },
      {
        "key": "payment-integrations",
        "label": "Payment Integrations",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/payment-integrations",
        "permission": "integration-hub.payment-integrations.view",
        "description": "Payment Integrations workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 28,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.payment-integrations.view"
          ]
        },
        "children": []
      },
      {
        "key": "paystack",
        "label": "Paystack",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/paystack",
        "permission": "integration-hub.paystack.view",
        "description": "Paystack workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 29,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.paystack.view"
          ]
        },
        "children": []
      },
      {
        "key": "flutterwave",
        "label": "Flutterwave",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/flutterwave",
        "permission": "integration-hub.flutterwave.view",
        "description": "Flutterwave workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 30,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.flutterwave.view"
          ]
        },
        "children": []
      },
      {
        "key": "stripe",
        "label": "Stripe",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/stripe",
        "permission": "integration-hub.stripe.view",
        "description": "Stripe workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 31,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.stripe.view"
          ]
        },
        "children": []
      },
      {
        "key": "sms-gateway",
        "label": "SMS Gateway",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/sms-gateway",
        "permission": "integration-hub.sms-gateway.view",
        "description": "SMS Gateway workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 32,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.sms-gateway.view"
          ]
        },
        "children": []
      },
      {
        "key": "api-keys",
        "label": "API Keys",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/api-keys",
        "permission": "integration-hub.api-keys.view",
        "description": "API Keys workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 33,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.api-keys.view"
          ]
        },
        "children": []
      },
      {
        "key": "webhooks",
        "label": "Webhooks",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/webhooks",
        "permission": "integration-hub.webhooks.view",
        "description": "Webhooks workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 34,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.webhooks.view"
          ]
        },
        "children": []
      },
      {
        "key": "oauth-connections",
        "label": "OAuth Connections",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/oauth-connections",
        "permission": "integration-hub.oauth-connections.view",
        "description": "OAuth Connections workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 35,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.oauth-connections.view"
          ]
        },
        "children": []
      },
      {
        "key": "integration-logs",
        "label": "Integration Logs",
        "parentKey": "integration-hub",
        "icon": "PanelRightOpen",
        "route": "/integration-hub/integration-logs",
        "permission": "integration-hub.integration-logs.view",
        "description": "Integration Logs workspace for the Integration Hub module.",
        "featureFlag": null,
        "status": "active",
        "order": 36,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "integration-hub.integration-logs.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "notification-center",
    "label": "Notification Center",
    "parentKey": null,
    "icon": "Bell",
    "route": "/notification-center",
    "permission": "notification-center.view",
    "description": "Notification Center module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 17,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "notification-center.view"
      ]
    },
    "children": [
      {
        "key": "all-notifications",
        "label": "All Notifications",
        "parentKey": "notification-center",
        "icon": "PanelRightOpen",
        "route": "/notification-center/all-notifications",
        "permission": "notification-center.all-notifications.view",
        "description": "All Notifications workspace for the Notification Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "notification-center.all-notifications.view"
          ]
        },
        "children": []
      },
      {
        "key": "task-notifications",
        "label": "Task Notifications",
        "parentKey": "notification-center",
        "icon": "PanelRightOpen",
        "route": "/notification-center/task-notifications",
        "permission": "notification-center.task-notifications.view",
        "description": "Task Notifications workspace for the Notification Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "notification-center.task-notifications.view"
          ]
        },
        "children": []
      },
      {
        "key": "approval-notifications",
        "label": "Approval Notifications",
        "parentKey": "notification-center",
        "icon": "PanelRightOpen",
        "route": "/notification-center/approval-notifications",
        "permission": "notification-center.approval-notifications.view",
        "description": "Approval Notifications workspace for the Notification Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "notification-center.approval-notifications.view"
          ]
        },
        "children": []
      },
      {
        "key": "publishing-alerts",
        "label": "Publishing Alerts",
        "parentKey": "notification-center",
        "icon": "PanelRightOpen",
        "route": "/notification-center/publishing-alerts",
        "permission": "notification-center.publishing-alerts.view",
        "description": "Publishing Alerts workspace for the Notification Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "notification-center.publishing-alerts.view"
          ]
        },
        "children": []
      },
      {
        "key": "integration-alerts",
        "label": "Integration Alerts",
        "parentKey": "notification-center",
        "icon": "PanelRightOpen",
        "route": "/notification-center/integration-alerts",
        "permission": "notification-center.integration-alerts.view",
        "description": "Integration Alerts workspace for the Notification Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "notification-center.integration-alerts.view"
          ]
        },
        "children": []
      },
      {
        "key": "agent-alerts",
        "label": "Agent Alerts",
        "parentKey": "notification-center",
        "icon": "PanelRightOpen",
        "route": "/notification-center/agent-alerts",
        "permission": "notification-center.agent-alerts.view",
        "description": "Agent Alerts workspace for the Notification Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "notification-center.agent-alerts.view"
          ]
        },
        "children": []
      },
      {
        "key": "system-alerts",
        "label": "System Alerts",
        "parentKey": "notification-center",
        "icon": "PanelRightOpen",
        "route": "/notification-center/system-alerts",
        "permission": "notification-center.system-alerts.view",
        "description": "System Alerts workspace for the Notification Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "notification-center.system-alerts.view"
          ]
        },
        "children": []
      },
      {
        "key": "notification-settings",
        "label": "Notification Settings",
        "parentKey": "notification-center",
        "icon": "PanelRightOpen",
        "route": "/notification-center/notification-settings",
        "permission": "notification-center.notification-settings.view",
        "description": "Notification Settings workspace for the Notification Center module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "notification-center.notification-settings.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "user-administration",
    "label": "User Administration",
    "parentKey": null,
    "icon": "Users",
    "route": "/user-administration",
    "permission": "user-administration.view",
    "description": "User Administration module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 18,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "user-administration.view"
      ]
    },
    "children": [
      {
        "key": "users",
        "label": "Users",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/users",
        "permission": "user-administration.users.view",
        "description": "Users workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.users.view"
          ]
        },
        "children": []
      },
      {
        "key": "user-profiles",
        "label": "User Profiles",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/user-profiles",
        "permission": "user-administration.user-profiles.view",
        "description": "User Profiles workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.user-profiles.view"
          ]
        },
        "children": []
      },
      {
        "key": "teams",
        "label": "Teams",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/teams",
        "permission": "user-administration.teams.view",
        "description": "Teams workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.teams.view"
          ]
        },
        "children": []
      },
      {
        "key": "organizations",
        "label": "Organizations",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/organizations",
        "permission": "user-administration.organizations.view",
        "description": "Organizations workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.organizations.view"
          ]
        },
        "children": []
      },
      {
        "key": "workspaces",
        "label": "Workspaces",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/workspaces",
        "permission": "user-administration.workspaces.view",
        "description": "Workspaces workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.workspaces.view"
          ]
        },
        "children": []
      },
      {
        "key": "roles",
        "label": "Roles",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/roles",
        "permission": "user-administration.roles.view",
        "description": "Roles workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.roles.view"
          ]
        },
        "children": []
      },
      {
        "key": "permissions",
        "label": "Permissions",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/permissions",
        "permission": "user-administration.permissions.view",
        "description": "Permissions workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.permissions.view"
          ]
        },
        "children": []
      },
      {
        "key": "access-control",
        "label": "Access Control",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/access-control",
        "permission": "user-administration.access-control.view",
        "description": "Access Control workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.access-control.view"
          ]
        },
        "children": []
      },
      {
        "key": "subscription-plans",
        "label": "Subscription Plans",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/subscription-plans",
        "permission": "user-administration.subscription-plans.view",
        "description": "Subscription Plans workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.subscription-plans.view"
          ]
        },
        "children": []
      },
      {
        "key": "billing",
        "label": "Billing",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/billing",
        "permission": "user-administration.billing.view",
        "description": "Billing workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.billing.view"
          ]
        },
        "children": []
      },
      {
        "key": "invoices",
        "label": "Invoices",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/invoices",
        "permission": "user-administration.invoices.view",
        "description": "Invoices workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.invoices.view"
          ]
        },
        "children": []
      },
      {
        "key": "usage-limits",
        "label": "Usage Limits",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/usage-limits",
        "permission": "user-administration.usage-limits.view",
        "description": "Usage Limits workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.usage-limits.view"
          ]
        },
        "children": []
      },
      {
        "key": "audit-logs",
        "label": "Audit Logs",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/audit-logs",
        "permission": "user-administration.audit-logs.view",
        "description": "Audit Logs workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 13,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.audit-logs.view"
          ]
        },
        "children": []
      },
      {
        "key": "activity-logs",
        "label": "Activity Logs",
        "parentKey": "user-administration",
        "icon": "PanelRightOpen",
        "route": "/user-administration/activity-logs",
        "permission": "user-administration.activity-logs.view",
        "description": "Activity Logs workspace for the User Administration module.",
        "featureFlag": null,
        "status": "active",
        "order": 14,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "user-administration.activity-logs.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "security-compliance",
    "label": "Security & Compliance",
    "parentKey": null,
    "icon": "ShieldCheck",
    "route": "/security-compliance",
    "permission": "security-compliance.view",
    "description": "Security & Compliance module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 19,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "security-compliance.view"
      ]
    },
    "children": [
      {
        "key": "login-security",
        "label": "Login Security",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/login-security",
        "permission": "security-compliance.login-security.view",
        "description": "Login Security workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.login-security.view"
          ]
        },
        "children": []
      },
      {
        "key": "multi-factor-authentication",
        "label": "Multi-Factor Authentication",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/multi-factor-authentication",
        "permission": "security-compliance.multi-factor-authentication.view",
        "description": "Multi-Factor Authentication workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.multi-factor-authentication.view"
          ]
        },
        "children": []
      },
      {
        "key": "oauth-tokens",
        "label": "OAuth Tokens",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/oauth-tokens",
        "permission": "security-compliance.oauth-tokens.view",
        "description": "OAuth Tokens workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.oauth-tokens.view"
          ]
        },
        "children": []
      },
      {
        "key": "api-security",
        "label": "API Security",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/api-security",
        "permission": "security-compliance.api-security.view",
        "description": "API Security workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.api-security.view"
          ]
        },
        "children": []
      },
      {
        "key": "data-privacy",
        "label": "Data Privacy",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/data-privacy",
        "permission": "security-compliance.data-privacy.view",
        "description": "Data Privacy workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.data-privacy.view"
          ]
        },
        "children": []
      },
      {
        "key": "content-moderation",
        "label": "Content Moderation",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/content-moderation",
        "permission": "security-compliance.content-moderation.view",
        "description": "Content Moderation workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.content-moderation.view"
          ]
        },
        "children": []
      },
      {
        "key": "compliance-rules",
        "label": "Compliance Rules",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/compliance-rules",
        "permission": "security-compliance.compliance-rules.view",
        "description": "Compliance Rules workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.compliance-rules.view"
          ]
        },
        "children": []
      },
      {
        "key": "tenant-isolation",
        "label": "Tenant Isolation",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/tenant-isolation",
        "permission": "security-compliance.tenant-isolation.view",
        "description": "Tenant Isolation workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.tenant-isolation.view"
          ]
        },
        "children": []
      },
      {
        "key": "backup-and-recovery",
        "label": "Backup & Recovery",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/backup-and-recovery",
        "permission": "security-compliance.backup-and-recovery.view",
        "description": "Backup & Recovery workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.backup-and-recovery.view"
          ]
        },
        "children": []
      },
      {
        "key": "access-logs",
        "label": "Access Logs",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/access-logs",
        "permission": "security-compliance.access-logs.view",
        "description": "Access Logs workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.access-logs.view"
          ]
        },
        "children": []
      },
      {
        "key": "security-audit-trail",
        "label": "Security Audit Trail",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/security-audit-trail",
        "permission": "security-compliance.security-audit-trail.view",
        "description": "Security Audit Trail workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.security-audit-trail.view"
          ]
        },
        "children": []
      },
      {
        "key": "risk-alerts",
        "label": "Risk Alerts",
        "parentKey": "security-compliance",
        "icon": "PanelRightOpen",
        "route": "/security-compliance/risk-alerts",
        "permission": "security-compliance.risk-alerts.view",
        "description": "Risk Alerts workspace for the Security & Compliance module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "security-compliance.risk-alerts.view"
          ]
        },
        "children": []
      }
    ]
  },
  {
    "key": "settings",
    "label": "Settings",
    "parentKey": null,
    "icon": "Settings",
    "route": "/settings",
    "permission": "settings.view",
    "description": "Settings module for CACSMS Autonomous.",
    "featureFlag": null,
    "status": "active",
    "order": 20,
    "visibilityRules": {
      "roles": [
        "owner",
        "admin",
        "member"
      ],
      "permissions": [
        "settings.view"
      ]
    },
    "children": [
      {
        "key": "general-settings",
        "label": "General Settings",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/general-settings",
        "permission": "settings.general-settings.view",
        "description": "General Settings workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 1,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.general-settings.view"
          ]
        },
        "children": []
      },
      {
        "key": "workspace-settings",
        "label": "Workspace Settings",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/workspace-settings",
        "permission": "settings.workspace-settings.view",
        "description": "Workspace Settings workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 2,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.workspace-settings.view"
          ]
        },
        "children": []
      },
      {
        "key": "brand-settings",
        "label": "Brand Settings",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/brand-settings",
        "permission": "settings.brand-settings.view",
        "description": "Brand Settings workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 3,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.brand-settings.view"
          ]
        },
        "children": []
      },
      {
        "key": "ai-settings",
        "label": "AI Settings",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/ai-settings",
        "permission": "settings.ai-settings.view",
        "description": "AI Settings workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 4,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.ai-settings.view"
          ]
        },
        "children": []
      },
      {
        "key": "agent-settings",
        "label": "Agent Settings",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/agent-settings",
        "permission": "settings.agent-settings.view",
        "description": "Agent Settings workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 5,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.agent-settings.view"
          ]
        },
        "children": []
      },
      {
        "key": "publishing-settings",
        "label": "Publishing Settings",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/publishing-settings",
        "permission": "settings.publishing-settings.view",
        "description": "Publishing Settings workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 6,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.publishing-settings.view"
          ]
        },
        "children": []
      },
      {
        "key": "notification-settings",
        "label": "Notification Settings",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/notification-settings",
        "permission": "settings.notification-settings.view",
        "description": "Notification Settings workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 7,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.notification-settings.view"
          ]
        },
        "children": []
      },
      {
        "key": "appearance",
        "label": "Appearance",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/appearance",
        "permission": "settings.appearance.view",
        "description": "Appearance workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 8,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.appearance.view"
          ]
        },
        "children": []
      },
      {
        "key": "language",
        "label": "Language",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/language",
        "permission": "settings.language.view",
        "description": "Language workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 9,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.language.view"
          ]
        },
        "children": []
      },
      {
        "key": "time-zone",
        "label": "Time Zone",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/time-zone",
        "permission": "settings.time-zone.view",
        "description": "Time Zone workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 10,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.time-zone.view"
          ]
        },
        "children": []
      },
      {
        "key": "backup-settings",
        "label": "Backup Settings",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/backup-settings",
        "permission": "settings.backup-settings.view",
        "description": "Backup Settings workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 11,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.backup-settings.view"
          ]
        },
        "children": []
      },
      {
        "key": "system-preferences",
        "label": "System Preferences",
        "parentKey": "settings",
        "icon": "PanelRightOpen",
        "route": "/settings/system-preferences",
        "permission": "settings.system-preferences.view",
        "description": "System Preferences workspace for the Settings module.",
        "featureFlag": null,
        "status": "active",
        "order": 12,
        "visibilityRules": {
          "roles": [
            "owner",
            "admin",
            "member"
          ],
          "permissions": [
            "settings.system-preferences.view"
          ]
        },
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
      parentKey: module.parentKey,
      route: module.route,
      permission: module.permission,
      icon: module.icon,
      description: module.description,
      featureFlag: module.featureFlag,
      status: module.status,
      order: module.order,
      visibilityRules: module.visibilityRules,
    },
    ...(module.children ?? []).flatMap((child) => [
      {
        key: child.key,
        label: child.label,
        parentKey: child.parentKey,
        route: child.route,
        permission: child.permission,
        icon: child.icon,
        description: child.description,
        featureFlag: child.featureFlag,
        status: child.status,
        order: child.order,
        visibilityRules: child.visibilityRules,
      },
      ...(child.children ?? []).map((nestedChild) => ({
        key: nestedChild.key,
        label: nestedChild.label,
        parentKey: nestedChild.parentKey,
        route: nestedChild.route,
        permission: nestedChild.permission,
        icon: nestedChild.icon,
        description: nestedChild.description,
        featureFlag: nestedChild.featureFlag,
        status: nestedChild.status,
        order: nestedChild.order,
        visibilityRules: nestedChild.visibilityRules,
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
