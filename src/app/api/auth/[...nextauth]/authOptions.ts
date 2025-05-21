import KakaoProvider from "next-auth/providers/kakao";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";

export const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/guestbook",
    signOut: "/guestbook",
    error: "/guestbook",
  },
  callbacks: {
    async jwt({
      token,
      account,
      user,
    }: {
      token: JWT;
      account?: Record<string, unknown> | null;
      user?: { id?: string } | null;
    }) {
      if (account && user && user.id) {
        token.id = user.id;
        if ((account as Record<string, unknown>).access_token) {
          token.accessToken = (account as Record<string, unknown>)
            .access_token as string;
        }
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user && token.id) {
        session.user.id = String(token.id);
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
};
