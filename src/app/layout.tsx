import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "./theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  description:
    "자바스크립트를 주 언어로 사용하는 프론트엔드 개발자 김한결입니다. 최선의 구조를 설계하기 위해서는 제품에 대한 이해도가 가장 중요하다고 생각합니다.",
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
    url: "https://kale-portfolio.vercel.app",
    siteName: "Kale's Portfolio",
    title: "Kale's Portfolio | Frontend Developer",
    description:
      "자바스크립트를 주 언어로 사용하는 프론트엔드 개발자 김한결입니다.",
    images: [
      {
        url: "/images/og-image.png", // Open Graph 이미지 필요
        width: 1200,
        height: 630,
        alt: "Kale's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kale's Portfolio | Frontend Developer",
    description:
      "자바스크립트를 주 언어로 사용하는 프론트엔드 개발자 김한결입니다.",
    images: ["/images/og-image.png"],
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
      <body className="flex min-h-screen flex-col font-sans">
        <ThemeProvider>
          <Header />
          <div className="flex-1 pt-16">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
