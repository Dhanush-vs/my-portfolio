import { motion } from "framer-motion";

const tools = [
  { name: "ChatGPT / OpenAI", role: "Research, rubber-duck debugging, first drafts of unfamiliar syntax" },
  { name: "Google Gemini", role: "Second opinions, comparing approaches, quick documentation lookups" },
  { name: "Claude", role: "Architecture discussions, longer refactors, explaining why code fails" },
];

const pipeline = ["Prompt", "Research", "Generate", "Understand", "Debug", "Build"];

export default function AIToolkit() {
  return (
    <section className="relative py-28 md:py-36 px-6 border-y border-line bg-ink/40">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs text-signal mb-4"
        >
          02 / Working method
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-display text-paper max-w-2xl text-balance"
        >
          AI doesn't replace my development process. It accelerates it.
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-panel p-6"
            >
              <div className="text-paper font-medium mb-2">{t.name}</div>
              <p className="text-sm text-mist leading-relaxed">{t.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
            {pipeline.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <span className="rounded-full border border-line px-4 py-2 text-mist">
                  {step}
                </span>
                {i < pipeline.length - 1 && <span className="text-line">→</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
