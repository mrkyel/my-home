import { experiences } from "@/constants/content";
import { Section } from "../common/Section";

export function Experience() {
  return (
    <Section id="experience">
      <div className="space-y-12">
        <div>
          <h2 className="heading">Experience</h2>
          <p className="subheading">My professional journey</p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:bg-muted/5 hover:shadow-md hover:border-primary/20"
            >
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-muted">{experience.position}</p>
                </div>
                <p className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  {experience.period}
                </p>
              </div>

              <ul className="mb-6 space-y-2 text-muted">
                {experience.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[0.4375rem] h-[0.375rem] w-[0.375rem] flex-shrink-0 rounded-full bg-primary" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {experience.achievements && experience.achievements.length > 0 && (
                <div className="mb-6 rounded-lg bg-primary/5 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-primary">
                    주요 성과
                  </h4>
                  <ul className="space-y-1 text-sm text-muted">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-0.5 flex-shrink-0 text-primary">✓</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {experience.reasonForLeaving && (
                <div className="mb-6 rounded-lg border border-muted/20 bg-muted/5 p-4">
                  <h4 className="mb-1 text-xs font-semibold text-muted">
                    퇴직 사유
                  </h4>
                  <p className="text-sm text-muted">{experience.reasonForLeaving}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted/10 px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
