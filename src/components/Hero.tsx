import { motion } from "framer-motion";
import profileImg from "../assets/images/profile.jpg";

function Hero() {
  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-textDim text-sm mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold text-textMain mb-2 leading-tight"
          >
            Uchebuaku Wisdom.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl font-bold text-textDim mb-6 leading-tight"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-textDim text-base leading-relaxed mb-10 max-w-md"
          >
            I'm a full-stack software engineer based in Nigeria, specializing
            in building exceptional digital experiences. Currently open to new
            opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="border border-accent text-accent px-8 py-3 rounded text-sm hover:bg-accent/10 transition-colors duration-200"
            >
              Check out my work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-primary px-8 py-3 rounded text-sm font-semibold hover:bg-accent/90 transition-colors duration-200"
            >
              Get in touch
            </button>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-80 md:w-80 md:h-96">
            {/* Decorative border box */}
            <div className="absolute inset-0 border-2 border-accent/40 rounded-lg translate-x-4 translate-y-4" />
            {/* Geometric pattern background */}
            <div
              className="absolute inset-0 rounded-lg opacity-30"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(201,169,110,0.15) 10px,
                  rgba(201,169,110,0.15) 11px
                )`,
              }}
            />
            {/* Photo */}
            <img
              src={profileImg}
              alt="Uchebuaku Wisdom"
              className="relative z-10 w-full h-full object-cover object-top rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;