"use client";
export const SocialLinks: React.FC = () => (
  <div className="flex gap-6 my-8 justify-center">
    <a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="text-slate-800 text-2xl hover:text-slate-600 transition"
    >
      <i className="fab fa-github mr-2" />
      GitHub
    </a>
    <a
      href="https://linkedin.com/in/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-slate-800 text-2xl hover:text-blue-700 transition"
    >
      <i className="fab fa-linkedin mr-2" />
      LinkedIn
    </a>
    <a
      href="https://twitter.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="text-slate-800 text-2xl hover:text-sky-500 transition"
    >
      <i className="fab fa-twitter mr-2" />
      Twitter
    </a>
  </div>
);
