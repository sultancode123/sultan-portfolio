import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ScanFace, ShoppingBag, HeartPulse } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "EventFace AI — Face Recognition System",
      description: "AI-powered face recognition system using AWS Rekognition to search through 4000+ event photos in seconds. Built with a 3-table MySQL authentication system and deployed via Docker on Render Cloud.",
      technologies: ["ASP.NET Core 9", "AWS Rekognition", "MySQL", "Docker", "Render"],
      features: [
        "AWS Rekognition-based face search across 4000+ photos",
        "3-table MySQL authentication system",
        "Docker containerized deployment",
        "Hosted live on Render Cloud"
      ],
      icon: ScanFace,
      category: "AI / Cloud",
      status: "Live",
      demoNote: "Demo — ID: DEMO123 | Email: demo@facesearch.com",
      githubUrl: "", // ← yahan apna GitHub repo link daalo agar hai
      liveUrl: ""    // ← yahan live demo link daalo (jo tumhare paas hai use daal do)
    },
    {
      title: "Healthcare Web Platform",
      description: "Live production healthcare platform where I develop and maintain backend logic, admin panel, and API integrations as part of my current role at Chowgule Mediconsult.",
      technologies: ["PHP", "Laravel", "MySQL", "C#", "ASP.NET MVC"],
      features: [
        "Backend logic and admin panel development",
        "REST API integration for web & mobile",
        "Validation, deployment, and performance optimization",
        "Live production environment"
      ],
      icon: HeartPulse,
      category: "Full Stack",
      status: "",
      githubUrl: "",  // company project — private, code button nahi dikhega agar empty rakha
      liveUrl: ""      // agar public URL share kar sakte ho to daal do
    },
    {
      title: "Cloth Shop Management System",
      description: "Product and billing management system built with ASP.NET MVC and SQL Server, handling inventory, product listings, and CRUD-based billing operations.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server"],
      features: [
        "Product and billing module development",
        "CRUD operations via ASP.NET & SQL Server",
        "MVC architecture implementation"
      ],
      icon: ShoppingBag,
      category: ".NET",
      status: "",
      githubUrl: "",
      liveUrl: ""
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-section-bg via-background to-section-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent-orange/5 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-orange mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise in full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-glass backdrop-blur-glass border border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 group h-full animate-scale-in" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <project.icon size={24} />
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-accent-orange text-white">{project.category}</Badge>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                </div>
                <CardTitle className="font-heading text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.demoNote && (
                  <p className="text-xs text-muted-foreground italic">{project.demoNote}</p>
                )}

                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex gap-3 pt-4">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="group/btn bg-glass backdrop-blur-glass border-glass-border hover:bg-white/20"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="hero"
                        size="sm"
                        className="group/btn shadow-md hover:shadow-lg"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};