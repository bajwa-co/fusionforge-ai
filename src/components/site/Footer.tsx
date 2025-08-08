const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Eco Fusion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
