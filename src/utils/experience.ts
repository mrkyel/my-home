/**
 * 개발자 경력 기간을 계산하는 유틸리티 함수
 *
 * 시작일: 2019년 8월
 * 공백 기간: 약 3.5개월 (서너달)
 */
export function calculateExperienceYears(): string {
  const startDate = new Date(2019, 7, 1); // 2019년 8월 (월은 0부터 시작)
  const currentDate = new Date();

  // 공백 기간 (약 3.5개월)
  const gapMonths = 3.5;

  // 전체 경과 개월 수 계산
  const totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  // 공백 기간 제외
  const actualMonths = totalMonths - gapMonths;

  // 년수와 개월 수로 변환
  const years = Math.floor(actualMonths / 12);
  const months = Math.round(actualMonths % 12);

  // 1년 미만이면 개월 수로 표시
  if (years === 0) {
    return `${months}개월 이상`;
  }

  // 1년 이상이면 년수로 표시 (개월 수는 반올림)
  if (months >= 6) {
    return `${years + 1}년 이상`;
  }

  return `${years}년 이상`;
}
