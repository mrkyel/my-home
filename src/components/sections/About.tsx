import { profile } from "@/constants/content";
import { Section } from "../common/Section";

export function About() {
  return (
    <Section id="about" className="bg-muted/5">
      <div className="grid gap-12 sm:grid-cols-[2fr_3fr]">
        <div>
          <h2 className="heading">About Me</h2>
          <p className="subheading">Let me introduce myself</p>
        </div>
        <div className="space-y-4 text-lg">
          <p>{profile.bio}</p>
          <p>
            새로운 기술을 배우고 적용하는 것을 좋아하며, 사용자 경험을 개선하기
            위해 끊임없이 고민합니다. 클린 코드와 성능 최적화에 대한 관심이
            많으며, 팀원들과의 협업을 통해 더 나은 결과물을 만들어내는 것을
            즐깁니다.
          </p>
        </div>
      </div>
    </Section>
  );
}
