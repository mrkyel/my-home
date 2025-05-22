import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";

/**
 * Next-Auth 설정
 * OAuth2 제공자(카카오)를 구성합니다.
 */
const authOptions = {
  providers: [
    // 카카오 로그인 설정
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],

  // 세션 설정
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30일
  },

  // 페이지 설정
  pages: {
    signIn: "/guestbook", // 로그인 페이지
    signOut: "/guestbook", // 로그아웃 페이지
    error: "/guestbook", // 에러 페이지
  },

  // 콜백 설정
  callbacks: {
    // JWT 콜백
    async jwt({
      token,
      account,
      user,
    }: {
      token: JWT;
      account?: Record<string, unknown> | null;
      user?: { id?: string } | null;
    }) {
      console.log("jwt 콜백 account:", account);
      // 초기 로그인 시 사용자 ID 저장
      if (account && user && user.id) {
        token.id = user.id;
        if ((account as Record<string, unknown>).access_token) {
          token.accessToken = (account as Record<string, unknown>)
            .access_token as string;
        }
      }
      return token;
    },

    // 세션 콜백
    async session({ session, token }: { session: Session; token: JWT }) {
      // 세션에 사용자 ID 추가
      if (session.user && token.id) {
        session.user.id = String(token.id);
      }
      return session;
    },
  },

  // 보안 설정
  debug: process.env.NODE_ENV === "development",
};

// Next.js app router 공식 방식: default export만 사용
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
