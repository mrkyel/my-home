import { profile } from "@/constants/content";
import Image from "next/image";
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
        <div className="hidden items-center justify-center sm:flex">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-primary bg-muted/5">
            <Image
              src="/images/profile/avatar_kale.jpeg"
              alt={profile.name}
              fill
              sizes="256px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
