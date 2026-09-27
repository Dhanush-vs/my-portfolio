import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function GitHubSection() {
  const languages = Array.from(new Set(projects.flatMap((p) => p.tech))).slice(0, 8);

  return (
    <section className="relative py-28 md:py-36 px-6 border-t border-line bg-ink/40">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs text-signal mb-4"
        >
          On GitHub
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-display text-paper max-w-xl text-balance"
          >
            Everything here is public and still evolving.
          </motion.h2>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-paper hover:border-signal/50 hover:text-signal transition-colors"
          >
            @ my GitHub profile →
          </a>
        </div>

        <div className="rounded-3xl border border-line bg-panel p-8">
          <div className="font-mono text-xs text-mist mb-4">Languages &amp; tools across my repos</div>
          <div className="flex flex-wrap gap-2.5">
            {languages.map((l) => (
              <span
                key={l}
                className="font-mono text-xs text-paper border border-line rounded-full px-3.5 py-1.5 hover:border-signal/50 hover:text-signal transition-colors"
              >
                {l}
              </span>
            ))}
          </div>
          <p className="text-mist text-sm mt-6 leading-relaxed">
            Repository counts and contribution stats change by the week — rather
            than post numbers that go stale, this links straight to the source.
          </p>
        </div>
      </div>
    </section>
  );
}
