function Footer() {
  return (
    <footer className="py-8 text-center border-t border-textDim/10">
      <div className="flex flex-col items-center gap-2">
        <p className="text-textDim font-mono text-sm">
          Designed & Built by{" "}
          <span className="text-accent">Uchebuaku Wisdom</span>
        </p>
        <p className="text-textDim/50 font-mono text-xs">
          © {new Date().getFullYear()} · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;