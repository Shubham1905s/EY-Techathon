import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import styles from "@/styles/Container.module.css";
import Image from "next/image";

type IconProps = {
  ["data-hide"]: boolean;
};

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.1 },
  }),
  hidden: { opacity: 0 },
};

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/portfolio", text: "Portfolio" },
  { href: "/Locations", text: "Locations" },
  {
    text: "Services",
    sublinks: [
      { href: "/services/corporate-event", text: "Corporate Event" },
      { href: "/services/wedding-event", text: "Wedding Event" },
      { href: "/services/birthday-party", text: "Birthday Party" },
    ],
  },
  {
    text: "Blog",
    sublinks: [
      { href: "/blog/personal-tips", text: "Personal Tips" },
      { href: "/blog/wedding-events", text: "Wedding Events" },
    ],
  },
  { href: "/contactpage", text: "Contact" },
];

export default function Container(props: ContainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();

  const { children, ...customMeta } = props;
  const meta = {
    title: "SHEETAL",
    description: `Full-stack website developer and TypeScript enthusiast.`,
    image: "/assets/Sheetalsharma.png",
    type: "website",
    ...customMeta,
  };

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Fix: prevent scroll when menu open + reset scroll position
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="theme-color" content="#7B82FE" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://www.wendoj.codes${router.asPath}`} />
        <link rel="canonical" href={`https://www.wendoj.codes${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="WendoJ" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      {/* Navbar */}
      <nav
        className={cn(
          styles.nav,
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "bg-black/60 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 md:px-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/Sheetalsharma.png"
                alt="Sheetal"
                width={50}
                height={50}
                className="object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-10 items-center flex-grow justify-end">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.text}
                custom={i}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="relative group"
              >
                {link.sublinks ? (
                  <>
                    <button
                      onMouseEnter={() => setOpenDropdown(link.text)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="text-lg font-medium text-gray-100 hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1"
                    >
                      {link.text}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-1 h-4 w-4 transition-transform ${
                          openDropdown === link.text ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.text && (
                        <motion.div
                          onMouseEnter={() => setOpenDropdown(link.text)}
                          onMouseLeave={() => setOpenDropdown(null)}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-3 w-56 bg-black/90 backdrop-blur-md rounded-xl shadow-lg py-2 border border-gray-800"
                        >
                          {link.sublinks.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-500/20 transition-colors duration-200"
                            >
                              {sublink.text}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-gray-100 hover:text-indigo-400 transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Mobile Burger */}
          <div className="md:hidden flex items-center justify-end ml-auto">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md focus:outline-none text-gray-100"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <CrossIcon data-hide={false} /> : <MenuIcon data-hide={false} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-[60] flex flex-col overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex h-16 items-center justify-between px-6 border-b border-gray-700">
                <span className="text-xl text-white">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2">
                  <CrossIcon data-hide={false} />
                </button>
              </div>

              <ul className="flex flex-col mt-8 gap-6 px-6 pb-24 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.text}
                    custom={i}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {link.sublinks ? (
                      <details className="group">
                        <summary className="text-xl font-semibold text-gray-100 cursor-pointer list-none flex justify-between items-center">
                          {link.text}
                          <span className="transition-transform group-open:rotate-180">
                            ▼
                          </span>
                        </summary>
                        <div className="mt-2 ml-4 flex flex-col gap-2">
                          {link.sublinks.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              onClick={() => setIsOpen(false)}
                              className="text-gray-300 hover:text-indigo-400 transition"
                            >
                              {sublink.text}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-semibold text-gray-100 hover:text-indigo-400 transition"
                      >
                        {link.text}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto px-6 py-6 text-sm text-gray-400 border-t border-gray-700">
                © {new Date().getFullYear()} Shubham. All rights reserved.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className={cn("container pt-24", props.className)}>{children}</main>
      <Footer />
    </>
  );
}

function MenuIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CrossIcon(props: IconProps) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
