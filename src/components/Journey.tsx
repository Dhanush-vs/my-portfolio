import { motion } from "framer-motion";

const stops = [
  { year: "2024", title: "Started building software projects", desc: "Began writing real projects beyond coursework — mostly Python and web basics." },
  { year: "2025", title: "Started AI-assisted development", desc: "Brought ChatGPT, Gemini and Claude into my workflow to research faster and unblock myself." },
  { year: "2025–2026", title: "Built multiple full-stack & AI-oriented projects", desc: "Project Minus One, ResQMesh, AquaScan-AI and EcoVision were built in this stretch." },
  { year: "2026", title: "Exploring AI/ML + cybersecurity + real-time systems", desc: "Working on SIH26145, a real-time network threat detection problem statement." },
  { year: "Now", title: "3rd year AI & DS — building, learning, improving", desc: "Still a student. Still shipping. Still figuring out what I don't know." },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 md:py-36 px-6 border-t border-line bg-ink/40">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs text-signal mb-4"
        >
          04 / Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-display text-paper mb-16 text-balance"
        >
          Student → builder → AI-assisted developer.
        </motion.h2>

        <div className="relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-12">
            {stops.map((s, i) => (
              <motion.div
                key={s.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full bg-void border-2 border-signal" />
                <div className="font-mono text-xs text-signal mb-1">{s.year}</div>
                <div className="text-paper font-medium text-lg">{s.title}</div>
                <p className="text-mist mt-1.5 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
