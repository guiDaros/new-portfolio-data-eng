import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Scholarship Program Data Project",
      description:
        "Data engineering project developed during a scholarship program, focusing on data pipelines and practical data processing.",
      tech: ["Python", "SQL", "Data Pipelines"],
      github: "https://github.com/guiDaros/scholarship-compass",
      featured: true,
    },
    {
      title: "NLP Inbound & Outbound Classifier",
      description:
        "NLP-based project for classifying inbound and outbound messages using machine learning and text processing techniques.",
      tech: ["Python", "NLP", "Machine Learning"],
      github: "https://github.com/guiDaros/nlp-inbound-outbound-classifier",
      featured: false,
    },
    {
      title: "Real-Time Pest Monitoring System",
      description:
        "Real-time data analysis project for pest monitoring, involving streaming data and near real-time insights.",
      tech: ["Python", "Streaming", "Real-Time Analytics"],
      github: "https://github.com/guiDaros/project_agtech_hdwach",
      featured: false,
    },
    {
      title: "Cloud Containerized Application",
      description:
        "Cloud-focused project involving containerization and deployment of applications in a cloud environment.",
      tech: ["Docker", "Cloud", "AWS"],
      github: "https://github.com/guiDaros/cloud-container",
      featured: false,
    },
  ];

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="section-heading">Projects</p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Selected work
          </h2>
          
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Hands-on projects demonstrating data engineering concepts, 
            from batch processing to real-time streaming architectures.
          </p>

          {/* Featured Project */}
          {featuredProject && (
            <div className="mb-12 p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Featured
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {featuredProject.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {featuredProject.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {featuredProject.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-secondary-foreground bg-secondary/50 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary/60" />
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
