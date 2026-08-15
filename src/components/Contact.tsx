import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Linkedin, MapPin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const MESSAGE_MAX_LENGTH = 500;
const RECAPTCHA_SITE_KEY = "6LfwAoctAAAAACE3sk62c-mX60N4BkC0c-uonkNz"; // yahan apni site key daalo

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7666952587",
      href: "tel:+917666952587"
    },
    {
      icon: Mail,
      title: "Email",
      value: "sultankhot16@gmail.com",
      href: "mailto:sultankhot16@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "sultan-khot",
      href: "https://linkedin.com/in/sultan-khot"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, Maharashtra",
      href: "#"
    }
  ];

  // Name field: sirf letters aur space allow karo, numbers/special chars block
  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    if (allowedKeys.includes(e.key)) return;
    if (!/^[a-zA-Z\s]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData(prev => ({ ...prev, name: value }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.slice(0, MESSAGE_MAX_LENGTH);
    setFormData(prev => ({ ...prev, message: value }));
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Name validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Name",
        text: "Please enter a valid name (letters only, minimum 2 characters).",
        confirmButtonText: "OK",
        confirmButtonColor: "#0ea5e9"
      });
      return;
    }

    // Email validation
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Email",
        text: "Please enter a valid email address (must contain @ and a domain).",
        confirmButtonText: "OK",
        confirmButtonColor: "#0ea5e9"
      });
      return;
    }

    // Message validation
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      Swal.fire({
        icon: "warning",
        title: "Message Too Short",
        text: "Please write a message with at least 10 characters.",
        confirmButtonText: "OK",
        confirmButtonColor: "#0ea5e9"
      });
      return;
    }

    // reCAPTCHA validation
    if (!captchaToken) {
      Swal.fire({
        icon: "warning",
        title: "Verification Required",
        text: "Please complete the reCAPTCHA verification before submitting.",
        confirmButtonText: "OK",
        confirmButtonColor: "#0ea5e9"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Sultan Khot"
      };

      await emailjs.send(
        'service_0zvd358',
        'template_2oit62l',
        templateParams,
        'ualhxnO-fe73BNLZe'
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for your message. I'll get back to you soon!",
        confirmButtonText: "OK",
        confirmButtonColor: "#0ea5e9"
      });

      setFormData({ name: "", email: "", message: "" });
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      Swal.fire({
        icon: "error",
        title: "Failed to Send",
        text: "Something went wrong. Please try again or contact me directly.",
        confirmButtonText: "OK",
        confirmButtonColor: "#0ea5e9"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-section-bg to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-24 left-24 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-orange/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-orange mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-glass backdrop-blur-glass border border-glass-border rounded-2xl p-8 shadow-glass">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer 
                wanting to collaborate, I'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-glass backdrop-blur-glass border border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 group animate-scale-in" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                  <div className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          {info.title}
                        </h4>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-glass backdrop-blur-glass border border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <CardHeader>
              <CardTitle className="font-heading text-xl text-foreground">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleNameChange}
                    onKeyDown={handleNameKeyDown}
                    placeholder="Your full name"
                    maxLength={50}
                    required
                    className="text-foreground bg-background/50 border-border placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder="your.email@example.com"
                    required
                    className="text-foreground bg-background/50 border-border placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {formData.message.length}/{MESSAGE_MAX_LENGTH}
                    </span>
                  </div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleMessageChange}
                    placeholder="Tell me about your project or how I can help you..."
                    rows={5}
                    maxLength={MESSAGE_MAX_LENGTH}
                    required
                    className="text-foreground bg-background/50 border-border placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={(token) => setCaptchaToken(token)}
                    onExpired={() => setCaptchaToken(null)}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group shadow-md hover:shadow-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};