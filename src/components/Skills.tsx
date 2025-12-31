const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "Java", "JavaScript"],
    },
    {
      title: "Data & Processing",
      skills: ["Apache Spark", "PySpark", "Apache Airflow", "Pandas", "NumPy"],
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS (S3, EC2, Lambda, Glue)", "Docker", "Linux"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      title: "Tools & Practices",
      skills: ["Git", "GitHub", "CI/CD", "REST APIs", "Agile"],
    },
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="section-heading">Tech Stack</p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technologies I work with
          </h2>
          
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A focused toolkit for building modern data infrastructure, 
            from ingestion to transformation and delivery.
          </p>

          <div className="space-y-10">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-medium text-secondary-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
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

export default Skills;
