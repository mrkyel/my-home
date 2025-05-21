import { NextResponse } from "next/server";
import { mockGuestbooks } from "../route";

/**
 * 모든 방명록 조회 API - 모킹 데이터 사용
 */
export async function GET() {
  try {
    console.log("모든 방명록 조회 - 모킹 데이터 사용");

    // 모킹 데이터를 응답 객체로 래핑하여 반환
    return NextResponse.json({
      success: true,
      data: mockGuestbooks,
    });
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
