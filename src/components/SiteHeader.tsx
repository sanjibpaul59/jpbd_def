"use client";

import { useEffect, useState } from "react";
import { nav } from "@/src/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <a className="brand" href="/#top">
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
            <span className="brand-main">Japan Bangladesh</span>
            <span className="brand-sub">Development Exchange Forum</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="site-nav"
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label="Primary"
          onClick={onNavClick}
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
