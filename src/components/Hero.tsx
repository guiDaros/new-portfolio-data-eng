import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(173_58%_45%/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(173_58%_45%/0.05),transparent_50%)]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-in">
            Hello, I am <span className="text-primary">Guilherme Vassoler</span>
          </h1>

          {/* Role subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 opacity-0 animate-fade-in animation-delay-200">
            Data Engineer
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 opacity-0 animate-fade-in animation-delay-400">
            Building robust data pipelines and scalable cloud architectures.
          </p>
          
          {/* Tech focus line */}
          <p className="font-mono text-sm text-secondary-foreground mb-10 opacity-0 animate-fade-in animation-delay-400">
            <span className="text-primary">→</span> Python • Spark • AWS • Streaming & Batch Processing
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-600">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#projects">View projects</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
