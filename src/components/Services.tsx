import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Database, Smartphone, ArrowRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description: "End-to-end web application development using modern technologies like MERN stack, ASP.Net, and PHP. From concept to deployment, I handle both frontend and backend development.",
      features: ["Custom Web Applications", "E-commerce Solutions", "Content Management Systems", "API Development"],
      color: "bg-blue-500"
    },
    {
      icon: Palette,
      title: "Frontend Development",
      description: "Creating responsive, interactive, and user-friendly interfaces using React, HTML5, CSS3, and modern JavaScript frameworks with focus on performance and accessibility.",
      features: ["React Applications", "Responsive Design", "Interactive UI Components", "Performance Optimization"],
      color: "bg-purple-500"
    },
    {
      icon: Database,
      title: "Backend API Development",
      description: "Building robust and scalable backend systems using Node.js, Express, PHP, and ASP.Net with secure authentication and efficient database management.",
      features: ["REST API Development", "Database Design", "Authentication Systems", "Server-side Logic"],
      color: "bg-green-500"
    },
    {
      icon: Smartphone,
      title: "Responsive UI/UX Design",
      description: "Designing and implementing responsive user interfaces that work seamlessly across all devices with focus on user experience and modern design principles.",
      features: ["Mobile-First Design", "Cross-Browser Compatibility", "UI/UX Consulting", "Design System Creation"],
      color: "bg-orange-500"
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Services I Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web development services to bring your digital ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card-elegant hover:shadow-card-hover transition-all duration-300 group h-full">
              <CardHeader className="pb-4">
                <div className={`${service.color} text-white p-4 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} />
                </div>
                <CardTitle className="font-heading text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">What I Deliver:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-hero-gradient rounded-2xl p-8 text-white max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent-orange/30 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Let's discuss your ideas and bring your vision to life with modern web technologies
              </p>
              <Button 
                variant="accent" 
                size="lg"
                onClick={scrollToContact}
                className="group bg-white text-primary hover:bg-white/90"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};