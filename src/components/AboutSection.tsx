import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Linkedin, GraduationCap, Calendar, Globe, Award, Phone } from "lucide-react";
import { CONTACT_EMAIL } from "@/config/site";

const AboutSection = () => {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Dublin, Ireland" },
    { icon: GraduationCap, label: "Education", value: "Master's Degree" },
    { icon: Calendar, label: "Experience", value: "3+ years" },
    { icon: Globe, label: "Focus", value: "Analysis & Delivery" },
  ];

  const contactInfo = [
    { icon: Phone, value: "+353 00 000 0000", href: "tel:+353000000000" },
    { icon: Mail, value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: Linkedin, value: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">About</h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                Motivated professional with 3+ years of experience turning complex information into clear,
                actionable insights. I have worked across reporting, process improvement, and cross-functional
                delivery — always with a focus on accuracy, communication, and measurable outcomes.
              </p>
              <p>
                My strengths lie in structured analysis, building reliable reporting frameworks, and collaborating
                with teams to identify inefficiencies and implement practical solutions. I am comfortable working
                independently on detailed tasks and contributing to broader strategic discussions.
              </p>
              <p>
                I hold a Master's degree and am actively looking for roles where analytical thinking, attention
                to detail, and a commitment to continuous improvement are valued.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-card border border-border/60 shadow-sm hover:border-[hsl(var(--primary))]/30 transition-colors duration-200">
                    <contact.icon className="w-5 h-5 text-[hsl(var(--primary))] shrink-0" />
                    <a href={contact.href} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-[hsl(var(--primary))] transition-colors text-sm break-all">{contact.value}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <Card className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center"><Award className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />Quick facts</h4>
                  <div className="space-y-6">
                    {quickFacts.map((fact, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-4 border-b border-border last:border-0 last:pb-0">
                        <fact.icon className="w-5 h-5 text-[hsl(var(--primary))] mt-1 shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm uppercase tracking-wide">{fact.label}</p>
                          <p className="text-muted-foreground mt-1 font-medium text-sm">{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
