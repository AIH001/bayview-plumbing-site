const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-4 bg-foreground">
      <div className="container max-w-5xl mx-auto text-center">
        <p className="text-primary-foreground/80 text-sm">
          © {currentYear} Aiss Plumbing. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
