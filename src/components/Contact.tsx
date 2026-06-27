import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showForm, setShowForm] = useState(false);
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

  const handleSubmit = async () => {
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
        {/* Heading */}
        <h2 className="font-serif text-4xl font-bold text-accent mb-3">
          Let's Work Together
        </h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-6 rounded" />

        {/* Subtitle */}
        <p className="text-textDim text-base mb-10">
          I'm always interested in new opportunities and exciting projects.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {showForm ? "Close Form" : "Send Me an Email"}
          </button>

          
          <a href="https://www.linkedin.com/in/uchebuaku-wisdom-725b11336/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-textDim/30 text-textMain px-6 py-3 rounded-lg font-semibold text-sm hover:border-accent hover:text-accent transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        {/* Sliding Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="bg-secondary border border-textDim/10 rounded-xl p-8 text-left">
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
                      className="w-full bg-primary border border-textDim/20 rounded-lg px-4 py-3 text-textMain placeholder-textDim/40 text-sm focus:outline-none focus:border-accent transition-colors duration-200"
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
                      className="w-full bg-primary border border-textDim/20 rounded-lg px-4 py-3 text-textMain placeholder-textDim/40 text-sm focus:outline-none focus:border-accent transition-colors duration-200"
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
                      className="w-full bg-primary border border-textDim/20 rounded-lg px-4 py-3 text-textMain placeholder-textDim/40 text-sm focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={sending || sent}
                    className="w-full bg-accent text-primary py-4 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
                  </button>

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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Contact;