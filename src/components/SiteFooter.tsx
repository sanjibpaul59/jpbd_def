"use client";

import { usePathname } from "next/navigation";
import { getCopy, hashHref, localeFromPath } from "@/src/data/site";

export function SiteFooter() {
  const copy = getCopy(localeFromPath(usePathname()));

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">{copy.forumName}</p>
          <p className="tagline">{copy.tagline}</p>
        </div>
        <nav aria-label={copy.chrome.footerNav}>
          <ul className="footer-nav">
            {copy.nav.map((item) => (
              <li key={item.hash}>
                <a href={hashHref(copy.locale, item.hash)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer-year">© {copy.year}</p>
      </div>
    </footer>
  );
}
