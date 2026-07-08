"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { MODULE_REGISTRY } from "../../../platform/registry/module-registry";

type RegistryItem = (typeof MODULE_REGISTRY)[number];

const primaryModuleKeys = [
  "dashboard",
  "content-platform",
  "creative-studio",
  "approval-center",
  "analytics-center",
  "knowledge-base",
  "research-center",
  "workflow-engine",
  "campaign-manager",
  "user-administration",
] as const;

const moduleIcons: Record<string, string> = {
  dashboard: "home",
  "content-platform": "doc",
  "creative-studio": "spark",
  "approval-center": "check",
  "analytics-center": "chart",
  "knowledge-base": "book",
  "research-center": "search",
  "workflow-engine": "flow",
  "campaign-manager": "send",
  "user-administration": "gear",
};

const metricCards = [
  { label: "Total Content", value: "1,234", change: "18.5%", tone: "blue", icon: "doc" },
  { label: "Active Campaigns", value: "56", change: "12.3%", tone: "green", icon: "megaphone" },
  { label: "Tasks in Progress", value: "89", change: "8.7%", tone: "amber", icon: "task" },
  { label: "Approvals Pending", value: "23", change: "4.3%", tone: "purple", icon: "users", down: true },
  { label: "System Health", value: "Excellent", detail: "All systems operational", tone: "green", icon: "shield" },
] as const;

const chartPoints = [8, 28, 38, 34, 48, 56, 52, 66, 79, 84, 88] as const;
const chartLabels = ["May 23", "May 24", "May 25", "May 26", "May 27", "May 28", "May 29"] as const;

const statusItems = [
  ["Draft", "32% (395)", "blue"],
  ["In Review", "18% (222)", "amber"],
  ["Approved", "25% (309)", "teal"],
  ["Published", "15% (185)", "green"],
  ["Archived", "10% (123)", "slate"],
] as const;

const insights = [
  {
    title: "Performance Opportunity",
    body: "Campaign engagement is 23% higher than average. Consider increasing budget allocation.",
    time: "2h ago",
    tone: "blue",
    icon: "chart",
  },
  {
    title: "Content Recommendation",
    body: "AI suggests creating more video content. Video engagement is trending up.",
    time: "4h ago",
    tone: "green",
    icon: "doc",
  },
  {
    title: "Workflow Optimization",
    body: "3 workflows can be automated to save ~12 hours per week.",
    time: "6h ago",
    tone: "amber",
    icon: "gear",
  },
] as const;

const activity = [
  ["Video Campaign Q2 was published", "Sarah Johnson", "10 min ago", "blue"],
  ["Blog Post: AI in Marketing submitted for approval", "Michael Chen", "25 min ago", "purple"],
  ["Product Launch Campaign created", "Emily Davis", "1 hr ago", "green"],
  ["Monthly Content Plan May 2025 updated", "James Wilson", "2 hr ago", "green"],
  ["Graphic Design: Banner Ad completed", "Lisa Anderson", "3 hr ago", "amber"],
] as const;

const campaigns = [
  ["Summer Sale 2025", "8.7%", "125.4K", "32%", "up"],
  ["Product Launch Q2", "6.3%", "98.7K", "18%", "up"],
  ["Brand Awareness", "4.9%", "75.2K", "15%", "up"],
  ["Customer Retention", "3.8%", "62.1K", "5%", "down"],
  ["New Features Promo", "3.1%", "45.8K", "8%", "up"],
] as const;

const quickActions = [
  ["Create Content", "doc", "blue"],
  ["New Campaign", "megaphone", "green"],
  ["Upload Media", "upload", "purple"],
  ["Create Workflow", "task", "amber"],
  ["Generate Report", "chart", "blue"],
  ["AI Assistant", "spark", "pink"],
] as const;

const commandItems = [
  "Generate Campaign",
  "Create Video",
  "Run Research",
  "Open Workflow",
  "Switch Workspace",
  "Publish Content",
  "Open Knowledge Base",
  "Search Documents",
  "Open Creative Studio",
] as const;

function findRoute(pathname: string) {
  for (const module of MODULE_REGISTRY) {
    if (pathname === "/" || pathname === module.route || pathname.startsWith(`${module.route}/`)) {
      return module;
    }
  }

  return MODULE_REGISTRY[0];
}

function flattenNavigation() {
  return MODULE_REGISTRY.flatMap((module) => [
    { label: module.label, route: module.route, type: "Module" },
    ...(module.children ?? []).flatMap((page) => [
      { label: page.label, route: page.route, type: "Page" },
      ...(page.children ?? []).map((nested) => ({ label: nested.label, route: nested.route, type: "Workspace" })),
    ]),
  ]);
}

function moduleInitials(label: string) {
  return label
    .replace("&", "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function iconToken(icon: string) {
  return <span className={`icon-token icon-${icon}`} aria-hidden="true" />;
}

function SidebarModule({ module, pathname, collapsed }: { module: RegistryItem; pathname: string; collapsed: boolean }) {
  const active = pathname === "/" ? module.key === "dashboard" : pathname === module.route || pathname.startsWith(`${module.route}/`);
  const showChildren = active && module.children?.length && !collapsed;
  const visibleChildren =
    module.key === "dashboard"
      ? module.children?.filter((child) => child.key !== "recent-activities").slice(0, 7)
      : module.children?.slice(0, 7);
  const moduleLabel = module.key === "user-administration" ? "System Administration" : module.label;

  return (
    <div className="nav-group" data-active={active}>
      <a className="nav-item" href={module.route}>
        <span className="nav-symbol">{iconToken(moduleIcons[module.key] ?? "square")}</span>
        {!collapsed && <span>{moduleLabel}</span>}
        {!collapsed && module.key === "approval-center" && <strong className="nav-badge">7</strong>}
        {!collapsed && module.key !== "dashboard" && <span className="nav-chevron">›</span>}
      </a>
      {showChildren && (
        <div className="nav-children">
          {visibleChildren?.map((child, index) => (
            <a className="nav-child" data-active={index === 0 || pathname === child.route} href={child.route} key={child.route}>
              <span>{child.label}</span>
              {child.key === "notifications" && <strong className="nav-badge">12</strong>}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function LineChart() {
  const points = chartPoints.map((value, index) => `${(index / (chartPoints.length - 1)) * 100},${100 - value}`).join(" ");

  return (
    <div className="line-chart">
      <div className="chart-y">
        <span>1K</span>
        <span>800</span>
        <span>600</span>
        <span>400</span>
        <span>200</span>
        <span>0</span>
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="Content production trend">
        <defs>
          <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        <polygon points={`0,100 ${points} 100,100`} fill="url(#trendFill)" />
        <polyline points={points} fill="none" stroke="#2563eb" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
        {chartPoints.map((value, index) => (
          <circle cx={(index / (chartPoints.length - 1)) * 100} cy={100 - value} fill="#2563eb" key={`${value}-${index}`} r="1.4" />
        ))}
      </svg>
      <div className="chart-x">
        {chartLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const route = useMemo(() => findRoute(pathname), [pathname]);
  const navigationItems = useMemo(() => flattenNavigation(), []);
  const primaryModules = primaryModuleKeys.map((key) => MODULE_REGISTRY.find((module) => module.key === key)).filter((module): module is RegistryItem => Boolean(module));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="dashboard-shell" data-collapsed={collapsed}>
      <aside className="dashboard-sidebar">
        <div className="brand-block">
          <div className="brand-cube">
            <span />
          </div>
          {!collapsed && (
            <div>
              <strong>CACSMS</strong>
              <span>AUTONOMOUS</span>
            </div>
          )}
        </div>

        <nav className="dashboard-nav" aria-label="Enterprise navigation">
          {primaryModules.map((module) => (
            <SidebarModule collapsed={collapsed} key={module.key} module={module} pathname={pathname} />
          ))}

          {!collapsed && (
            <div className="nav-secondary">
              <a className="nav-item" href="/dashboard">
                <span className="nav-symbol">{iconToken("star")}</span>
                <span>Favorites</span>
              </a>
              <a className="nav-item" href={route.route}>
                <span className="nav-symbol">{iconToken("clock")}</span>
                <span>Recently Viewed</span>
              </a>
            </div>
          )}
        </nav>

        <button className="collapse-control" onClick={() => setCollapsed((value) => !value)} type="button">
          <span>{collapsed ? "›" : "‹‹"}</span>
          {!collapsed && <span>Collapse Sidebar</span>}
        </button>
      </aside>

      <div className="dashboard-main">
        <header className="dashboard-topbar">
          <button className="menu-button" type="button" aria-label="Open menu">
            <span />
          </button>

          <button className="search-command" onClick={() => setCommandOpen(true)} type="button">
            {iconToken("search")}
            <span>Search anything...</span>
            <kbd>⌘ K</kbd>
          </button>

          <div className="topbar-actions">
            <button className="top-icon" type="button">{iconToken("spark")}</button>
            <button className="top-icon notification-icon" type="button">
              {iconToken("bell")}
              <strong>12</strong>
            </button>
            <button className="top-icon" type="button">?</button>
            <div className="user-profile">
              <div className="avatar-face" />
              <div>
                <strong>John Doe</strong>
                <span>System Administrator</span>
              </div>
              <span className="profile-chevron">⌄</span>
            </div>
          </div>
        </header>

        <main className="dashboard-content">
          <section className="dashboard-heading">
            <div>
              <h1>Dashboard Overview</h1>
              <p>Real-time overview of your autonomous operations</p>
            </div>
            <div className="heading-actions">
              <button type="button">{iconToken("calendar")} May 29, 2025 10:30 AM <span>⌄</span></button>
              <button type="button">{iconToken("sliders")} Customize</button>
            </div>
          </section>

          <section className="metric-strip">
            {metricCards.map((metric) => (
              <article className="dashboard-card metric-tile" data-tone={metric.tone} key={metric.label}>
                <div className="tile-icon">{iconToken(metric.icon)}</div>
                <div>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  {"detail" in metric ? (
                    <p>{metric.detail}</p>
                  ) : (
                    <p className={"down" in metric && metric.down ? "negative" : "positive"}>{"down" in metric && metric.down ? "↓" : "↑"} {metric.change} <em>vs last 7 days</em></p>
                  )}
                </div>
              </article>
            ))}
          </section>

          <section className="dashboard-grid">
            <div className="main-column">
              <article className="dashboard-card chart-card">
                <div className="card-heading">
                  <h2>Content Production Trend <span>ⓘ</span></h2>
                  <button type="button">Last 7 Days <span>⌄</span></button>
                </div>
                <LineChart />
              </article>

              <section className="lower-grid">
                <article className="dashboard-card activity-card">
                  <div className="card-heading">
                    <h2>{iconToken("activity")} Recent Activity <span>ⓘ</span></h2>
                  </div>
                  <div className="activity-list">
                    {activity.map(([title, author, time, tone]) => (
                      <div className="activity-row" data-tone={tone} key={title}>
                        <span className="row-icon">{iconToken("doc")}</span>
                        <div>
                          <strong>{title}</strong>
                          <small>by {author}</small>
                        </div>
                        <time>{time}</time>
                      </div>
                    ))}
                  </div>
                  <a className="card-link" href="/dashboard/activity-feed">View All Activity <span>→</span></a>
                </article>

                <article className="dashboard-card campaign-card">
                  <div className="card-heading">
                    <h2>{iconToken("trophy")} Top Performing Campaigns <span>ⓘ</span></h2>
                    <button type="button">Last 7 Days <span>⌄</span></button>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>Campaign</th>
                        <th>Engagement</th>
                        <th>Reach</th>
                        <th>Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map(([campaign, engagement, reach, performance, direction]) => (
                        <tr key={campaign}>
                          <td>{campaign}</td>
                          <td>{engagement}</td>
                          <td>{reach}</td>
                          <td className={direction === "up" ? "positive" : "negative"}>{direction === "up" ? "↑" : "↓"} {performance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <a className="card-link" href="/campaign-manager/campaign-performance">View All Campaigns <span>→</span></a>
                </article>
              </section>
            </div>

            <div className="middle-column">
              <article className="dashboard-card status-card">
                <div className="card-heading">
                  <h2>Content by Status <span>ⓘ</span></h2>
                  <button type="button">Last 7 Days <span>⌄</span></button>
                </div>
                <div className="status-body">
                  <div className="donut-chart">
                    <strong>1,234</strong>
                    <span>Total</span>
                  </div>
                  <div className="status-list">
                    {statusItems.map(([label, value, tone]) => (
                      <div className="status-row" data-tone={tone} key={label}>
                        <span />
                        <strong>{label}</strong>
                        <em>{value}</em>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            <aside className="side-column">
              <article className="dashboard-card insight-card">
                <div className="card-heading">
                  <h2>{iconToken("spark")} AI Insights</h2>
                  <a href="/analytics-center/ai-recommendations">View All</a>
                </div>
                <div className="insight-list">
                  {insights.map((insight) => (
                    <div className="insight-row" data-tone={insight.tone} key={insight.title}>
                      <span className="insight-icon">{iconToken(insight.icon)}</span>
                      <div>
                        <strong>{insight.title}</strong>
                        <p>{insight.body}</p>
                        <time>{insight.time}</time>
                      </div>
                    </div>
                  ))}
                </div>
                <a className="insight-button" href="/analytics-center/ai-recommendations">View All Insights <span>→</span></a>
              </article>

              <article className="dashboard-card quick-card">
                <div className="card-heading">
                  <h2>{iconToken("bolt")} Quick Actions</h2>
                </div>
                <div className="quick-grid">
                  {quickActions.map(([label, icon, tone]) => (
                    <button data-tone={tone} key={label} type="button">
                      {iconToken(icon)}
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </article>
            </aside>
          </section>

          <div className="route-slot" aria-hidden="true">{children}</div>
          <footer className="dashboard-footer">© 2025 CACSMS Autonomous. All rights reserved.</footer>
        </main>
      </div>

      {commandOpen && (
        <div className="command-overlay" role="dialog" aria-modal="true">
          <div className="command-palette">
            <div className="command-search">
              <input autoFocus placeholder="Search commands, pages, assets, workflows, agents..." />
              <button onClick={() => setCommandOpen(false)} type="button">Esc</button>
            </div>
            <div className="command-list">
              {commandItems.map((item) => (
                <button key={item} onClick={() => setCommandOpen(false)} type="button">{item}</button>
              ))}
              {navigationItems.slice(0, 12).map((item) => (
                <a href={item.route} key={item.route} onClick={() => setCommandOpen(false)}>
                  <span>{item.label}</span>
                  <small>{item.type}</small>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
