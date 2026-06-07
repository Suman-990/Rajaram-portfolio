import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Project = { title: string; subtitle?: string; highlights: string[]; stack: string[]; image: string; imageFit?: "cover" | "contain" };

const ProjectImageCarousel = ({ project }: { project: Project }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative aspect-video overflow-hidden border-b border-border/50 bg-white rounded-lg m-3 mb-0">
      <img src={encodeURI(project.image)} alt={project.title} className={project.imageFit === "contain" ? "w-full h-full object-contain object-center p-3 sm:p-4" : "w-full h-full object-cover"} />
    </div>
  );
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Business Intelligence & Analytics Platform",
      subtitle: "Customer Analytics Dashboard",
      highlights: [
        "Built interactive dashboards with calculated measures and customer segmentation, reducing manual reporting by 40%.",
        "Analysed 80,000+ transactions and 7,000+ records to uncover revenue drivers and purchasing patterns.",
        "Informed strategy with data-driven insights on customer behaviour and high-value segments.",
      ],
      stack: ["Power BI", "DAX", "SQL", "Python", "Tableau"],
      image: "/volt_metrics_project.png",
      imageFit: "contain",
    },
    {
      title: "Detection System Using Explainable AI",
      highlights: [
        "Examined 11,000+ real-world URLs to identify behavioural and structural indicators of risk.",
        "Improved early identification using data pre-processing, feature analysis, and exploratory analysis.",
        "Developed hybrid detection pipeline using embeddings and ML models, achieving 97% accuracy.",
      ],
      stack: ["Python", "Machine Learning", "NLP", "EDA", "Feature Engineering"],
      image: "/Phishing Detection.png",
      imageFit: "contain",
    },
    {
      title: "Sector Data Analytics",
      subtitle: "Spending and Facility Analysis",
      highlights: [
        "Analysed large-scale datasets to uncover spending patterns and facility-level trends.",
        "Segmented items into cost-based clusters and identified high-cost outliers for analysis.",
        "Developed classification models to evaluate facility characteristics using regression and ensemble methods.",
      ],
      stack: ["Python", "SQL", "Logistic Regression", "Random Forest", "Data Analysis"],
      image: "/healthcare_analytics.png",
      imageFit: "contain",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Projects</h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">Analytics, dashboards, and applied machine learning projects.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="rounded-lg border border-border/70 bg-card shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <ProjectImageCarousel project={project} />
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-foreground leading-snug">{project.title}</CardTitle>
                  {project.subtitle && <p className="text-sm font-medium text-[hsl(var(--primary))] mt-1">{project.subtitle}</p>}
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1 pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                    {project.highlights.map((line) => (
                      <li key={line.slice(0, 48)} className="flex gap-2.5 leading-relaxed">
                        <span className="text-[hsl(var(--primary))] shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-current" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-2">Skills used</p>
                    <div className="flex flex-wrap gap-1.5">{project.stack.map((tech) => <Badge key={tech} variant="secondary" className="font-normal text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60">{tech}</Badge>)}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
