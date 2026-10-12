import { forumName, nav, tagline, year } from "@/src/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">{forumName}</p>
          <p className="tagline">{tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-nav">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer-year">© {year}</p>
      </div>
    </footer>
  );
}
