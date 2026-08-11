import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import sultanProfile from "@/assets/sultan-profile-new.jpg";

export const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const texts = [
    ".NET Developer",
    "Full Stack Developer",
    "C# | ASP.NET MVC",
    "AWS Certified Cloud Practitioner"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[currentIndex].length) {
        setCurrentText(prev => prev + texts[currentIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, texts]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1 animate-slide-up">
            <div className="mb-6">
              <p className="text-lg font-medium mb-2 text-muted-foreground animate-slide-up" style={{animationDelay: '0.1s'}}>Hello, I'm</p>
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-slide-up" style={{animationDelay: '0.2s'}}>
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Sultan Khot
                </span>
              </h1>
              <div className="text-xl lg:text-2xl font-medium mb-6 h-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  {currentText}
                </span>
                <span className="animate-pulse text-accent">|</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg animate-slide-up" style={{animationDelay: '0.4s'}}>
              Software Developer with hands-on experience building and maintaining
              web applications, REST APIs, and database-driven backend systems
              in a live production environment. Skilled in C#, ASP.NET MVC, SQL Server,
              and PHP Laravel, with AWS Cloud certification.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.5s'}}>
              <Button 
                variant="default" 
                size="xl"
                onClick={scrollToContact}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Hire Me</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                asChild
              >
             <a href="/Resume_Sultan_Khot_Dot_Net.pdf" download="Resume_Sultan_Khot_Dot_Net.pdf">
  <Download className="mr-2 h-5 w-5" />
  View Resume
</a>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center animate-scale-in" style={{animationDelay: '0.6s'}}>
            <div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary/50 rounded-full w-80 h-80 lg:w-96 lg:h-96 opacity-30 blur-2xl animate-pulse group-hover:scale-110 transition-transform duration-500"></div>
<div className="absolute inset-0 rounded-full w-80 h-80 lg:w-96 lg:h-96 border-2 border-primary/30 animate-pulse"></div>              
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src={sultanProfile}
                  alt="Sultan Khot"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-card border border-border text-foreground p-4 rounded-full shadow-lg animate-float hover:scale-110 transition-transform cursor-pointer">
                <Mail size={24} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg animate-float-delayed hover:scale-110 transition-transform cursor-pointer">
                <span className="font-bold text-lg">C#</span>
              </div>
              
              <div className="absolute top-10 -left-8 bg-card border border-border text-foreground px-3 py-2 rounded-full shadow-lg animate-pulse text-sm font-medium">
                ASP.NET
              </div>
              
              <div className="absolute bottom-16 -right-8 bg-card border border-border text-foreground px-3 py-2 rounded-full shadow-lg animate-float text-sm font-medium">
                AWS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};