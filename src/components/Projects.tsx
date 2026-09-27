import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "../data/projects";
import ProjectDetail from "./ProjectDetail";

function ProjectCard({ project, onOpen, index }: { project: Project; onOpen: () => void; index: number }) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="group relative text-left rounded-3xl border border-line bg-panel p-7 overflow-hidden transition-colors hover:border-line"
      style={{
        backgroundImage:
          "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(95,224,199,0.08), transparent 60%)",
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <span
          className="font-mono text-[11px] rounded-full border px-3 py-1"
          style={{ color: project.accent, borderColor: project.accent + "40" }}
        >
          {project.status}
        </span>
        <span className="font-mono text-[11px] text-mist">{project.category}</span>
      </div>

      <h3 className="text-2xl font-display text-paper transition-transform duration-300 group-hover:translate-x-1">
        {project.name}
      </h3>
      <p className="mt-2 text-mist leading-relaxed">{project.tagline}</p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[11px] text-mist border border-line rounded-full px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-1.5 text-sm text-paper opacity-70 group-hover:opacity-100 transition-opacity">
        View details
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </motion.button>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs text-signal mb-4"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-display text-paper max-w-2xl text-balance mb-14"
        >
          Five things I've built to understand what I claim to know.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
}
