"use client";

import { profile } from "@/constants/content";
import { calculateExperienceYears } from "@/utils/experience";
import Image from "next/image";
import { Button } from "../common/Button";
import { Section } from "../common/Section";

export function Hero() {
  const experienceYears = calculateExperienceYears();
  const headline = `${experienceYears} 경력의 프론트엔드 개발자 | AI/LLM 프로젝트 주도 개발 경험 | 마이그레이션 & 성능 최적화 경험`;
  const firstBioText = `${experienceYears} 경력의 프론트엔드 개발 경험을 보유한 개발자입니다.`;

  return (
    <Section className="flex min-h-[calc(100vh-4rem)] items-center">
      <div className="flex flex-col-reverse gap-8 sm:grid-cols-2 sm:grid">
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h1 className="heading">{profile.name}</h1>
            <p className="subheading">{profile.role}</p>
            <p className="mt-4 text-xl font-semibold text-primary sm:text-2xl">
              {headline}
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-lg text-muted">{firstBioText}</p>
            <p className="text-lg font-semibold text-foreground leading-relaxed">
              Cursor와 MCP를 활용한 바이브 코딩을 즐기며, 특히 Figma MCP를 활용하여 디자인을 코드로 빠르게 전환하는 퍼블리싱이 가능합니다.
              <br className="hidden sm:block" />
              <span className="block sm:inline"> </span>
              AI 도구를 적극 활용하여 개발 생산성을 높이는 것에 관심이 많으며, 전통적인 수동 코딩 방식보다 수 배 빠른 개발 속도를 경험하고 있습니다.
            </p>
            {profile.bio.slice(1).map((item, index) => (
              <p
                key={index + 1}
                className={`text-lg ${
                  item.highlight
                    ? "font-semibold text-foreground"
                    : "text-muted"
                }`}
              >
                {item.text}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
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
            <Button
              as="a"
              href={profile.linkedin}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-full bg-muted/5 sm:h-64 sm:w-64">
            <Image
              src="/images/profile/avatar_kale.jpeg"
              alt={profile.name}
              fill
              sizes="(min-width: 640px) 256px, 96px"
              className="object-cover"
              priority
              quality={90}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
