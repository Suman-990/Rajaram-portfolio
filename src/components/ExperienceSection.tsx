import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "WNS Vuram Technologies",
      position: "Associate Technical Consultant – DevOps & Integration",
      location: "India",
      duration: "Jul 2021 – Aug 2023",
      logoSrc: "/wns_logo.svg",
      logoAlt: "WNS Vuram Technologies",
      achievements: [
        {
          impact: "Deployment time reduced from 5h to <3h (+40% sprint delivery)",
          description: "Designed and deployed CI/CD pipelines for KONE, reducing deployment time from 5 hours to under 3 and increasing sprint delivery by 40%."
        },
        {
          impact: "30% reduction in manual geospatial processing",
          description: "Integrated LLM-powered services into geospatial workflows, reducing manual processing by 30% and improving task completion accuracy."
        },
        {
          impact: "20% reduction in Django REST API latency",
          description: "Built and integrated Django REST API services with structured error handling, reducing average API latency by 20% and increasing reliability."
        },
        {
          impact: "Page Object Model test automation",
          description: "Developed reusable automation components using Page Object Model principles to enhance maintainability and scalability."
        },
        {
          impact: "15% faster incident resolution",
          description: "Enhanced production monitoring with Datadog and CloudWatch, achieving 15% faster incident resolution across release cycles."
        },
        {
          impact: "Cross-functional architecture & Jira release notes",
          description: "Produced design specifications, architecture documentation, and release notes in Jira while collaborating with infrastructure and support teams to align releases with backend upgrades."
        },
        {
          impact: "25% workflow throughput increase for Plan SA",
          description: "Delivered low-code Appian enhancements for Plan SA's land acquisition system, improving workflow throughput by 25%."
        }
      ],
      technologies: ["AWS", "CI/CD Pipelines", "Django REST API", "LLM Integration", "Page Object Model", "Datadog", "CloudWatch", "Appian", "Jira"],
    },
    {
      company: "Tata Consultancy Services",
      position: "Developer Intern",
      location: "India",
      duration: "May 2021 – Jul 2021",
      logoSrc: "/tcs_logo.svg",
      logoAlt: "Tata Consultancy Services",
      achievements: [
        {
          impact: "+15% prediction accuracy for computer vision app",
          description: "Contributed to a Python-based computer vision application for AIG, detecting user experience via facial expressions and improving prediction accuracy by 15%."
        },
        {
          impact: "25% increase in test coverage & reduced UAT bug rates",
          description: "Supported QA automation, increasing test coverage by 25% and reducing UAT bug rates."
        }
      ],
      technologies: ["Python", "Computer Vision", "QA Automation", "Test Coverage", "UAT Testing"],
    },
    {
      company: "Bidvest Noonan",
      position: "Site Supervisor (part-time)",
      location: "Dublin, Ireland",
      duration: "Jun 2025 – Present",
      logoSrc: "/bidvest_logo.svg",
      logoAlt: "Bidvest Noonan",
      achievements: [
        {
          impact: "Operational compliance & team leadership",
          description: "Coordinated teams, managed stakeholder reporting, and ensured compliance in a live operational environment."
        }
      ],
      technologies: ["Team Leadership", "Stakeholder Reporting", "Operational Compliance"],
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground font-space-grotesk">
            Work <span className="bg-gradient-to-r from-[hsl(202_100%_42%)] to-[hsl(202_85%_28%)] bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cloud infrastructure, CI/CD automation, AI service integration, and software engineering.
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="rounded-lg border border-border/70 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-[9.5rem] sm:w-[10.5rem] shrink-0 rounded-xl bg-white border border-border px-2.5 py-2 shadow-sm flex items-center justify-start">
                      <img src={exp.logoSrc} alt={exp.logoAlt} className="h-14 sm:h-16 w-auto max-w-none object-contain object-left" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground font-space-grotesk">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-[hsl(var(--primary))] font-semibold text-lg mt-1"><Building2 className="w-4 h-4 shrink-0" />{exp.company}</div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 shrink-0" />{exp.duration}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" />{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="hidden md:block space-y-4">
                  {exp.achievements.map((a, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-primary/10">
                      <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center shrink-0 mt-1"><TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" /></div>
                      <div><div className="text-[hsl(var(--primary))] font-semibold text-lg leading-snug">{a.impact}</div><p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{a.description}</p></div>
                    </div>
                  ))}
                </div>
                <div className="md:hidden">
                  <Carousel opts={{ align: "start", loop: true }} className="w-full relative">
                    <CarouselContent className="-ml-2">
                      {exp.achievements.map((a, i) => (
                        <CarouselItem key={i} className="pl-2 basis-full">
                          <div className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-primary/10">
                            <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center shrink-0 mt-1"><TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" /></div>
                            <div><div className="text-[hsl(var(--primary))] font-semibold text-lg">{a.impact}</div><p className="text-muted-foreground text-sm">{a.description}</p></div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 border-border bg-background shadow-sm" />
                    <CarouselNext className="right-2 border-border bg-background shadow-sm" />
                  </Carousel>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Skills & Tools Used</h4>
                  <div className="flex flex-wrap gap-2">{exp.technologies.map((t, i) => <Badge key={i} variant="secondary" className="text-xs font-normal rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60">{t}</Badge>)}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
