import type { ReactNode } from "react";
import "./globals.css";
import { initializePlatformKernel } from "../../../platform/kernel";
import { AppShell } from "./shell";

export const metadata = {
  title: "CACSMS Autonomous",
  description: "Autonomous business operating platform.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  initializePlatformKernel();

  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
