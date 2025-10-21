import React from "react";

/**
 * Footer component
 * Props (optional):
 *  - repoUrl: link to your GitHub repo (falls back to VITE_REPO_URL env var or placeholder)
 *  - liveUrl: link to your Netlify live site (falls back to VITE_NETLIFY_URL env var or empty)
 *
 * Note: Do NOT put API keys here. This footer is just informational.
 */
export default function Footer() {
 

  return (
    <footer className="footer">
  <p>
    View source on{" "}
    <a 
      href="https://github.com/TaimoorAli25jsf2002/usecontext-demo" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </p>
</footer>

  );
}
