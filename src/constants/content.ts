import { Experience, Profile, Project } from "@/types";

export const profile: Profile = {
  name: "김옥균",
  role: "Frontend Developer",
  bio: "안녕하세요. 프론트엔드 개발자 김옥균입니다. 사용자 경험을 개선하고 효율적인 코드를 작성하는 것에 관심이 많습니다.",
  email: "okky@example.com",
  github: "https://github.com/okky",
};

export const experiences: Experience[] = [
  {
    company: "당근마켓",
    position: "Frontend Developer",
    period: "2023.10 - Present",
    description: [
      "당근마켓 웹 서비스 개발",
      "React, TypeScript를 활용한 프론트엔드 개발",
      "성능 최적화 및 사용자 경험 개선",
    ],
    skills: ["React", "TypeScript", "Next.js", "TailwindCSS"],
  },
  // ... 다른 경력 사항들
];

export const projects: Project[] = [
  {
    title: "포트폴리오 웹사이트",
    description: "Next.js와 TypeScript를 사용한 반응형 포트폴리오 웹사이트",
    skills: ["Next.js", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/okky/portfolio",
    demoUrl: "https://your-portfolio.vercel.app",
  },
  // ... 다른 프로젝트들
];
