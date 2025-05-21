import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { getToken } from "next-auth/jwt";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

// GET - 방명록 조회
export async function GET() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/guestbook/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("방명록 조회에 실패했습니다.");
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("방명록 조회 에러:", error);
    return NextResponse.json(
      { success: false, error: "방명록 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// POST - 방명록 작성
export async function POST(request: NextRequest) {
  try {
    // NextAuth JWT 토큰 추출
    const token = await getToken({ req: request });
    console.log("[API] next-auth JWT 토큰:", token);

    const body = await request.json();
    console.log(
      "[API] 백엔드로 요청 보냄:",
      `${BACKEND_URL}/api/guestbook`,
      body
    );

    const fetchHeaders = {
      "Content-Type": "application/json",
      ...(token?.accessToken
        ? { Authorization: `Bearer ${token.accessToken}` }
        : {}),
    };
    console.log("fetch headers:", fetchHeaders);
    let response;
    try {
      response = await fetch(`${BACKEND_URL}/api/guestbook`, {
        method: "POST",
        headers: fetchHeaders,
        body: JSON.stringify({
          content: body.content,
          name: body.name,
          picture: body.picture,
          parentId:
            body.parentId !== undefined && body.parentId !== null
              ? String(body.parentId)
              : null,
        }),
      });
    } catch (fetchError) {
      console.error("[API] fetch 자체에서 에러 발생:", fetchError);
      return NextResponse.json(
        { success: false, error: "백엔드 연결 실패" },
        { status: 500 }
      );
    }

    const responseText = await response.text();
    console.log(
      "[API] 백엔드 응답 상태:",
      response.status,
      response.statusText
    );
    console.log("[API] 백엔드 응답 본문:", responseText);

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json(
          { success: false, error: "로그인이 필요합니다." },
          { status: 401 }
        );
      }
      return NextResponse.json(
        { success: false, error: responseText },
        { status: response.status }
      );
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error("[API] JSON 파싱 에러:", parseError);
      return NextResponse.json(
        { success: false, error: "서버 응답 파싱 실패" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
      message: "방명록이 성공적으로 작성되었습니다.",
    });
  } catch (error) {
    console.error("[API] 방명록 작성 에러:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "방명록 작성 중 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}

// PUT - 방명록 수정
export async function PUT(request: NextRequest) {
  try {
    // JWT 토큰 추출
    const token = await getToken({ req: request });
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "로그인이 필요합니다." },
        { status: 401 }
      );
    }

    const body = await request.json();

    if (!body.id || !body.content) {
      return NextResponse.json(
        { success: false, error: "필수 정보가 누락되었습니다." },
        { status: 400 }
      );
    }

    // Authorization 헤더 추가
    const fetchHeaders: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (token?.accessToken) {
      fetchHeaders["Authorization"] = `Bearer ${token.accessToken}`;
    }

    const response = await fetch(`${BACKEND_URL}/api/guestbook/${body.id}`, {
      method: "PUT",
      headers: fetchHeaders,
      body: JSON.stringify({
        content: body.content,
        name: body.name,
        picture: body.picture,
        parentId:
          body.parentId !== undefined && body.parentId !== null
            ? String(body.parentId)
            : null,
      }),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("방명록 수정에 실패했습니다.");
    }

    const data = await response.json();
    return NextResponse.json({
      success: true,
      data,
      message: "방명록이 성공적으로 수정되었습니다.",
    });
  } catch (error) {
    console.error("방명록 수정 에러:", error);
    return NextResponse.json(
      { success: false, error: "방명록 수정 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
