import { Heart, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sultancode123",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sultan-khot",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:sultankhot16@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-hero-gradient text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">Sultan Khot</h3>
            <p className="text-white/80">Dot Net Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                aria-label={link.label}
              >
                <link.icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="text-white/80 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6 w-full">
            <p className="text-white/60 text-sm">
  © 2026 Sultan Khot. All rights reserved.
</p>
          </div>
        </div>
      </div>
    </footer>
  );
};