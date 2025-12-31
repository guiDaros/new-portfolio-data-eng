const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Designed & built with care
          </p>
          
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">&lt;</span>
            Data Engineer
            <span className="text-primary">/&gt;</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
