import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = { title: string; subtitle?: string; highlights: string[]; stack: string[]; image: string; imageFit?: "cover" | "contain" };

const ProjectImageCarousel = ({ project }: { project: Project }) => {
  return (
    <div className="relative aspect-video overflow-hidden border-b border-border/50 bg-white rounded-lg m-3 mb-0">
      <img src={encodeURI(project.image)} alt={project.title} className={project.imageFit === "contain" ? "w-full h-full object-contain object-center p-3 sm:p-4" : "w-full h-full object-cover"} />
    </div>
  );
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Optimizing Healthcare Generative AI Framework",
      subtitle: "MSc Research & GenAI Evaluation",
      highlights: [
        "Researched accuracy and efficiency improvements for generative AI models in healthcare using AWS Bedrock and SageMaker with hyperparameter tuning.",
        "Improved contextual relevance of AI-generated content through structured ranking methodologies and systematic evaluation; ensured ethical compliance with anonymized data.",
      ],
      stack: ["AWS Bedrock", "AWS SageMaker", "Generative AI", "Hyperparameter Tuning", "Python"],
      image: "/healthcare_analytics.png",
      imageFit: "contain",
    },
    {
      title: "Serverless E-commerce Platform",
      subtitle: "Event-Driven Microservices on AWS",
      highlights: [
        "Built with Flask and React; deployed on AWS as event-driven serverless microservices (DynamoDB, Lambda, API Gateway) with CI/CD quality gates (Pylint, SonarCloud).",
        "Performed end-to-end testing of UI workflows and API endpoints to validate application functionality before deployment (AWS EBS).",
      ],
      stack: ["Flask", "React", "AWS DynamoDB", "AWS Lambda", "API Gateway", "Pylint", "SonarCloud"],
      image: "/volt_metrics_project.png",
      imageFit: "contain",
    },
    {
      title: "ECS Migration Lab",
      subtitle: "Infrastructure as Code & Observability",
      highlights: [
        "Containerizing and migrating a Django application to AWS ECS with Terraform-provisioned infrastructure, GitHub Actions deployment, and CloudWatch/Datadog observability.",
      ],
      stack: ["Django", "AWS ECS", "Terraform", "GitHub Actions", "CloudWatch", "Datadog", "Docker"],
      image: "/Phishing Detection.png",
      imageFit: "contain",
    },
    {
      title: "Production-Oriented Enterprise RAG Prototype",
      subtitle: "LLM Retrieval & Evaluation Metrics",
      highlights: [
        "Built a production-oriented enterprise RAG prototype using Python, FastAPI, PostgreSQL/pgvector and LLMs.",
        "Implemented permission-aware retrieval, document provenance, knowledge freshness checks, conflict detection, source-grounded responses and evaluation metrics for accuracy, hallucination and traceability.",
      ],
      stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "LLMs", "RAG Pipeline", "Evaluation Metrics"],
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
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">Generative AI frameworks, serverless cloud platforms, containerized ECS migrations, and RAG prototypes.</p>
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-2">Technologies & Tools</p>
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
