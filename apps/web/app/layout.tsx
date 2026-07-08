import type { ReactNode } from "react";
import "./globals.css";
import { assertValidModuleRegistry } from "../../../platform/registry/module-registry";
import { AppShell } from "./shell";

export const metadata = {
  title: "CACSMS Autonomous",
  description: "Autonomous business operating platform.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  assertValidModuleRegistry();

  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
