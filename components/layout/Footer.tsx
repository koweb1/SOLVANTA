import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { navLinks, quoteLink } from "@/utils/navigation";

const headingClass =
  "mb-4 max-w-none font-head text-[.95rem] leading-[1.6] tracking-normal";
const itemClass = "text-[.95rem] text-silver";
const linkClass = "text-[.95rem] text-silver hover:text-gold";

const socials = ["Instagram", "LinkedIn", "Facebook"];

export default function Footer() {
  return (
    <footer className="border-t border-line-dark bg-navy-deep pt-[72px]">
      <Container>
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1.3fr] gap-10 pb-14 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <Logo label="Solvanta Energy Systems" />
            <p className="mt-[18px] max-w-[32ch] text-[.95rem] text-silver">
              Premium solar and energy systems for homes and businesses.
              Continuous energy. A brighter tomorrow.
            </p>
          </div>

          <div>
            <h2 className={headingClass}>Pages</h2>
            <ul className="grid gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={quoteLink.href} className={linkClass}>
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>Follow</h2>
            <ul className="grid gap-2.5">
              {socials.map((name) => (
                <li key={name}>
                  <a href="#" className={linkClass}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>Contact</h2>
            <ul className="grid gap-2.5">
              <li className={itemClass}>+000 000 000 0000</li>
              <li className={itemClass}>hello@solvanta.com</li>
              <li className={itemClass}>WhatsApp: +000 000 000 0000</li>
              <li className={itemClass}>Office address, City</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-line-dark py-6 text-[.85rem] text-silver">
          <span>
            © {new Date().getFullYear()} Solvanta Energy Systems. All rights
            reserved.
          </span>
          <span>Privacy · Terms</span>
        </div>
      </Container>
    </footer>
  );
}
