"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

/**
 * 인증 Provider 컴포넌트
 * Next.js 앱에서 next-auth의 SessionProvider를 사용할 수 있도록 래핑합니다.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
