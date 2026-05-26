import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1099 Auto Generator — Auto-generate 1099s from payment data",
  description: "Connects to payment platforms, automatically generates 1099-NEC forms, handles state requirements. Built for small business owners hiring contractors."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ff4014fe-cc7f-474c-81e7-b07479595f8e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
