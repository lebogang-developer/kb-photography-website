export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div>© {new Date().getFullYear()} KB Photography</div>
        <div className="text-sm text-neutral-400 mt-1">
          Website designed by{" "}
          <a
            href="https://lebogang-developer.netlify.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Website"
          >
            Lebo Sekaleli
          </a>
        </div>
      </div>
    </footer>
  );
}
