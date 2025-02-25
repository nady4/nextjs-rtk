import type { Metadata } from "next";
import { ProviderWrapper } from "@/redux/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS RTK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">
          <ProviderWrapper>{children}</ProviderWrapper>
        </div>
      </body>
    </html>
  );
}
