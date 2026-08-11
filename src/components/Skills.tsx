import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Cloud, Award } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: ".NET / C#",
      icon: Code,
      color: "bg-blue-500",
      skills: ["C#", "ASP.NET MVC", ".NET Core", "ADO.NET", "Entity Framework", "LINQ", "Web API"]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      color: "bg-green-500",
      skills: ["REST API", "JWT Auth", "SQL Server", "MySQL", "Stored Procedures", "PHP (Laravel)", "OOP / MVC"]
    },
    {
      title: "Frontend",
      icon: Code,
      color: "bg-purple-500",
      skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "ReactJS", "Angular (Basic)"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "bg-orange-500",
      skills: ["AWS Rekognition", "AWS S3", "Docker", "Render Cloud", "AWS Certified"]
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "bg-cyan-500",
      skills: ["Visual Studio", "VS Code", "Git", "GitHub", "Postman"]
    }
  ];

  const certifications = [
    { title: "AWS Certified Cloud Practitioner", date: "2025" },
    { title: ".NET Full Stack Foundation — Coursera (Board Infinity)", date: "2025" },
    { title: "Introduction to Programming with C#", date: "2025" },
    { title: "TCS iON Career Edge – Young Professional", date: "Apr 2025" }
  ];

  const achievements = [
    {
      title: "1st Place – Website Design Competition",
      date: "Feb 2024",
      description: "Won first place in college website design competition"
    },
    {
      title: "DigiExhibit 2K24 – Web & Business Presentation",
      date: "Jul 2024",
      description: "Participated in digital exhibition showcasing web projects"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-section-bg to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-28 h-28 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-16 left-16 w-36 h-36 bg-accent-orange/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-orange mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical skills, certifications, and achievements that showcase my development capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-glass backdrop-blur-glass border border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 group h-full animate-scale-in" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
              <CardHeader className="text-center pb-4">
                <div className={`${category.color} text-white p-3 rounded-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md w-fit`}>
                  <category.icon size={24} />
                </div>
                <CardTitle className="font-heading text-lg text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8 animate-slide-up">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-glass backdrop-blur-glass border border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 group">
                <div className="p-5 flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{cert.title}</h4>
                    <p className="text-muted-foreground text-xs mt-1">{cert.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8 animate-slide-up">
            Achievements & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-glass backdrop-blur-glass border border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 group animate-scale-in" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                <div className="p-6 text-center">
                  <div className="bg-gradient-to-br from-accent-orange to-orange-500 text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-md">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 leading-tight">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">{achievement.date}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};