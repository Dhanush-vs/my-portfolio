import { motion } from "framer-motion";

const stats = [
  { value: "3rd", label: "Year, AI & Data Science" },
  { value: "5", label: "Projects built by experimenting" },
  { value: "AI-first", label: "Development workflow" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs text-signal mb-4"
        >
          01 / About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-display text-paper max-w-2xl text-balance leading-tight"
        >
          I learn by building, and I build with whatever helps me learn faster.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-mist text-lg max-w-2xl leading-relaxed"
        >
          I'm a 3rd-year Artificial Intelligence &amp; Data Science student at
          KHIT, Guntur. I combine Python, web technologies, databases and
          modern AI tools — ChatGPT, Gemini and Claude — to turn ideas into
          working prototypes. AI doesn't write my projects for me; I use it to
          research faster, unblock myself when I'm stuck, and get to the part
          where I can actually debug and understand what I built.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-panel p-8"
            >
              <div className="text-4xl font-display text-paper">{s.value}</div>
              <div className="mt-2 text-sm text-mist">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
