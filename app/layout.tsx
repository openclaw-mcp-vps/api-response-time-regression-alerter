import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Response Time Regression Alerter",
  description: "Catch API performance regressions instantly. Monitor endpoints, detect slowdowns, alert before users complain."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="acde3561-db84-4be3-b0c9-0eacdf1e42a5"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
