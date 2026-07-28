import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "Indian Institute of Technology (IIT, Mandi)",
      degree: "Minor in AI and Data Science",
      dates: "Jun 2025 – May 2026",
      coursework: ["AI Foundations", "Data Science Applications", "Machine Learning", "Model Evaluation"]
    },
    {
      institution: "National College of Ireland, Dublin",
      degree: "MSc in Cloud Computing (2.1 Honours)",
      dates: "Sep 2023 – Nov 2024",
      coursework: ["Cloud Architecture", "Cloud DevOpsSec", "Cloud Machine Learning", "Scalable Cloud Programming", "Fog & Edge Computing"]
    },
    {
      institution: "Anna University, Chennai",
      degree: "BE in Computer Science (8.13 CGPA)",
      dates: "Aug 2018 – May 2022",
      coursework: ["Data Structures & Algorithms", "Database Management Systems", "Software Engineering", "Operating Systems", "Computer Networks"]
    },
  ];

  return (
    <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Education</h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">Academic degrees and specialized qualifications in AI, Data Science, and Cloud Computing.</p>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center"><GraduationCap className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />Degrees & Specialisations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 border-l-[hsl(var(--primary))] flex flex-col justify-between">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-foreground mb-2 leading-snug">{edu.degree}</CardTitle>
                  <p className="text-sm font-semibold text-[hsl(var(--primary))]">{edu.institution}</p>
                  <div className="flex items-center space-x-2 text-muted-foreground mt-2 text-xs"><Calendar className="w-3.5 h-3.5" /><span className="font-medium">{edu.dates}</span></div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-semibold text-foreground mb-2 text-xs">Coursework & Modules:</p>
                  <div className="flex flex-wrap gap-1.5">{edu.coursework.map((c, i) => <Badge key={i} variant="secondary" className="font-normal text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60">{c}</Badge>)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
