import { Mail, Github, Linkedin, ExternalLink, Instagram } from "lucide-react";

const Contact = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/guiDaros",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/guilherme-vassoller-daros/",
      icon: Linkedin,
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/guilhermevdaros",
      icon: ExternalLink,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/guilherme.vdaros/",
      icon: Instagram,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-heading">Contact</p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's connect
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            I'm currently open to new opportunities and would love to hear about 
            data engineering roles, especially in international teams. Whether you 
            have a question or just want to say hello, feel free to reach out.
          </p>

          <a 
            href="mailto:guivdaros@gmail.com"
            className="inline-flex items-center justify-center gap-3 h-14 px-10 text-lg font-semibold rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 mb-12"
          >
            <Mail className="w-5 h-5" />
            Email me
          </a>

          {/* Social links */}
          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">
              Find me on
            </p>
            <div className="flex items-center justify-center gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  <span className="hidden sm:inline text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
