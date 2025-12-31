const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="section-heading">About me</p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Turning raw data into{" "}
            <span className="text-primary">actionable insights</span>
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a Data Engineer focused on designing and building reliable data 
              infrastructure. My work centers on creating efficient ETL/ELT pipelines, 
              implementing data warehousing solutions, and ensuring data quality 
              across distributed systems.
            </p>

            <p>
              With hands-on experience in Python, Apache Spark, and AWS cloud services, 
              I develop scalable solutions for both batch and real-time data processing. 
              I'm particularly interested in stream processing architectures and 
              optimizing data workflows for performance and cost-efficiency.
            </p>

            <p>
              I value clean code, well-documented systems, and building data platforms 
              that teams can trust and rely on. Currently seeking international 
              opportunities where I can contribute to impactful data engineering projects 
              and continue growing alongside experienced teams.
            </p>
          </div>

          {/* Quick stats or highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
            {[
              { label: "Primary Language", value: "Python" },
              { label: "Cloud Platform", value: "AWS" },
              { label: "Processing", value: "Spark" },
              { label: "Focus", value: "Pipelines" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-mono text-xl md:text-2xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
