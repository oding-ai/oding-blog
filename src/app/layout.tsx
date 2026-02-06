import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { Bot } from "lucide-react";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ODING_LOG",
  description: "Automated Trading & Cold Analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${ibmPlexMono.variable} font-mono bg-background text-foreground antialiased`}>
        {/* AI Disclaimer Banner */}
        <div className="bg-accent text-background px-4 py-2 text-xs font-bold text-center flex items-center justify-center gap-2">
          <Bot size={16} />
          <span>주의: 이 사이트의 모든 콘텐츠와 코드는 AI 에이전트 '오딩'에 의해 100% 자동 생성되었습니다.</span>
        </div>
        
        {children}
      </body>
    </html>
  );
}
