import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/projects";

export default function ProjectDetail({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6"
        >
          <motion.div
            onClick={onClose}
            className="absolute inset-0 bg-void/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-2xl max-h-[88vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-line bg-panel p-7 sm:p-10"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full border border-line flex items-center justify-center text-mist hover:text-paper hover:border-signal/50 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            <div
              className="font-mono text-xs mb-3"
              style={{ color: project.accent }}
            >
              {project.category} — {project.status}
            </div>
            <h3 className="text-3xl font-display text-paper">{project.name}</h3>
            <p className="text-mist mt-2 text-lg">{project.tagline}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs border border-line rounded-full px-3 py-1 text-mist"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              {[
                ["Problem", project.problem],
                ["Approach", project.approach],
                ["My contribution", project.contribution],
                ["What I learned", project.learned],
              ].map(([label, text]) => (
                <div key={label}>
                  <div className="font-mono text-xs text-signal mb-1.5">{label}</div>
                  <p className="text-paper/90 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-9">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center rounded-full border border-line py-3 text-paper hover:border-signal/50 hover:text-signal transition-colors"
              >
                View on GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center rounded-full bg-signal text-void py-3 font-medium hover:scale-[1.02] transition-transform"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
