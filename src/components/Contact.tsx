import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs text-signal mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-display text-paper text-balance"
        >
          Let's build something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-mist text-lg"
        >
          Open to internships, collaborations, and interesting problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:hemasankarreddy@example.com"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-signal text-void font-medium px-8 py-3.5 hover:scale-[1.03] transition-transform"
          >
            Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full border border-line px-8 py-3.5 text-paper hover:border-signal/50 hover:text-signal transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full border border-line px-8 py-3.5 text-paper hover:border-signal/50 hover:text-signal transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
