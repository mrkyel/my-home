import { valuePropositions } from "@/constants/content";
import { Section } from "../common/Section";

export function ValueProposition() {
  return (
    <Section id="value" className="bg-gradient-to-b from-muted/5 to-background">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="heading">What I Can Bring to Your Team</h2>
          <p className="subheading">
            회사에 기여할 수 있는 핵심 가치와 경험
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {valuePropositions.map((value, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="text-4xl">{value.icon}</span>
                <h3 className="text-xl font-bold">{value.title}</h3>
              </div>
              <p className="text-muted leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

