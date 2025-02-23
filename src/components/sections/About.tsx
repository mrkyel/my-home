import { education, profile } from "@/constants/content";
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
            <p>{profile.bio}</p>
            <p>
              풀스택 개발자를 꿈꾸며, 새로운 기술을 배우고 적용하는 것을
              즐깁니다. 타인과의 원만한 소통이 개발자에게 매우 중요한 덕목임을
              믿습니다.
            </p>
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
