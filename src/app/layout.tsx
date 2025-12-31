import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "./theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { calculateExperienceYears } from "@/utils/experience";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kale's Portfolio | Frontend Developer",
    template: "%s | Kale's Portfolio",
  },
  description: `${calculateExperienceYears()} 경력의 프론트엔드 개발자 김한결입니다. 현 회사에서 AI/LLM 관련 프로젝트들을 주로 담당해왔으며, 마이그레이션 및 성능 최적화에 강점이 있습니다. React, Angular, Next.js 등 다양한 기술 스택을 다룹니다.`,
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "김한결",
    "포트폴리오",
  ],
  authors: [{ name: "김한결" }],
  creator: "김한결",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://my-home-loll.vercel.app",
    siteName: "Kale's Portfolio",
    title: "Kale's Portfolio | Frontend Developer",
    description: `${calculateExperienceYears()} 경력의 프론트엔드 개발자 | AI/LLM 프로젝트 주도 개발 경험 | 마이그레이션 & 성능 최적화 경험`,
    images: [
      {
        url: "https://my-home-loll.vercel.app/images/og/frontend_og.jpg",
        width: 1200,
        height: 630,
        alt: "Kale's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kale's Portfolio | Frontend Developer",
    description: `${calculateExperienceYears()} 경력의 프론트엔드 개발자 | AI/LLM 프로젝트 주도 개발 경험 | 마이그레이션 & 성능 최적화 경험`,
    images: ["https://my-home-loll.vercel.app/images/og/frontend_og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console 인증 코드
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-screen flex-col font-sans"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Header />
          <div className="flex-1 pt-16">{children}</div>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
