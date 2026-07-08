"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { MODULE_REGISTRY, getBreadcrumbs } from "../../../packages/config/src";

type RegistryItem = (typeof MODULE_REGISTRY)[number];
type ChildItem = NonNullable<RegistryItem["children"]>[number];

const autonomousStatus = [
  ["Autonomous Brain", "Running"],
  ["Learning Engine", "Learning"],
  ["Decision Engine", "Processing"],
  ["Creative Engine", "Rendering"],
  ["Research Engine", "Scanning Trends"],
  ["Publishing Engine", "Scheduled"],
  ["Knowledge Engine", "Updating"],
  ["Memory Engine", "Optimizing"],
] as const;

const recommendations = [
  "Three campaigns are underperforming and need autonomous optimization.",
  "LinkedIn engagement increased by 18% after the last publishing window.",
  "Research Agent discovered 5 trending topics for this workspace.",
  "Publishing tomorrow at 8:30 AM is predicted to increase engagement.",
  "One workflow has repeated failures and should enter exception review.",
  "Content quality increased by 14% across active campaigns.",
  "Brand consistency is holding at 97%.",
] as const;

const activityItems = [
  ["09:20", "Research completed"],
  ["09:22", "Content generated"],
  ["09:25", "Decision Engine approved"],
  ["09:26", "Publishing scheduled"],
  ["09:28", "Learning updated"],
  ["09:31", "Campaign optimized"],
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

const favoriteModuleKeys = ["creative-studio", "autonomous-control", "knowledge-base"] as const;

function findRoute(pathname: string) {
  for (const module of MODULE_REGISTRY) {
    if (pathname === "/" || pathname === module.route) {
      return { module, page: undefined, nested: undefined };
    }

    for (const page of module.children ?? []) {
      if (pathname === page.route) {
        return { module, page, nested: undefined };
      }

      for (const nested of page.children ?? []) {
        if (pathname === nested.route) {
          return { module, page, nested };
        }
      }
    }
  }

  return { module: MODULE_REGISTRY[0], page: undefined, nested: undefined };
}

type QueryableItem = {
  label: string;
  children?: readonly QueryableItem[];
};

function itemMatchesQuery(item: QueryableItem, query: string): boolean {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return true;

  return item.label.toLowerCase().includes(normalized) || Boolean(item.children?.some((child) => itemMatchesQuery(child, normalized)));
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

function initials(label: string) {
  return label
    .replace("&", "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function counterFor(index: number) {
  return [7, 12, 3, 18, 5, 9, 2, 14][index % 8];
}

function moduleKpis(module: RegistryItem) {
  const childCount = module.children?.length ?? 0;

  return [
    ["Autonomy Score", "92%", "Policy-driven execution readiness"],
    ["Decision Accuracy", "97%", "Validated by recent outcomes"],
    ["Policy Success Rate", "94%", "Auto approvals passing guardrails"],
    ["Learning Progress", "81%", "Knowledge updated from workflows"],
    ["Running Agents", String(Math.max(4, Math.min(18, childCount))), "Agents active in this module"],
    ["Active Workflows", String(childCount), "Registry-aligned operations"],
    ["Business Goal Progress", "76%", "Current mission completion"],
    ["Exceptions Today", "1", "Needs attention"],
  ] as const;
}

function moduleWorkspaceLabel(label: string) {
  if (label.endsWith("Center")) return label.replace("Center", "Operations Center");
  if (label.endsWith("Engine")) return label.replace("Engine", "Operations Center");
  if (label.endsWith("Studio")) return label.replace("Studio", "Operations Center");
  return `${label} Operations Center`;
}

function pageMode(route: ReturnType<typeof findRoute>) {
  return route.page || route.nested ? "Operational Workspace" : "Executive Dashboard";
}

function TreeChildren({ items, level = 1, pathname }: { items: readonly ChildItem[]; level?: number; pathname: string }) {
  return (
    <div className="tree-children" data-level={level}>
      {items.map((item, index) => {
        const active = pathname === item.route || pathname.startsWith(`${item.route}/`);
        const hasNested = Boolean(item.children?.length);

        return (
          <div className="tree-child-group" key={item.route}>
            <a className="tree-child-link" data-active={active} href={item.route}>
              <span>{hasNested ? ">" : ""}</span>
              <span>{item.label}</span>
              <small>{counterFor(index)}</small>
            </a>
            {hasNested && active && <TreeChildren items={item.children ?? []} level={level + 1} pathname={pathname} />}
          </div>
        );
      })}
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [sidebarQuery, setSidebarQuery] = useState("");
  const route = useMemo(() => findRoute(pathname), [pathname]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [recentRoutes, setRecentRoutes] = useState<string[]>([]);
  const navigationItems = useMemo(() => flattenNavigation(), []);

  useEffect(() => {
    const stored = window.localStorage.getItem("cacsms-expanded-sidebar");
    if (stored) setExpanded(JSON.parse(stored) as Record<string, boolean>);

    const storedRecent = window.localStorage.getItem("cacsms-recent-routes");
    if (storedRecent) setRecentRoutes(JSON.parse(storedRecent) as string[]);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cacsms-expanded-sidebar", JSON.stringify(expanded));
  }, [expanded]);

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

  useEffect(() => {
    setExpanded((value) => ({ ...value, [route.module.key]: true }));
  }, [route.module.key]);

  useEffect(() => {
    setRecentRoutes((value) => {
      const next = [pathname, ...value.filter((item) => item !== pathname)].slice(0, 6);
      window.localStorage.setItem("cacsms-recent-routes", JSON.stringify(next));
      return next;
    });
  }, [pathname]);

  const breadcrumbs = pathname === "/" ? [{ label: "Dashboard", route: "/dashboard" }] : getBreadcrumbs(pathname);
  const pageTitle = route.nested?.label ?? route.page?.label ?? route.module.label;
  const pageDescription = route.nested?.description ?? route.page?.description ?? route.module.description;
  const visibleModules = MODULE_REGISTRY.filter((module) => itemMatchesQuery(module, sidebarQuery));
  const favoriteModules = MODULE_REGISTRY.filter((module) => favoriteModuleKeys.includes(module.key as (typeof favoriteModuleKeys)[number]));
  const recentNavigationItems = recentRoutes.map((recentRoute) => navigationItems.find((item) => item.route === recentRoute)).filter((item): item is (typeof navigationItems)[number] => Boolean(item));
  const currentKpis = moduleKpis(route.module);
  const mode = pageMode(route);

  return (
    <div className="app-shell" data-collapsed={collapsed}>
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">CA</div>
          {!collapsed && (
            <div>
              <strong>CACSMS</strong>
              <span>Autonomous OS</span>
            </div>
          )}
        </div>

        <button className="sidebar-toggle" onClick={() => setCollapsed((value) => !value)} type="button" aria-label="Toggle sidebar">
          {collapsed ? ">" : "<"}
        </button>

        {!collapsed && (
          <div className="sidebar-search">
            <input aria-label="Search sidebar" onChange={(event) => setSidebarQuery(event.target.value)} placeholder="Search modules" value={sidebarQuery} />
          </div>
        )}

        <nav className="sidebar-nav" aria-label="Enterprise tree navigation">
          {!collapsed && (
            <div className="sidebar-section">
              <span>Favorites</span>
              {favoriteModules.map((module) => (
                <a href={module.route} key={module.key}>{module.label}</a>
              ))}
            </div>
          )}

          {!collapsed && recentNavigationItems.length > 0 && (
            <div className="sidebar-section">
              <span>Recent</span>
              {recentNavigationItems.map((item) => (
                <a href={item.route} key={item.route}>{item.label}</a>
              ))}
            </div>
          )}

          {visibleModules.map((module, moduleIndex) => {
            const active = pathname === module.route || pathname.startsWith(`${module.route}/`) || (pathname === "/" && module.key === "dashboard");
            const isOpen = Boolean(expanded[module.key]) && !collapsed;

            return (
              <div className="tree-module" data-active={active} key={module.key}>
                <div className="tree-module-row">
                  <button
                    className="tree-expander"
                    onClick={() => setExpanded((value) => ({ ...value, [module.key]: !value[module.key] }))}
                    type="button"
                    aria-label={`Toggle ${module.label}`}
                  >
                    {isOpen ? "v" : ">"}
                  </button>
                  <a className="sidebar-link" href={module.route} title={module.label}>
                    <span className="sidebar-icon">{initials(module.label)}</span>
                    {!collapsed && <span>{module.label}</span>}
                  </a>
                  {!collapsed && <small className="module-badge">{counterFor(moduleIndex)}</small>}
                </div>
                {isOpen && <TreeChildren items={module.children ?? []} pathname={pathname} />}
              </div>
            );
          })}
        </nav>
      </aside>

      <div className="app-main">
        <header className="top-header">
          <div className="header-switchers">
            <button className="header-chip" type="button">Workspace</button>
            <button className="header-chip" type="button">Organization</button>
          </div>
          <button className="global-search" onClick={() => setCommandOpen(true)} type="button">
            Search pages, modules, documents, workflows, agents <kbd>Ctrl K</kbd>
          </button>
          <div className="header-actions">
            <button className="icon-button" type="button">+</button>
            <button className="header-chip" type="button">Tasks 12</button>
            <button className="header-chip" type="button">Agents 8</button>
            <button className="brain-pill" type="button">Brain Running</button>
            <button className="icon-button" type="button">?</button>
            <button className="icon-button" type="button">P</button>
          </div>
        </header>

        <main className="workspace">
          <div className="breadcrumbs">
            {breadcrumbs.map((crumb, index) => (
              <span key={`${crumb.route}-${index}`}>{crumb.label}</span>
            ))}
          </div>

          <section className="page-header">
            <div>
              <span className="eyebrow">{moduleWorkspaceLabel(route.module.label)}</span>
              <h1>{pageTitle}</h1>
              <p>{mode}: {pageDescription}</p>
            </div>
            <div className="quick-actions">
              <button type="button">New</button>
              <button type="button">Automate</button>
              <button type="button">Generate</button>
              <button type="button">Run Agent</button>
              <button type="button">Export</button>
              <button type="button">Settings</button>
            </div>
          </section>

          <section className="autonomous-strip">
            {autonomousStatus.map(([label, value]) => (
              <article key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </article>
            ))}
            <article>
              <span>System Confidence</span>
              <strong>98%</strong>
            </article>
          </section>

          <section className="operations-grid">
            <div className="kpi-grid">
              {currentKpis.map(([label, value, detail]) => (
                <article className="metric-card" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <p>{detail}</p>
                </article>
              ))}
            </div>

            <aside className="ai-panel">
              <div className="panel-header">
                <h2>AI Recommendations</h2>
                <span>Live</span>
              </div>
              <div className="recommendation-list">
                {recommendations.slice(0, 5).map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </aside>
          </section>

          <section className="action-bar">
            <div>Filters</div>
            <div>Enterprise Search</div>
            <div>View Switch</div>
            <div>Recent</div>
            <div>Pinned</div>
          </section>

          <section className="workspace-layout">
            <article className="workspace-panel">
              <div className="panel-header">
                <h2>{moduleWorkspaceLabel(route.module.label)}</h2>
                <span>{route.module.permission}</span>
              </div>
              <div className="operations-board">
                <div>
                  <strong>{mode === "Executive Dashboard" ? "Executive Questions" : "Current Work"}</strong>
                  <p>
                    {mode === "Executive Dashboard"
                      ? `Monitor outcomes, risks, decisions, and ownership across ${route.module.label.toLowerCase()}.`
                      : `Execute the ${pageTitle.toLowerCase()} workspace with clear actions, approvals, and automation context.`}
                  </p>
                </div>
                <div>
                  <strong>What is happening?</strong>
                  <p>{counterFor(pageTitle.length)} workflows are running with autonomous monitoring.</p>
                </div>
                <div>
                  <strong>What needs attention?</strong>
                  <p>One exception requires policy review before the next scheduled action.</p>
                </div>
                <div>
                  <strong>What happens next?</strong>
                  <p>Learning Engine will update recommendations after the next execution cycle.</p>
                </div>
              </div>
              {children}
            </article>

            <aside className="timeline-panel">
              <div className="panel-header">
                <h2>Activity Timeline</h2>
                <span>Today</span>
              </div>
              <div className="timeline">
                {activityItems.map(([time, item]) => (
                  <div className="timeline-item" key={`${time}-${item}`}>
                    <time>{time}</time>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </aside>
          </section>
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
