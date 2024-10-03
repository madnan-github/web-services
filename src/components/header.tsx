import Link from 'next/link';
import Image from "next/image"
import logo from "../assets/img/logo.png"

export default function Header() {
  return (
    <header className="bg-blue-400 text-white sticky top-0 z-10 px-20">
        <section className="mx-w-4xl mx-auto p-4 flex justify-between items-center">
            <div>
                <Image src={logo}
                    alt="logo"
                    width={70}
                    height={70}
                    className="w-[80px] h-[80px] animate-pulse"
                />
            </div>
            <div>
                <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">&#9776;</button>
                <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                    <Link href="/" className="hover:opacity-90">Home</Link>
                    <Link href="/about" className="hover:opacity-90">About</Link>
                    <Link href="/project" className="hover:opacity-90">Services</Link>
                    <Link href="/contact" className="hover:opacity-90">Contact Us</Link>
                </nav>
            </div>
        </section>
    </header>
  );
}
