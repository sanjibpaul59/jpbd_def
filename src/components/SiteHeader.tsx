"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getCopy, hashHref, localeFromPath, pagePath, type Locale } from "@/src/data/site";

export function SiteHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const copy = getCopy(localeFromPath(pathname));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = copy.locale;
  }, [copy.locale]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1101px)");

    function onKeydown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    function closeOnDesktop(): void {
      if (desktopQuery.matches) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeydown);
    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      document.removeEventListener("keydown", onKeydown);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  function onNavClick(event: React.MouseEvent<HTMLElement>): void {
    const target = event.target;
    if (target instanceof Element && target.closest("a")) {
      setOpen(false);
    }
  }

  function selectLanguage(next: Locale): void {
    if (next === copy.locale) {
      return;
    }
    const hash = window.location.hash;
    router.push(`${pagePath(next)}${hash}`);
  }

  return (
    <header className="site-header">
      <a className="skip" href="#main">
        {copy.chrome.skip}
      </a>
      <div className="wrap header-bar">
        <a className="brand" href={hashHref(copy.locale, "#top")}>
          <span className="brand-mark-frame">
            <img
              className="brand-mark"
              src="/assets/logo_jpbddef.jpeg"
              alt=""
              width={1254}
              height={1254}
            />
          </span>
          <span className="brand-text">
            <span className="brand-main">{copy.brandMain}</span>
            <span className="brand-sub">{copy.brandSub}</span>
          </span>
        </a>
        <nav
          id="site-nav"
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label={copy.chrome.primaryNav}
          onClick={onNavClick}
        >
          <ul>
            {copy.nav.map((item) => (
              <li key={item.hash}>
                <a href={hashHref(copy.locale, item.hash)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <fieldset className="lang-switch">
          <legend className="visually-hidden">{copy.chrome.language}</legend>
          <label onClick={() => selectLanguage("en")}>
            <input
              type="radio"
              name="language"
              value="en"
              checked={copy.locale === "en"}
              onChange={() => selectLanguage("en")}
            />
            {copy.chrome.languageEnglish}
          </label>
          <label onClick={() => selectLanguage("ja")}>
            <input
              type="radio"
              name="language"
              value="ja"
              checked={copy.locale === "ja"}
              onChange={() => selectLanguage("ja")}
            />
            {copy.chrome.languageJapanese}
          </label>
        </fieldset>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? copy.chrome.close : copy.chrome.menu}
        </button>
      </div>
    </header>
  );
}
