import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "동글",
  description: "우리의 동아리, 우리의 동글",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
