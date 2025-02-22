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

        <div className="grid gap-8 sm:grid-cols-2">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="rounded-lg border border-border p-6 space-y-4"
            >
              <div>
                <h3 className="text-xl font-bold">{experience.company}</h3>
                <p className="text-muted">{experience.position}</p>
                <p className="text-sm text-muted">{experience.period}</p>
              </div>

              <ul className="list-disc list-inside space-y-2 text-muted">
                {experience.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
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
