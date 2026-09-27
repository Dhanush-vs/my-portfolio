import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: [
      { name: "Python", level: "Working knowledge" },
      { name: "JavaScript", level: "Working knowledge" },
      { name: "TypeScript", level: "Building with" },
    ],
  },
  {
    title: "Web",
    items: [
      { name: "React", level: "Building with" },
      { name: "Flask", level: "Working knowledge" },
      { name: "HTML / CSS", level: "Working knowledge" },
      { name: "Tailwind CSS", level: "Building with" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "SQLite", level: "Working knowledge" },
      { name: "PostgreSQL", level: "Learning" },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "AI-assisted development", level: "Building with" },
      { name: "Computer vision", level: "Exploring" },
      { name: "ML concepts", level: "Learning" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git / GitHub", level: "Working knowledge" },
      { name: "VS Code", level: "Working knowledge" },
      { name: "ChatGPT / Gemini / Claude", level: "Building with" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs text-signal mb-4"
        >
          03 / Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-display text-paper max-w-2xl text-balance mb-14"
        >
          What I'm working with, honestly labeled.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: ci * 0.06 }}
            >
              <h3 className="font-mono text-xs text-mist mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between border-b border-line/60 py-2.5 group"
                  >
                    <span className="text-paper group-hover:text-signal transition-colors">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs text-mist">{item.level}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
