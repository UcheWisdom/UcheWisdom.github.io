import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSending(false);
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="heading">Get In Touch</h2>
          <div className="flex-1 h-px bg-textDim/20 ml-4" />
        </div>

        {/* Intro Text */}
        <p className="text-textDim text-lg leading-relaxed mb-12">
          I'm currently open to new opportunities. Whether you have a question,
          a project in mind, or just want to say hi — my inbox is always open!
        </p>

        {/* Contact Form */}
        <div className="bg-secondary border border-textDim/10 rounded-lg p-8 text-left">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-textDim font-mono text-sm mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-primary border border-textDim/20 rounded px-4 py-3 text-textMain placeholder-textDim/40 font-mono text-sm focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-textDim font-mono text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-primary border border-textDim/20 rounded px-4 py-3 text-textMain placeholder-textDim/40 font-mono text-sm focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-textDim font-mono text-sm mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi, I'd like to talk about..."
                rows={5}
                className="w-full bg-primary border border-textDim/20 rounded px-4 py-3 text-textMain placeholder-textDim/40 font-mono text-sm focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={sending || sent}
              className="w-full border border-accent text-accent py-4 rounded font-mono text-sm hover:bg-accent/10 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
            </button>

            {/* Success Message */}
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent font-mono text-sm text-center"
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.p>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-12">
          
        <a href="https://github.com/uchewisdom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textDim hover:text-accent transition-colors duration-200 font-mono text-sm"
          >
            GitHub
          </a>
          
        <a href="https://linkedin.com/in/uchewisdom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textDim hover:text-accent transition-colors duration-200 font-mono text-sm"
          >
            LinkedIn
          </a>
          
        <a href="mailto:your@email.com"
            className="text-textDim hover:text-accent transition-colors duration-200 font-mono text-sm"
          >
            Email
          </a>
          
        <a href="https://twitter.com/uchewisdom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textDim hover:text-accent transition-colors duration-200 font-mono text-sm"
          >
            Twitter
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;