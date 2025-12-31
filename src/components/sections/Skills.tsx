import { skills } from "@/constants/content";
import { Section } from "../common/Section";

function SkillCategory({
  title,
  items,
  className = "",
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="bg-muted/5">
      <div className="space-y-12">
        <div>
          <h2 className="heading">Skills</h2>
          <p className="subheading">My technical skills</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Frontend</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <SkillCategory title="Basic" items={skills.frontend.basic} />
              <SkillCategory
                title="Framework"
                items={skills.frontend.framework}
              />
              <SkillCategory
                title="State Management"
                items={skills.frontend.state}
              />
              <SkillCategory title="Styling" items={skills.frontend.styling} />
              <SkillCategory title="Bundler" items={skills.frontend.bundler} />
            </div>
          </div>

          {skills.ai && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold">AI & LLM</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <SkillCategory title="LLM & Agent" items={skills.ai.llm} />
                <SkillCategory title="AI Tools" items={skills.ai.tools} />
              </div>
            </div>
          )}

          {skills.backend && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">Backend</h3>
                <p className="mt-1 text-sm text-muted">
                  이해도 있음 (큰 서비스 운영 경험은 부족)
                </p>
              </div>
              <SkillCategory title="Technologies" items={skills.backend} />
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            <SkillCategory title="DevOps" items={skills.devops} />
            <SkillCategory title="Collaboration" items={skills.collaboration} />
          </div>

          <SkillCategory title="Other Skills" items={skills.etc} />
        </div>
      </div>
    </Section>
  );
}
