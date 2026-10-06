"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { navLinks, quoteLink } from "@/utils/navigation";

const listBase = "flex items-center gap-[clamp(20px,3vw,44px)]";

const listMobile =
  "max-[820px]:fixed max-[820px]:inset-x-0 max-[820px]:top-[84px] max-[820px]:flex-col max-[820px]:items-start max-[820px]:gap-0 max-[820px]:border-b max-[820px]:border-line-dark max-[820px]:bg-navy max-[820px]:px-[var(--gutter)] max-[820px]:pt-2 max-[820px]:pb-7 max-[820px]:transition-all max-[820px]:duration-250";

const linkClass =
  "relative py-1.5 text-[.95rem] text-ivory/85 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-gold after:transition-[width] after:duration-250 after:content-[''] hover:after:w-full aria-[current=page]:after:w-full max-[820px]:block max-[820px]:py-4 max-[820px]:text-[1.05rem]";

export default function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const headerBg = open
    ? "bg-navy"
    : solid
      ? "bg-navy/92 shadow-[0_1px_0_var(--color-line-dark)] backdrop-blur-[12px]"
      : "";

  const listState = open
    ? "max-[820px]:visible max-[820px]:translate-y-0 max-[820px]:opacity-100"
    : "max-[820px]:invisible max-[820px]:-translate-y-3 max-[820px]:opacity-0";

  const burger = `relative m-auto block h-0.5 w-6 transition-[transform,background-color] duration-250 before:absolute before:left-0 before:top-[-7px] before:block before:h-0.5 before:w-6 before:bg-current before:transition-transform before:duration-250 before:content-[''] after:absolute after:left-0 after:top-[7px] after:block after:h-0.5 after:w-6 after:bg-current after:transition-transform after:duration-250 after:content-[''] ${
    open
      ? "bg-transparent before:translate-y-[7px] before:rotate-45 after:-translate-y-[7px] after:-rotate-45"
      : "bg-current"
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${headerBg}`}
    >
      <Container className="flex h-[84px] items-center justify-between">
        <Logo label="Solvanta Energy Systems, home" />

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
          className="hidden h-11 w-11 cursor-pointer border-0 bg-transparent text-ivory max-[820px]:block"
        >
          <span className={burger} />
        </button>

        <nav aria-label="Primary">
          <ul
            id="primary-nav"
            className={`${listBase} ${listMobile} ${listState}`}
          >
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="max-[820px]:w-full max-[820px]:border-b max-[820px]:border-line-dark"
              >
                <Link
                  href={link.href}
                  className={linkClass}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="max-[820px]:w-full max-[820px]:pt-5">
              <Button
                href={quoteLink.href}
                size="sm"
                className="max-[820px]:w-full"
                onClick={() => setOpen(false)}
              >
                {quoteLink.label}
              </Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
