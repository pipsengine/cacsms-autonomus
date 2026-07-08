import type { ReactNode } from "react";
import "./globals.css";
import { AppShell } from "./shell";

export const metadata = {
  title: "CACSMS Autonomous",
  description: "Autonomous business operating platform.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
