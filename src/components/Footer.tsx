export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-mist">
        <span>© {new Date().getFullYear()} Gade Hema Sankar Reddy</span>
        <span className="font-mono text-xs">KHIT, Guntur — AI &amp; DS</span>
      </div>
    </footer>
  );
}
