import { Experience, Profile, Project } from "@/types";

export const profile: Profile = {
  name: "김한결",
  role: "Front-End Developer",
  bio: [
    { text: "자바스크립트를 주 언어로 사용하는 프론트엔드 개발자입니다." },
    {
      text: "최선의 구조를 설계하기 위해서는 제품에 대한 이해도가 가장 중요하다고 생각합니다.",
    },
    {
      text: "그리고 제품의 이해도를 높이기 위해서는, 타인과의 원만한 소통이 매우 중요하다고 생각합니다.",
      highlight: true,
    },
    {
      text: "최근에는 RAG챗봇과 AI Agent 개발에 관심이 많습니다.",
      highlight: true,
    },
  ],
  email: "kyel100@naver.com",
  github: "https://github.com/mrkyel",
  linkedin: "https://www.linkedin.com/in/한결-김-724147176",
};

export const skills = {
  frontend: {
    basic: ["HTML", "CSS(SCSS)", "JS(ES6+)", "TypeScript"],
    framework: ["React.js", "Next.js", "Angular"],
    state: ["Redux(toolkit)", "Recoil", "Jotai", "React-Query"],
    styling: [
      "Emotion",
      "Styled-Component",
      "Tailwind CSS",
      "Mui",
      "Bootstrap",
      "Antd",
    ],
    bundler: ["Webpack", "Vite"],
  },
  collaboration: [
    "Slack",
    "Jira",
    "Confluence",
    "VS Code",
    "Prettier",
    "Eslint",
    "Husky",
    "lint-staged",
  ],
  devops: ["Git", "Github", "Sourctree", "Jenkins", "AWS", "Git Hook"],
  etc: ["Python Crawling", "React Native", "SQLite", "Gist"],
};

export const experiences: Experience[] = [
  {
    company: "마음AI",
    position: "Frontend Developer",
    period: "2023.08 - Present",
    description: [
      "Speech recognition api를 활용하여 음성인식 기능 구현",
      "한국어로 음성 발화 시 목적 언어로 번역되도록 소켓 통신 구성 (Node.js)",
      "서버에서 번역된 언어를 화면에 보여주고 클릭 시 각 언어에 맞게 발화하도록 구현",
      "Admin에서 세팅한 값대로 화면을 구성할 수 있는 Builder 구현 (PC, Kiosk, Mobile)",
      "LLM 엔진별로 config값 세팅하여 바로 테스트 채팅할 수 있는 ChatPlay 메인개발",
      "RAG 모델 생성하여 LLM 채팅 가능하도록 구현",
      "Canvas를 활용하여 지도 위에 다양한 표시를 할 수 있는 Tool 개발",
    ],
    skills: [
      "React",
      "Recoil",
      "TypeScript",
      "Vite",
      "Node.js",
      "Socket.io",
      "Canvas",
      "Git",
    ],
  },
  {
    company: "위시빈",
    position: "Frontend Developer",
    period: "2022.10 - 2023.05",
    description: [
      "Angular 프레임워크로 개발된 코드 분석 및 유지보수",
      "네이버, 카카오, 애플, 구글, 페이스북 소셜 로그인 연동",
      "출석체크 이벤트 프로모션 담당 개발",
      "Next.js, React-Query, Zustand를 활용하여 SSR적용 토이프로젝트 진행",
      "SEO 최적화를 위해 메타 태그 분석 및 프리렌더링 효과 R&D",
    ],
    skills: ["Angular", "Rxjs", "Git", "Next.js", "React-Query", "Zustand"],
  },
  {
    company: "아토리서치",
    position: "Frontend Developer",
    period: "2021.05 - 2022.09",
    description: [
      "외부 라이브러리 사용없이 Angular > React 프로젝트 마이그레이션",
      "Verdaccio 라이브러리로 내부 컴포넌트 배포",
      "Webpack, Babel 등을 활용하여 React 보일러플레이트 구축",
      "모노레포 구성 및 서비스 분리 방법 R&D",
      "Linux Ubuntu 서버에 Nginx 셋팅 후 프론트엔드 배포 환경 구성",
    ],
    skills: [
      "React",
      "Redux-Toolkit",
      "Webpack",
      "Babel",
      "Verdaccio",
      "Nginx",
    ],
  },
  {
    company: "잉카인터넷",
    position: "Frontend Developer",
    period: "2019.08 - 2021.04",
    description: [
      "React로 구성된 Admin 사이트 유지보수",
      "Mobx를 이용하여 상태관리",
      "Legacy 코드 전체 리팩토링",
      "Ant Design을 활용하여 빠른 스타일링으로 Admin 리팩토링",
    ],
    skills: ["React", "Mobx", "Ant Design"],
  },
];

export const projects: Project[] = [
  {
    title: "AngelHack 해커톤 참가",
    period: "2020.07",
    description:
      "장터 앱 만들기 프로젝트 참여 (구성원: 디자이너1, 백엔드2, 프론트엔드2)",
    skills: ["React Native", "Redux", "Node.js", "Git"],
  },
  {
    title: "React & Spring Boot 게시판",
    period: "2020.11",
    description: "백엔드와 협업의 이해도를 높이기 위한 Toy Project",
    skills: ["React", "Spring Boot", "Mybatis", "MySQL"],
  },
  {
    title: "전자칠판 구현",
    period: "2022.02",
    description: "Web Socket과 Vanilla JS를 활용하여 전자칠판 구현",
    skills: ["JavaScript", "WebSocket"],
  },
  {
    title: "RAG 및 AI Agent 개발",
    period: "2025.02",
    description: "개인 공부로 이력서 피드백이 가능한 RAG챗봇 및 AI Agent 개발",
    skills: ["React", "LangChain", "Gemini", "ChromaDB", "etc"],
  },
  {
    title: "개인 홈페이지 구현",
    period: "2025.02",
    description: "SEO 연습 겸 이력서 용도로 구현한 홈페이지",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
];

export const education = {
  school: "한국외국어대학교",
  period: "2011.02 - 2015.02",
  major: "중앙아시아학과 (우즈베키스탄어 전공)",
  minor: "국제경영학 부전공",
  gpa: "3.74 / 4.5",
  details: ["우즈베키스탄 교환학생 및 코트라 인턴 수료", "홍콩에서 인턴경험"],
};

export const certificates = [
  {
    name: "정보처리기사",
    date: "2019. 05.",
  },
  {
    name: "SQLD",
    date: "2018. 12.",
  },
  {
    name: "리눅스마스터 2급",
    date: "2018. 12.",
  },
];
