import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Image
          src="/placeholder.svg"
          alt="GraphixForge Logo"
          width={32}
          height={32}
        />
        <span className="ml-2 text-2xl font-bold">GraphixForge</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {["Services", "Portfolio", "About", "Contact"].map((link) => (
          <Link
            key={link}
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            {link}
          </Link>
        ))}
      </nav>
    </header>
  );
}
