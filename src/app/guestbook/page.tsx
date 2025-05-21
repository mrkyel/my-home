"use client";

import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

/**
 * 방명록 타입 정의
 */
interface Guestbook {
  id: number;
  content: string;
  userId: string;
  userName: string;
  userPicture: string | null;
  createdAt: string;
  modifiedAt: string | null;
  parentId?: number;
  replies?: Guestbook[];
}

// next-auth의 User 타입 확장 (id 추가)
declare module "next-auth" {
  interface User {
    id: string;
  }
}

/**
 * 방명록 페이지 컴포넌트
 */
export default function GuestbookPage() {
  // 로그인 정보 가져오기
  const { data: session, status } = useSession();

  // 상태 관리
  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // 답글(대댓글) 작성 상태
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyMessage, setReplyMessage] = useState<string>("");

  console.log(guestbooks);

  // 클라이언트 사이드 렌더링 감지
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 방명록 목록 가져오기
  const fetchGuestbooks = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/guestbook", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "방명록을 불러오는데 실패했습니다.");
      }

      // 서버에서 받은 데이터로 상태 업데이트
      setGuestbooks(result.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
      setGuestbooks([]);
    } finally {
      setLoading(false);
    }
  };

  // 방명록 작성하기
  const submitGuestbook = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!newMessage.trim()) {
      alert("메시지를 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: newMessage,
          name: session.user?.name ?? null,
          picture: session.user?.image ?? null,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "방명록 작성에 실패했습니다.");
      }

      setNewMessage("");
      fetchGuestbooks(); // 목록 다시 불러오기
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  // 방명록 삭제하기
  const deleteGuestbook = async (id: number) => {
    if (!session) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    try {
      // URL을 상대 경로로 변경하여 프록시 처리
      const response = await fetch(`/api/guestbook/${id}`, {
        method: "DELETE",
        credentials: "same-origin",
      });

      if (!response.ok) {
        throw new Error("방명록 삭제에 실패했습니다.");
      }

      fetchGuestbooks(); // 목록 다시 불러오기
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  // 방명록 수정하기
  const updateGuestbook = async (id: number, content: string) => {
    if (!session) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const response = await fetch("/api/guestbook", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          content,
          name: session.user?.name ?? null,
          picture: session.user?.image ?? null,
          parentId: null,
        }),
        credentials: "same-origin",
      });

      if (!response.ok) {
        throw new Error("방명록 수정에 실패했습니다.");
      }

      fetchGuestbooks(); // 목록 다시 불러오기
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  // 답글(대댓글) 작성 함수
  const submitReply = async (parentId: number) => {
    // parentId 값 확인용 콘솔 로그
    console.log("[submitReply] parentId:", parentId);
    if (!session) {
      alert("로그인이 필요합니다.");
      return;
    }
    if (!replyMessage.trim()) {
      alert("답글을 입력해주세요.");
      return;
    }
    try {
      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: replyMessage,
          name: session.user?.name ?? null,
          picture: session.user?.image ?? null,
          parentId:
            parentId !== undefined && parentId !== null
              ? String(parentId)
              : null,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "답글 작성에 실패했습니다.");
      }
      setReplyMessage("");
      setReplyTo(null);
      fetchGuestbooks();
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  // 페이지 로드시 방명록 목록 가져오기
  useEffect(() => {
    fetchGuestbooks();
  }, []);

  // 클라이언트 사이드 렌더링이 완료되기 전까지는 최소한의 UI만 표시
  if (!isClient) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">방명록</h1>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  // 렌더링 전에 guestbooks가 배열인지 확인
  console.log(
    "렌더링 전 guestbooks 타입:",
    typeof guestbooks,
    Array.isArray(guestbooks)
  );
  console.log("guestbooks 값:", guestbooks);

  // 항상 배열로 변환하여 사용
  const safeGuestbooks = Array.isArray(guestbooks) ? guestbooks : [];
  console.log("safeGuestbooks (배열로 변환 후):", safeGuestbooks);

  // 대댓글 트리 구조로 변환
  const buildTree = (list: Guestbook[]) => {
    const map = new Map<number, Guestbook & { replies: Guestbook[] }>();
    const roots: (Guestbook & { replies: Guestbook[] })[] = [];
    list.forEach((item) => {
      map.set(item.id, { ...item, replies: [] });
    });
    map.forEach((item) => {
      if (item.parentId) {
        const parent = map.get(item.parentId);
        if (parent) parent.replies.push(item);
      } else {
        roots.push(item);
      }
    });
    return roots;
  };
  const guestbookTree = buildTree(safeGuestbooks);

  // 트리 구조 콘솔 출력
  console.log("[guestbookTree]", JSON.stringify(guestbookTree, null, 2));

  const renderGuestbook = (book: Guestbook, depth = 0) => (
    <div
      key={book.id}
      className={
        depth === 0
          ? "bg-white dark:bg-zinc-900 p-4 rounded-lg shadow mb-2 border border-gray-200 dark:border-zinc-700"
          : "bg-gray-50 dark:bg-zinc-800 p-3 rounded mb-2 ml-8 border border-gray-100 dark:border-zinc-700" // 2depth(대댓글)는 심플하게, 음영/테두리 최소화
      }
    >
      <div className="flex items-start space-x-3">
        {book.userPicture ? (
          <img
            src={book.userPicture}
            alt={book.userName}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 bg-gray-200 dark:bg-zinc-700 rounded-full flex items-center justify-center">
            <span>{book.userName?.charAt(0)}</span>
          </div>
        )}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              {book.userName}
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(book.createdAt).toLocaleString()}
              {book.modifiedAt && " (수정됨)"}
            </div>
          </div>
          <p className="whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200">
            {book.content}
          </p>
          {/* 내가 작성한 방명록이라면 수정/삭제 버튼 표시 */}
          {(() => {
            // 콘솔 로그 추가: 값과 타입 모두 확인
            const user = session?.user as { id: string };
            console.log("[방명록] session.user.id:", user?.id, typeof user?.id);
            console.log(
              "[방명록] book.userId:",
              book.userId,
              typeof book.userId
            );
            const isMine = user && String(book.userId) === String(user.id);
            console.log("[방명록] isMine:", isMine);
            return (
              user &&
              String(book.userId) === String(user.id) && (
                <div className="mt-2 text-right space-x-2">
                  <button
                    onClick={() => {
                      const newContent = prompt(
                        "수정할 내용을 입력하세요",
                        book.content
                      );
                      if (newContent && newContent !== book.content) {
                        updateGuestbook(book.id, newContent);
                      }
                    }}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => deleteGuestbook(book.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    삭제
                  </button>
                </div>
              )
            );
          })()}
          {/* 답글 달기 버튼 및 폼 */}
          {session && (
            <div className="mt-2 text-right">
              {replyTo === book.id ? (
                <div className="flex flex-col space-y-2">
                  <textarea
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={2}
                    placeholder="답글을 입력하세요..."
                  />
                  <div className="flex space-x-2 justify-end">
                    <button
                      onClick={() => submitReply(book.id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                    >
                      답글 작성
                    </button>
                    <button
                      onClick={() => {
                        setReplyTo(null);
                        setReplyMessage("");
                      }}
                      className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
                    >
                      취소
                    </button>
                  </div>
                </div>
              ) : (
                // 2depth(대댓글)에는 답글 달기 버튼을 렌더링하지 않음
                depth < 1 && (
                  <button
                    onClick={() => setReplyTo(book.id)}
                    className="text-sm text-green-600 hover:underline"
                  >
                    답글 달기
                  </button>
                )
              )}
            </div>
          )}
          {/* 대댓글(답글) 렌더링 */}
          {book.replies && book.replies.length > 0 && (
            <div className="mt-2">
              {book.replies.map((reply) => renderGuestbook(reply, depth + 1))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">방명록</h1>

      {/* 로그인 상태 표시 */}
      <div className="mb-8 flex justify-center">
        {status === "loading" ? (
          <p>로딩 중...</p>
        ) : session ? (
          <div className="flex items-center space-x-4">
            {session.user?.image && (
              <img
                src={session.user.image}
                alt={session.user.name || "프로필"}
                className="w-10 h-10 rounded-full"
              />
            )}
            <div>
              <p className="font-medium">{session.user?.name}님, 안녕하세요!</p>
              <button
                onClick={() => signOut()}
                className="text-sm text-blue-600 hover:underline"
              >
                로그아웃
              </button>
            </div>
          </div>
        ) : (
          <div className="space-x-4">
            <button
              onClick={() => signIn("kakao")}
              className="bg-yellow-300 text-gray-800 font-medium py-2 px-4 border border-yellow-400 rounded-md shadow-sm hover:bg-yellow-400"
            >
              Kakao로 로그인
            </button>
          </div>
        )}
      </div>

      {/* 방명록 작성 폼 */}
      {session && (
        <form onSubmit={submitGuestbook} className="mb-8">
          <div className="flex flex-col space-y-2">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="방명록을 남겨주세요..."
              maxLength={500}
            />
            <div className="text-right">
              <span className="text-sm text-gray-500 mr-2">
                {newMessage.length}/500
              </span>
              <button
                type="submit"
                className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700"
              >
                작성하기
              </button>
            </div>
          </div>
        </form>
      )}

      {/* 방명록 목록 */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
          <button onClick={fetchGuestbooks} className="underline text-sm mt-2">
            다시 시도
          </button>
        </div>
      ) : safeGuestbooks.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>아직 방명록이 없습니다. 첫 번째 메시지를 남겨보세요!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {guestbookTree.map((book) => renderGuestbook(book))}
        </div>
      )}

      {/* 다시 위로 이동 버튼 */}
      <div className="text-center mt-8">
        <Link
          href="#"
          className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
