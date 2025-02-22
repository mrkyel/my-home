import { profile } from "@/constants/content";
import { Button } from "../common/Button";
import { Section } from "../common/Section";

export function Hero() {
  return (
    <Section className="flex min-h-[calc(100vh-4rem)] items-center">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h1 className="heading">{profile.name}</h1>
            <p className="subheading">{profile.role}</p>
          </div>
          <p className="text-lg text-muted">{profile.bio}</p>
          <div className="flex gap-4">
            <Button as="a" href="#contact">
              Contact Me
            </Button>
            <Button
              as="a"
              href={profile.github}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-center">
          {/* 여기에 프로필 이미지나 애니메이션을 추가할 수 있습니다 */}
        </div>
      </div>
    </Section>
  );
}
