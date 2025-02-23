import { projects } from "@/constants/content";
import { Section } from "../common/Section";
import { Button } from "../common/Button";
import Image from "next/image";

export function Projects() {
  return (
    <Section id="projects" className="bg-muted/5">
      <div className="space-y-12">
        <div>
          <h2 className="heading">Projects</h2>
          <p className="subheading">What I&apos;ve built</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border p-6 transition-colors hover:bg-muted/5"
            >
              {project.imageUrl && (
                <div className="mb-6 overflow-hidden rounded-lg border border-border">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="mb-4">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-muted">{project.period}</p>
                </div>
                <p className="text-muted">{project.description}</p>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted/10 px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                  <Button
                    as="a"
                    href={project.githubUrl}
                    variant="outline"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                )}
                {project.demoUrl && (
                  <Button
                    as="a"
                    href={project.demoUrl}
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
