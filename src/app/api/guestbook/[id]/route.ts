import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { getToken } from "next-auth/jwt";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

/**
 * 방명록 삭제 API
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function DELETE(request: any, context: any) {
  const { params } = context;
  try {
    const token = await getToken({ req: request });
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "로그인이 필요합니다." },
        { status: 401 }
      );
    }

    const id = params.id;

    const fetchHeaders: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (token?.accessToken) {
      fetchHeaders["Authorization"] = `Bearer ${token.accessToken}`;
    }

    const response = await fetch(`${BACKEND_URL}/api/guestbook/${id}`, {
      method: "DELETE",
      headers: fetchHeaders,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("방명록 삭제에 실패했습니다.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("방명록 삭제 에러:", error);
    return NextResponse.json(
      { success: false, error: "방명록 삭제 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
