"use client";

export const SocialLinks: React.FC = () => (
  <div className="flex gap-6 my-8 justify-center">
    <a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="flex items-center gap-2 px-5 py-3 rounded-full bg-white shadow hover:bg-indigo-50 transition text-slate-800 text-lg font-semibold border border-slate-200 hover:text-indigo-600"
    >
      <i className="fab fa-github text-2xl" />
      <span className="hidden sm:inline">GitHub</span>
    </a>
    <a
      href="https://linkedin.com/in/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="flex items-center gap-2 px-5 py-3 rounded-full bg-white shadow hover:bg-indigo-50 transition text-slate-800 text-lg font-semibold border border-slate-200 hover:text-blue-700"
    >
      <i className="fab fa-linkedin text-2xl" />
      <span className="hidden sm:inline">LinkedIn</span>
    </a>
    <a
      href="https://twitter.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="flex items-center gap-2 px-5 py-3 rounded-full bg-white shadow hover:bg-indigo-50 transition text-slate-800 text-lg font-semibold border border-slate-200 hover:text-sky-500"
    >
      <i className="fab fa-twitter text-2xl" />
      <span className="hidden sm:inline">Twitter</span>
    </a>
  </div>
);
