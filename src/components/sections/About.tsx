import { education, certificates } from "@/constants/content";
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
          <div className="space-y-6 text-lg">
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <h4 className="mb-2 font-semibold text-foreground">
                  비즈니스 이해도와 소통 능력
                </h4>
                <p className="text-muted">
                  영업 경험을 통해 쌓은 비즈니스 이해도와 소통 능력으로, 개발자와
                  기획자/디자이너 간의 원활한 협업을 이끌어냅니다. 제품의 비즈니스
                  가치를 이해하고 기술적 솔루션으로 구현하는 데 강점이 있습니다.
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <h4 className="mb-2 font-semibold text-foreground">
                  최신 기술 트렌드 반영
                </h4>
                <p className="text-muted">
                  AI/LLM 프로젝트를 주도적으로 개발하며 최신 기술 트렌드를
                  프로젝트에 잘 반영하고 있습니다. RAG, AI Agent, MCP 등 차세대 기술을 실제
                  프로젝트에 적용한 경험이 있어, 회사의 기술 혁신에 기여할 수 있습니다.
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <h4 className="mb-2 font-semibold text-foreground">
                  레거시 시스템 현대화 경험
                </h4>
                <p className="text-muted">
                  Angular → React 마이그레이션을 외부 라이브러리 없이 완료한
                  경험이 있습니다. 레거시 시스템을 현대적인 기술 스택으로
                  전환하여 유지보수성과 개발 생산성을 향상시키는 데 경험이
                  있습니다.
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <h4 className="mb-2 font-semibold text-foreground">
                  백엔드 이해도 & 커리어 전환 의지
                </h4>
                <p className="text-muted">
                  Node.js, Spring Boot 등 백엔드 기술에 대한 이해가 있으며, 전체 시스템을 고려한 개발 관점을 가지고 있습니다. 
                  큰 서비스를 직접 운영해본 경험은 아직 부족하지만, 백엔드 개발자로의 커리어 전환이나 다른 포지션으로의 전향에 매우 열려있습니다. 
                  새로운 도전을 통해 성장하고 기여할 준비가 되어있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Certificates</h3>
            <div className="rounded-lg border border-border p-6">
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      <div className="space-y-1">
                        <h4 className="text-base font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted">
                          Certificate No. {cert.number}
                        </p>
                        <p className="text-sm text-muted/80">
                          {cert.organization}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm text-muted">
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
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold">
                    {education.university.school}
                  </h4>
                  <p className="text-muted">{education.university.period}</p>
                </div>
                <div className="space-y-2 text-muted">
                  <p>• {education.university.major}</p>
                  <p>• {education.university.minor}</p>
                  <p>• GPA: {education.university.gpa}</p>
                  {education.university.details.map((detail, index) => (
                    <p key={index}>• {detail}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold">
                    {education.vocational.school}
                  </h4>
                  <p className="text-muted">{education.vocational.period}</p>
                  <br />
                  <p className="font-medium">{education.vocational.course}</p>
                </div>
                <div className="space-y-2 text-muted">
                  <p>• 최종 프로젝트: {education.vocational.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
