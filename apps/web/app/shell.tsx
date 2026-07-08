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

const activityMetricCards = [
  { label: "Total Activities", value: "1,248", change: "18.7%", tone: "blue", icon: "activity" },
  { label: "Completed", value: "892", change: "21.4%", tone: "green", icon: "check" },
  { label: "In Progress", value: "234", change: "12.6%", tone: "amber", icon: "clock" },
  { label: "By Users", value: "156", change: "15.3%", tone: "purple", icon: "users" },
  { label: "Failed", value: "22", change: "8.2%", tone: "red", icon: "shield", down: true },
] as const;

const taskMetricCards = [
  { label: "Total Tasks", value: "32", change: "8 more than yesterday", tone: "blue", icon: "calendar" },
  { label: "In Progress", value: "12", change: "37.5% of total", tone: "amber", icon: "clock", neutral: true },
  { label: "Completed", value: "18", change: "12% this week", tone: "green", icon: "check" },
  { label: "Overdue", value: "3", change: "25% from yesterday", tone: "red", icon: "warning", down: true },
  { label: "Due Today", value: "5", change: "15.6% of total", tone: "purple", icon: "calendar", purple: true },
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

const feedTimeline = [
  {
    time: "10:24 AM",
    title: "Video Campaign Q2 was published",
    body: "Campaign \"Q2 Product Launch\" has been successfully published.",
    user: "Sarah Johnson",
    tag: "Content Platform",
    ago: "5 min ago",
    tone: "blue",
    icon: "doc",
  },
  {
    time: "10:12 AM",
    title: "Blog Post submitted for approval",
    body: "Blog post \"AI in Marketing\" submitted to approval workflow.",
    user: "Michael Chen",
    tag: "Approval Center",
    ago: "17 min ago",
    tone: "green",
    icon: "check",
  },
  {
    time: "09:58 AM",
    title: "Product Launch Campaign created",
    body: "New campaign \"Product Launch Q2\" has been created.",
    user: "Emily Davis",
    tag: "Campaign Manager",
    ago: "31 min ago",
    tone: "amber",
    icon: "task",
  },
  {
    time: "09:45 AM",
    title: "Monthly Content Plan updated",
    body: "May 2025 content plan has been updated with 12 new items.",
    user: "James Wilson",
    tag: "Content Platform",
    ago: "44 min ago",
    tone: "purple",
    icon: "calendar",
  },
  {
    time: "09:32 AM",
    title: "Graphic Design completed",
    body: "Banner Ad design for \"Summer Sale 2025\" completed.",
    user: "Lisa Anderson",
    tag: "Creative Studio",
    ago: "57 min ago",
    tone: "green",
    icon: "image",
  },
  {
    time: "09:18 AM",
    title: "Workflow automation failed",
    body: "Auto-publish workflow failed for campaign \"Brand Awareness\".",
    user: "System",
    tag: "Workflow Engine",
    ago: "1 hr ago",
    tone: "red",
    icon: "warning",
  },
] as const;

const activityTypes = [
  ["Content Creation", "456", "36.5%", "blue"],
  ["Approvals", "298", "23.9%", "green"],
  ["Campaign Management", "234", "18.8%", "amber"],
  ["Workflow Operations", "156", "12.5%", "purple"],
  ["User Management", "67", "5.4%", "pink"],
  ["System Operations", "37", "3.0%", "teal"],
] as const;

const activeUsers = [
  ["Sarah Johnson", "Content Manager", "156", "18.6%", "up"],
  ["Michael Chen", "Marketing Manager", "142", "15.2%", "up"],
  ["Emily Davis", "Campaign Manager", "128", "12.7%", "up"],
  ["James Wilson", "Content Strategist", "98", "9.3%", "up"],
  ["Lisa Anderson", "Creative Director", "87", "2.1%", "down"],
] as const;

const taskTabs = [
  ["All Tasks", "32"],
  ["In Progress", "12"],
  ["Due Today", "5"],
  ["Overdue", "3"],
  ["Completed", "18"],
] as const;

const taskRows = [
  {
    title: "Review Q2 Product Launch Campaign",
    description: "Review and approve the final campaign assets",
    module: "Content Platform",
    moduleTone: "blue",
    priority: "High",
    priorityTone: "red",
    due: "Today\n11:30 AM",
    dueTone: "red",
    status: "In Progress",
    statusTone: "blue",
    icon: "doc",
    tone: "blue",
  },
  {
    title: "Approve Blog Post: AI in Marketing",
    description: "Review content and approve for publication",
    module: "Approval Center",
    moduleTone: "green",
    priority: "High",
    priorityTone: "red",
    due: "Today\n02:00 PM",
    dueTone: "red",
    status: "In Progress",
    statusTone: "blue",
    icon: "task",
    tone: "green",
  },
  {
    title: "Review Banner Ad Designs",
    description: "Review and provide feedback on banner ads",
    module: "Creative Studio",
    moduleTone: "amber",
    priority: "Medium",
    priorityTone: "amber",
    due: "Tomorrow\n10:00 AM",
    status: "Pending",
    statusTone: "amber",
    icon: "image",
    tone: "amber",
  },
  {
    title: "Plan June Content Calendar",
    description: "Create and finalize content calendar for June",
    module: "Content Platform",
    moduleTone: "blue",
    priority: "Medium",
    priorityTone: "amber",
    due: "May 31, 2025",
    status: "Pending",
    statusTone: "amber",
    icon: "calendar",
    tone: "purple",
  },
  {
    title: "Analyze Campaign Performance",
    description: "Review performance metrics and insights",
    module: "Analytics Center",
    moduleTone: "purple",
    priority: "Low",
    priorityTone: "green",
    due: "Jun 2, 2025",
    status: "Pending",
    statusTone: "amber",
    icon: "chart",
    tone: "blue",
  },
  {
    title: "Update Workflow Automation",
    description: "Update approval workflow automation rules",
    module: "Workflow Engine",
    moduleTone: "teal",
    priority: "Low",
    priorityTone: "green",
    due: "Jun 3, 2025",
    status: "Pending",
    statusTone: "amber",
    icon: "flow",
    tone: "teal",
  },
  {
    title: "Fix Auto-publish Workflow Error",
    description: "Resolve error in auto-publish workflow",
    module: "Workflow Engine",
    moduleTone: "teal",
    priority: "High",
    priorityTone: "red",
    due: "Overdue\nMay 27, 2025",
    dueTone: "red",
    status: "Overdue",
    statusTone: "red",
    icon: "warning",
    tone: "red",
  },
  {
    title: "Review Team Access Requests",
    description: "Review and approve team member access",
    module: "System Administration",
    moduleTone: "gray",
    priority: "Medium",
    priorityTone: "amber",
    due: "Overdue\nMay 28, 2025",
    dueTone: "red",
    status: "Overdue",
    statusTone: "red",
    icon: "users",
    tone: "purple",
  },
] as const;

const calendarDates = ["27", "28", "29", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"] as const;

const taskQuickActions = [
  ["New Task", "plus", "blue"],
  ["My Approvals", "check", "green"],
  ["Team Tasks", "users", "purple"],
  ["Task Templates", "task", "amber"],
  ["Export Tasks", "upload", "blue"],
  ["Task Report", "doc", "pink"],
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
  const hasActiveChild = Boolean(visibleChildren?.some((child) => pathname === child.route));

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
            <a className="nav-child" data-active={pathname === child.route || (!hasActiveChild && index === 0)} href={child.route} key={child.route}>
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

function ActivityFeedView() {
  return (
    <>
      <section className="dashboard-heading">
        <div>
          <h1>Activity Feed</h1>
          <p>Real-time activities across your autonomous operations</p>
        </div>
        <div className="heading-actions activity-filters">
          <button type="button">{iconToken("calendar")} May 29, 2025 <span>⌄</span></button>
          <button type="button">All Activities <span>⌄</span></button>
          <button type="button">{iconToken("filter")} Filters</button>
        </div>
      </section>

      <section className="metric-strip">
        {activityMetricCards.map((metric) => (
          <article className="dashboard-card metric-tile" data-tone={metric.tone} key={metric.label}>
            <div className="tile-icon">{iconToken(metric.icon)}</div>
            <div>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p className={"down" in metric && metric.down ? "negative" : "positive"}>{"down" in metric && metric.down ? "↓" : "↑"} {metric.change} <em>vs yesterday</em></p>
            </div>
          </article>
        ))}
      </section>

      <section className="activity-feed-grid">
        <article className="dashboard-card feed-timeline-card">
          <div className="card-heading">
            <h2>Activity Timeline <span>ⓘ</span></h2>
            <label className="realtime-toggle">
              <span>Real-time</span>
              <input checked readOnly type="checkbox" />
            </label>
          </div>
          <div className="feed-timeline">
            {feedTimeline.map((item) => (
              <div className="feed-row" data-tone={item.tone} key={`${item.time}-${item.title}`}>
                <time>{item.time}</time>
                <span className="timeline-dot" />
                <span className="feed-icon">{iconToken(item.icon)}</span>
                <div className="feed-copy">
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                  <div className="feed-meta">
                    <span className="mini-avatar" />
                    <span>{item.user}</span>
                    <em>{item.tag}</em>
                  </div>
                </div>
                <small>{item.ago}</small>
                <button type="button" aria-label={`Open ${item.title} actions`}>•••</button>
              </div>
            ))}
          </div>
          <a className="card-link" href="/dashboard/activity-feed">Load More Activities <span>⌄</span></a>
        </article>

        <aside className="activity-side-column">
          <article className="dashboard-card activity-type-card">
            <div className="card-heading">
              <h2>Activity by Type <span>ⓘ</span></h2>
              <button type="button">Last 7 Days <span>⌄</span></button>
            </div>
            <div className="activity-type-body">
              <div className="activity-donut">
                <strong>1,248</strong>
                <span>Total</span>
              </div>
              <div className="activity-type-list">
                {activityTypes.map(([label, count, percent, tone]) => (
                  <div className="activity-type-row" data-tone={tone} key={label}>
                    <span />
                    <strong>{label}</strong>
                    <em>{count}</em>
                    <small>({percent})</small>
                  </div>
                ))}
              </div>
            </div>
            <a className="card-link bordered" href="/dashboard/activity-feed">View All Activity Types <span>→</span></a>
          </article>

          <article className="dashboard-card top-users-card">
            <div className="card-heading">
              <h2>Top Active Users <span>ⓘ</span></h2>
              <button type="button">Last 7 Days <span>⌄</span></button>
            </div>
            <div className="users-table">
              <div className="users-head">
                <span>User</span>
                <span>Activities</span>
                <span>Trend</span>
              </div>
              {activeUsers.map(([name, role, activitiesCount, trend, direction]) => (
                <div className="users-row" key={name}>
                  <div className="user-cell">
                    <span className="mini-avatar" />
                    <div>
                      <strong>{name}</strong>
                      <small>{role}</small>
                    </div>
                  </div>
                  <strong>{activitiesCount}</strong>
                  <div className="trend-cell">
                    <span className={direction === "up" ? "positive" : "negative"}>{direction === "up" ? "↑" : "↓"} {trend}</span>
                    <span className={`sparkline ${direction === "up" ? "up" : "down"}`} />
                  </div>
                </div>
              ))}
            </div>
            <a className="card-link" href="/user-administration/users">View All Users <span>→</span></a>
          </article>
        </aside>
      </section>

      <footer className="dashboard-footer">© 2025 CACSMS Autonomous. All rights reserved.</footer>
    </>
  );
}

function TaskPill({ children, tone }: { children: ReactNode; tone: string }) {
  return <span className="task-pill" data-tone={tone}>{children}</span>;
}

function MyTasksView() {
  return (
    <>
      <section className="dashboard-heading">
        <div>
          <h1>My Tasks</h1>
          <p>Manage and track your assigned tasks</p>
        </div>
        <div className="heading-actions activity-filters">
          <button type="button">{iconToken("calendar")} May 29, 2025 <span>⌄</span></button>
          <button type="button">{iconToken("shield")} Priority <span>⌄</span></button>
          <button type="button">{iconToken("filter")} Filters</button>
        </div>
      </section>

      <section className="metric-strip">
        {taskMetricCards.map((metric) => (
          <article className="dashboard-card metric-tile task-metric" data-tone={metric.tone} key={metric.label}>
            <div className="tile-icon">{iconToken(metric.icon)}</div>
            <div>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p className={"down" in metric && metric.down ? "negative" : "neutral" in metric ? "task-neutral" : "purple" in metric ? "task-purple" : "positive"}>
                {"down" in metric && metric.down ? "↓" : "neutral" in metric ? "" : "↑"} {metric.change}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="tasks-workspace-grid">
        <article className="dashboard-card tasks-table-card">
          <div className="task-tabs">
            {taskTabs.map(([label, count], index) => (
              <button className="task-tab" data-active={index === 0} key={label} type="button">
                {label}
                <span>{count}</span>
              </button>
            ))}
          </div>

          <div className="task-table">
            <div className="task-table-head">
              <span>{iconToken("spark")}</span>
              <span />
              <span>Task</span>
              <span>Project / Module</span>
              <span>Priority</span>
              <span>Due Date</span>
              <span>Status</span>
              <span>Actions</span>
            </div>
            {taskRows.map((task) => (
              <div className="task-row-card" key={task.title}>
                <span className="task-checkbox" />
                <span className="task-row-icon" data-tone={task.tone}>{iconToken(task.icon)}</span>
                <div className="task-title-cell">
                  <strong>{task.title}</strong>
                  <small>{task.description}</small>
                </div>
                <TaskPill tone={task.moduleTone}>{task.module}</TaskPill>
                <TaskPill tone={task.priorityTone}>{task.priority}</TaskPill>
                <span className={"dueTone" in task && task.dueTone === "red" ? "task-due-red" : "task-due"}>{task.due.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
                <TaskPill tone={task.statusTone}>{task.status}</TaskPill>
                <button className="task-more" type="button" aria-label={`Open ${task.title} actions`}>•••</button>
              </div>
            ))}
          </div>

          <div className="task-table-footer">
            <span>Showing 1 to 8 of 32 tasks</span>
            <div className="task-pages">
              {["‹", "1", "2", "3", "4", "›"].map((page) => (
                <button data-active={page === "1"} key={page} type="button">{page}</button>
              ))}
            </div>
            <button className="rows-select" type="button">8 per page <span>⌄</span></button>
          </div>
        </article>

        <aside className="tasks-side-column">
          <article className="dashboard-card task-calendar-card">
            <div className="card-heading">
              <h2>Task Calendar</h2>
              <a href="/dashboard/my-tasks">View Full Calendar</a>
            </div>
            <div className="calendar-title">
              <button type="button">‹</button>
              <strong>May 2025</strong>
              <button type="button">›</button>
            </div>
            <div className="calendar-grid">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => <strong key={day}>{day}</strong>)}
              {calendarDates.map((date, index) => (
                <span className={index < 4 ? "muted" : date === "29" && index > 20 ? "active" : undefined} key={`${date}-${index}`}>{date}</span>
              ))}
            </div>
            <div className="calendar-legend">
              <span data-tone="blue"><i />5 Due Today</span>
              <span data-tone="amber"><i />12 Due This Week</span>
              <span data-tone="red"><i />3 Overdue</span>
            </div>
          </article>

          <article className="dashboard-card task-summary-card">
            <div className="card-heading">
              <h2>Task Summary</h2>
              <a href="/analytics-center">View Analytics</a>
            </div>
            <div className="summary-list">
              <div><span>Average Completion Time</span><strong>2.4 days</strong></div>
              <div><span>Tasks Completed This Week</span><strong>18 <em className="positive">↑ 12%</em></strong></div>
              <div><span>Tasks Overdue</span><strong>3 <em className="negative">↓ 25%</em></strong></div>
              <div><span>Productivity Score</span><strong>85% <TaskPill tone="green">Excellent</TaskPill></strong></div>
            </div>
          </article>

          <article className="dashboard-card task-actions-card">
            <div className="card-heading">
              <h2>Quick Actions</h2>
            </div>
            <div className="task-action-grid">
              {taskQuickActions.map(([label, icon, tone]) => (
                <button data-tone={tone} key={label} type="button">
                  {iconToken(icon)}
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </article>
        </aside>
      </section>

      <footer className="dashboard-footer">© 2025 CACSMS Autonomous. All rights reserved.</footer>
    </>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const route = useMemo(() => findRoute(pathname), [pathname]);
  const navigationItems = useMemo(() => flattenNavigation(), []);
  const primaryModules = primaryModuleKeys.map((key) => MODULE_REGISTRY.find((module) => module.key === key)).filter((module): module is RegistryItem => Boolean(module));
  const isActivityFeed = pathname === "/dashboard/activity-feed";
  const isMyTasks = pathname === "/dashboard/my-tasks";

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
          {isActivityFeed ? (
            <ActivityFeedView />
          ) : isMyTasks ? (
            <MyTasksView />
          ) : (
            <>
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
                  <strong className={"detail" in metric ? "health-value" : undefined}>{metric.value}</strong>
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
            </>
          )}
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
