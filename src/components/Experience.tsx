import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Developer (.NET | PHP | Backend)",
      company: "Chowgule Mediconsult Pvt. Ltd.",
      location: "Mumbai, Maharashtra",
      duration: "Oct 2025 – Present",
      type: "Full-time",
      responsibilities: [
        "Developed and maintained backend modules using C# (ASP.NET MVC) and PHP (Laravel) for a live healthcare web platform",
        "Built and integrated RESTful APIs with JWT-based authentication for web and mobile application connectivity",
        "Wrote optimised SQL Server and MySQL queries, stored procedures, and handled database schema design",
        "Implemented business logic using OOP principles, MVC architecture, and server-side validations across modules",
        "Debugged and resolved production issues; collaborated with frontend developers using Git for version control"
      ],
      technologies: ["C#", "ASP.NET MVC", ".NET Core", "PHP", "Laravel", "SQL Server", "MySQL", "REST API", "JWT", "Git"]
    },
    {
      title: "Full Stack Developer Intern",
      company: "FirstDigiAdd",
      location: "Pune District, Maharashtra",
      duration: "Apr 2024 – Sep 2024",
      type: "Internship",
      responsibilities: [
        "Developed responsive UI using HTML5, CSS3, Bootstrap, and JavaScript for client web projects",
        "Assisted in backend integration and CRUD operations using SQL Server",
        "Supported real-time project development and QA testing in an Agile team environment",
        "Enhanced UI consistency and cross-browser compatibility"
      ],
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "SQL Server", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and hands-on experience in web development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card-elegant hover:shadow-card-hover transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Building2 size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-primary font-medium text-lg mb-2">{exp.company}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Badge className="mb-4 bg-accent-orange text-white">{exp.type}</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};