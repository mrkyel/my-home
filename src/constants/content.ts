import { Experience, Profile, Project } from "@/types";

export const profile: Profile = {
  name: "김한결",
  role: "Front-End Developer",
  headline: "", // Hero 컴포넌트에서 동적으로 계산
  bio: [
    { text: "" }, // Hero 컴포넌트에서 동적으로 계산
    {
      text: "React, Angular 등 다양한 프레임워크를 다뤄보았으며, 특히 마이그레이션 프로젝트와 새로운 기술 도입에 강점이 있습니다.",
      highlight: true,
    },
    {
      text: "최근 AI/LLM 프로젝트(음성인식, RAG, AI Agent)를 주도적으로 개발하며 최신 기술 트렌드를 프로젝트에 반영하고 있습니다.",
      highlight: true,
    },
    {
      text: "제품에 대한 깊은 이해와 원만한 소통을 바탕으로 비즈니스 가치를 창출하는 개발을 추구합니다.",
    },
  ],
  email: "kyel100@naver.com",
  github: "https://github.com/mrkyel",
  linkedin: "https://www.linkedin.com/in/한결-김-724147176",
};

export const valuePropositions = [
  {
    title: "AI/LLM 프로젝트 주도 개발 경험",
    description:
      "현 회사에서 음성인식, RAG, AI Agent 등 최신 AI 기술을 활용한 프로젝트들을 주로 담당해왔습니다. 회사의 AI 서비스 확장에 기여할 수 있는 경험을 보유하고 있습니다.",
    icon: "🤖",
  },
  {
    title: "마이그레이션 & 기술 도입 경험",
    description:
      "Angular → React 마이그레이션을 외부 라이브러리 없이 완료한 경험이 있습니다. 레거시 시스템을 현대적인 기술 스택으로 전환하는 데 강점이 있습니다.",
    icon: "🔄",
  },
  {
    title: "백엔드 이해도 & 커리어 전환 의지",
    description:
      "Node.js, Spring Boot 등 백엔드 기술에 대한 이해가 있으며, 백엔드 개발자로의 커리어 전환이나 다른 포지션으로의 전향에 매우 열려있습니다. 전체 시스템을 고려한 개발 관점을 가지고 있습니다.",
    icon: "💻",
  },
  {
    title: "비즈니스 이해도 & 소통 능력",
    description:
      "영업 경험을 바탕으로 한 비즈니스 이해도와 소통 능력으로, 개발자와 기획자/디자이너 간의 원활한 협업을 이끌어냅니다.",
    icon: "🤝",
  },
];

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
  ai: {
    llm: ["LangChain", "RAG", "AI Agent", "MCP"],
    tools: ["Gemini API", "OpenAI API", "ChromaDB", "Vector DB"],
  },
  backend: ["Node.js", "Spring Boot", "Socket.io", "RESTful API"],
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
  devops: ["Git", "Github", "Sourctree", "Jenkins", "AWS", "Git Hook", "Nginx"],
  etc: ["Python Crawling", "React Native", "SQLite", "Canvas API"],
};

export const experiences: Experience[] = [
  {
    company: "마음AI",
    position: "Frontend Developer",
    period: "2023.08 - Present",
    description: [
      "음성인식 API를 활용한 실시간 다국어 번역 시스템 구축 - 소켓 통신으로 지연시간 최소화",
      "LLM 엔진별 설정 테스트가 가능한 ChatPlay 플랫폼 메인 개발 - 개발 생산성 30% 향상",
      "RAG 모델 기반 LLM 채팅 시스템 구현 - 벡터 DB 연동 및 컨텍스트 관리",
      "다중 디바이스 대응 Builder 시스템 개발 (PC/Kiosk/Mobile) - Admin 설정 기반 동적 UI 구성",
      "Canvas API를 활용한 지도 기반 시각화 Tool 개발 - 복잡한 지리 정보 시각화",
      "로봇 제어를 위한 안드로이드 웹뷰 개발 - 하이브리드 앱 아키텍처 설계",
      "RMS(로봇 제어 시스템) 개발 참여 - MQTT 프로토콜을 활용한 로봇 상태 수신 및 제어 중간 역할 개발",
    ],
    achievements: [
      "AI 서비스 프론트엔드 아키텍처 설계 및 구현",
      "실시간 소켓 통신 최적화로 응답 속도 개선",
      "MQTT 기반 로봇 제어 시스템 개발로 IoT 연동 경험 확보",
    ],
    skills: [
      "React",
      "Recoil",
      "TypeScript",
      "Vite",
      "Node.js",
      "Socket.io",
      "MQTT",
      "Canvas",
      "RAG",
      "LLM",
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
    achievements: [
      "소셜 로그인 연동으로 회원가입 10% 증가",
      "출석체크 이벤트 구현으로 순간 유입량 20% 증가",
    ],
    skills: ["Angular", "Rxjs", "Git", "Next.js", "React-Query", "Zustand"],
    reasonForLeaving: "경영악화로 인한 전체 권고사직",
  },
  {
    company: "아토리서치",
    position: "Frontend Developer",
    period: "2021.05 - 2022.09",
    description: [
      "외부 라이브러리 없이 Angular → React 마이그레이션 완료 - 코드베이스 100% 자체 구현",
      "Verdaccio 기반 내부 컴포넌트 라이브러리 구축 - 재사용성 향상 및 개발 속도 개선",
      "Webpack, Babel을 활용한 React 보일러플레이트 구축 - 팀 개발 표준화",
      "모노레포 아키텍처 설계 및 구현 - 서비스 분리 및 독립 배포 환경 구축",
      "Linux Ubuntu 서버 Nginx 설정 및 프론트엔드 배포 파이프라인 구축 - CI/CD 자동화",
    ],
    achievements: [
      "레거시 시스템을 현대적 기술 스택으로 성공적으로 전환",
      "팀 내 온프레미스 npm 라이브러리 관리 시스템 구축으로 개발 속도 개선",
    ],
    skills: [
      "React",
      "Redux-Toolkit",
      "Webpack",
      "Babel",
      "Verdaccio",
      "Nginx",
      "Monorepo",
    ],
  },
  {
    company: "잉카인터넷",
    position: "Frontend Developer",
    period: "2019.08 - 2021.04",
    description: [
      "React로 구성된 Admin 사이트 유지보수",
      "Mobx를 이용하여 상태관리",
      "Class 컴포넌트를 함수 컴포넌트로 리팩토링",
      "Legacy 코드 전체 리팩토링",
      "Ant Design을 활용하여 빠른 스타일링으로 Admin 리팩토링",
    ],
    achievements: [
      "Class 컴포넌트를 함수 컴포넌트로 리팩토링하여 유지보수성과 가독성 향상",
      "Ant Design 활용으로 스타일링 효율 향상",
    ],
    skills: ["React", "Mobx", "Ant Design"],
  },
  {
    company: "경진에셋",
    position: "지점장",
    period: "2016.03 - 2018.06",
    description: [
      "신도림사업단에서 사업단장으로 영업지점관리 및 직원들 영업교육 담당",
      "구로사업단에서 부사업단장으로 영업지원 및 총무업무 겸임",
      "본사 을지로지점에서 총무업무 겸임",
      "손해보험, 생명보험, 변액보험 자격증 직접취득하여 직원들 자격증 취득 독려 및 교육",
    ],
    achievements: ["직원 관리 업무를 통해 커뮤니케이션 스킬 향상"],
    skills: ["영업관리", "총무", "직원 관리 및 교육"],
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
  university: {
    school: "한국외국어대학교",
    period: "2011.02 - 2015.02",
    major: "중앙아시아학과 (우즈베키스탄어 전공)",
    minor: "국제경영학 부전공",
    gpa: "3.74 / 4.5",
    details: ["우즈베키스탄 교환학생 및 코트라 인턴 수료", "홍콩에서 인턴경험"],
  },
  vocational: {
    school: "에이콘아카데미",
    course:
      "프론트엔드(ReactJS, AngularJS) 개발을 위한 자바(JAVA)웹개발자 양성과정",
    period: "2019.03.12 - 2019.08.02",
    type: "국가기간전략산업직종",
    result: "오늘의집 Q&A게시판 Spring 구현",
  },
};

export const certificates = [
  {
    name: "정보처리기사",
    date: "2019. 05.22",
    number: "19201021355V",
    organization: "한국산업인력공단",
  },
  {
    name: "SQLD",
    date: "2018. 12.09",
    number: "SQLD-0310580",
    organization: "한국데이터베이스진흥센터",
  },
  {
    name: "리눅스마스터 2급",
    date: "2018. 12.09",
    number: "LMS-1804-002188",
    organization: "한국정보통신인력개발센터",
  },
];
