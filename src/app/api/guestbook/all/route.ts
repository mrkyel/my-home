import { NextResponse } from "next/server";

/**
 * 모든 방명록 조회 API - 백엔드 서버 호출
 */
export async function GET() {
  try {
    // 실제 백엔드 서버에서 데이터 조회
    const response = await fetch("http://localhost:8080/api/guestbook/all", {
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
      {
        success: false,
        error: "방명록 조회 중 오류가 발생했습니다.",
        message: error instanceof Error ? error.message : "알 수 없는 오류",
      },
      { status: 500 }
    );
  }
}
