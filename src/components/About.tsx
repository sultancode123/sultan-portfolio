import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Clock, BookOpen, Globe, MessageSquare } from "lucide-react";

export const About = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA) — Pursuing",
      university: "Manipal University Jaipur",
      duration: "Jun 2026 – Apr 2028",
      gpa: null
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      university: "Kavi Kulguru Kalidas Sanskrit University, Nagpur",
      duration: "Jun 2022 – May 2025",
      gpa: "8.86"
    }
  ];

  const skills = [
    { icon: Users, label: "Team Collaboration" },
    { icon: Clock, label: "Time Management" },
    { icon: BookOpen, label: "Fast Learner" },
    { icon: MessageSquare, label: "Problem Solving" }
  ];

  const languages = ["English", "Hindi", "Marathi", "Urdu"];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-section-bg via-background to-section-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-orange/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-orange mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's get to know more about me, my background, and what drives my passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-glass backdrop-blur-glass border border-glass-border rounded-2xl p-8 shadow-glass hover:shadow-glow transition-all duration-300">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sultan Khot is a Software Developer with hands-on experience in building
                and maintaining web applications, REST APIs, and database-driven backend
                systems in a live production environment. He currently works as a Software
                Developer at Chowgule Mediconsult Pvt. Ltd., building healthcare platform
                modules used in real-world clinical settings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Skilled in C#, ASP.NET MVC, .NET Core, SQL Server, and PHP Laravel, with a
                growing focus on cloud technologies — AWS Certified Cloud Practitioner and
                experienced with Docker deployments. Currently expanding into Angular and
                scalable backend architecture to grow into a full-stack .NET developer.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <Badge key={language} variant="secondary" className="px-3 py-1">
                    <Globe className="mr-1 h-3 w-3" />
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
            {education.map((edu, index) => (
              <Card key={index} className="bg-glass backdrop-blur-glass border border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-3 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Education</h4>
                      <h5 className="font-medium text-primary mb-1">{edu.degree}</h5>
                      <p className="text-muted-foreground text-sm mb-2">{edu.university}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{edu.duration}</span>
                        {edu.gpa && <Badge className="bg-accent-orange text-white">GPA: {edu.gpa}</Badge>}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="bg-glass backdrop-blur-glass border border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 group">
              <div className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Core Strengths</h4>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center space-x-2">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon size={16} />
                      </div>
                      <span className="text-sm text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};