import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, CheckCircle2 } from "lucide-react";

const KeyAchievementsSection = () => {
  const achievements = [
    "KONE CI/CD deployment time reduced from 5 hours to <3 hours (+40% sprint delivery)",
    "30% reduction in manual geospatial processing via LLM service integration",
    "20% average latency reduction for Django REST API services with structured error handling",
    "15% faster incident resolution across release cycles using Datadog and CloudWatch",
  ];

  const certifications = [
    { title: "Software Development .Net and React", issuer: "Software Development", year: "2025" },
    { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services (AWS)", year: "2024" },
    { title: "AWS Solutions Architect - Associate", issuer: "AWS (Exam Scheduled)", year: "Aug 2026" },
    { title: "Appian Associate Developer", issuer: "Appian", year: "2023" },
    { title: "NPTEL Python (Elite Category)", issuer: "NPTEL", year: "2021" },
  ];

  return (
    <section id="achievements" className="py-16 md:py-20 bg-white border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Key Achievements */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Key Achievements</h2>
              <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-4" />
              <p className="text-base text-muted-foreground max-w-xl mx-auto">Measurable metrics and operational impact delivered across client engagements.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {achievements.map((text) => (
                <Card key={text} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[hsl(var(--primary))]/25 transition-all duration-200">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))]/15 flex items-center justify-center shrink-0"><TrendingUp className="w-5 h-5 text-[hsl(var(--primary))]" /></div>
                    <p className="text-sm sm:text-base font-semibold text-foreground leading-snug">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 flex items-center justify-center gap-2">
                <Award className="w-6 h-6 text-[hsl(var(--primary))]" />
                Certifications
              </h3>
              <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-4" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {certifications.map((cert) => (
                <Card key={cert.title} className="rounded-lg border border-border/70 bg-[hsl(var(--section-bg))] shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="p-5 pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base font-semibold text-foreground leading-snug">{cert.title}</CardTitle>
                      <Badge variant="outline" className="text-xs bg-white text-[hsl(var(--primary))] border-[hsl(var(--primary))]/30 shrink-0 font-medium">{cert.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 pt-0 flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] shrink-0" />
                    <span>{cert.issuer}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievementsSection;
