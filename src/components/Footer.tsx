function Footer() {
  return (
    <footer className="py-4 text-center border-t border-textDim/10">
      <div className="flex items-center justify-center gap-1">
        <p className="text-textDim font-mono text-sm">
          Designed & Built by <span className="text-accent">Uchebuaku Wisdom</span>
        </p>
        <span className="text-textDim/50 font-mono text-xs">
          · © {new Date().getFullYear()} · All Rights Reserved
        </span>
      </div>    
    </footer>
  );
}

export default Footer;