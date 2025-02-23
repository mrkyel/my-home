import { education, profile, certificates } from "@/constants/content";
import { Section } from "../common/Section";

export function About() {
  return (
    <Section id="about" className="bg-muted/5">
      <div className="grid gap-12 sm:grid-cols-[2fr_3fr]">
        <div>
          <h2 className="heading">About Me</h2>
          <p className="subheading">Let me introduce myself</p>
        </div>
        <div className="space-y-8">
          <div className="space-y-4 text-lg">
            <div className="space-y-4 text-muted">
              <p>
                저는 한국외국어대학교에서 중앙아시아학을 전공하고 국제경영학을
                부전공하며 다양한 해외 경험을 쌓았습니다.
              </p>
              <p>
                졸업 후에는 약 2년 반 동안 영업직으로 근무하며 비즈니스
                커뮤니케이션 능력을 키웠습니다. 비록 개발 직군과 직접적인
                연관성은 없지만, 이 경험을 통해 얻은 소통 능력과 문제 해결
                능력은 현재 개발자로서의 업무에도 큰 도움이 되고 있습니다.
              </p>
              <p>
                5년 이상의 프론트엔드 개발 경험을 통해 React, Angular 등 다양한
                프레임워크를 다뤄왔으며, 특히 마이그레이션 프로젝트와 새로운
                기술 도입에 강점이 있습니다. 현재는 마음AI에서 음성인식 및 LLM
                관련 프로젝트들과 백오피스 만들기 등을 진행하고 있습니다.
              </p>
              <p>
                저는 Git을 사용한 형상관리에 익숙하며 여러 팀원들과의 협업 시
                이를 이끌어 나갈 능력이 있습니다.
              </p>
              <p>
                개발자의 미래가 빠르게 변화하고 있지만, 아직 제가 할 수 있는
                부분이 많다고 생각되며, 앞으로도 풀스택 개발자를 목표로 계속해서
                발전해 나가고자 합니다.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Certificates</h3>
            <div className="rounded-lg border border-border p-6">
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between gap-16">
                      <h4 className="text-base font-semibold">{cert.name}</h4>
                      <span className="ml-4 shrink-0 text-sm text-muted">
                        <span className="tabular-nums">{cert.date}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Education</h3>
            <div className="rounded-lg border border-border p-6">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">{education.school}</h4>
                <p className="text-muted">{education.period}</p>
              </div>
              <div className="space-y-2 text-muted">
                <p>• {education.major}</p>
                <p>• {education.minor}</p>
                <p>• GPA: {education.gpa}</p>
                {education.details.map((detail, index) => (
                  <p key={index}>• {detail}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-muted hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 text-muted hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {profile.phone}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
