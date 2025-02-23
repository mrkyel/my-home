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
              className="rounded-lg border border-border p-6 transition-colors hover:bg-muted/5"
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
