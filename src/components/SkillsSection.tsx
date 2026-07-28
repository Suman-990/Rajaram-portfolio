import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI & Data Engineering",
      skills: ["LLM Integration", "NLP Workflows", "Model Evaluation", "Hyperparameter Tuning", "Generative AI", "Structured/Unstructured Data Processing"]
    },
    {
      title: "Programming & Frameworks",
      skills: ["Python (Django, Flask, SQLAlchemy)", "JavaScript (ES6, React, Node.js)", "PowerShell Scripting", "REST APIs"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (Bedrock, SageMaker, EC2, S3, Lambda, API Gateway, DynamoDB, CloudWatch, ECS)", "Terraform", "CloudFormation", "Docker", "Git (GitHub, Bitbucket)", "Datadog"]
    },
    {
      title: "Testing, Databases & Systems",
      skills: ["Postman", "Playwright", "Pylint", "SonarCloud", "PostgreSQL", "MySQL", "SQL ETL Optimization", "Bash/Shell", "Agile / Jira"]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Skills</h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">Technical skills across AI engineering, cloud infrastructure, DevOps, and full-stack development.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="rounded-lg border border-border/70 bg-[hsl(var(--skill-bg))] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <CardHeader className="pb-3"><CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle></CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="rounded-lg border-0 bg-[hsl(var(--primary))] px-3.5 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-[hsl(var(--primary))]/90">{skill}</Badge>
                    ))}
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

export default SkillsSection;
