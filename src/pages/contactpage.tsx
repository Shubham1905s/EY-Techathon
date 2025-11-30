import Container from "@/components/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <Container>
      <section className="relative my-32 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-primary/[10%] to-white/5 px-8 py-20 text-center shadow-lg overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-16 -left-16 w-60 h-60 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-secondary/20 blur-3xl"></div>
        <h2 className="relative text-4xl font-extrabold tracking-tight xl:text-6xl">
          Let&apos;s work{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            together.
          </span>
        </h2>
        <p className="relative mt-4 max-w-xl text-lg text-white-600 xl:text-xl">
          I&apos;m currently available for freelance work and open to discussing
          new Events. Lets create something memorable and impactful!
        </p>
        <Link href="https://wa.me/918050946373">
          <Button className="mt-8 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 text-white hover:scale-105 transition-transform duration-300 shadow-lg">
            Get in Touch
          </Button>
        </Link>
       
   <div className="relative mt-10 flex gap-6 text-3xl">
     <Link href="https://wa.me/918050946373" target="_blank">
    <FaWhatsapp className="text-green-500" />
  </Link>
   <Link href="https://www.instagram.com/anchor_sheetalsharma?utm_source=qr&igsh=MWdrcmFuZW9ua3hwbg==" target="_blank">
    <FaInstagram className="text-pink-500" />
  </Link>
 

 

 
</div>
     
        <p className="mt-6 text-white-600 text-lg">
          📞 +91 80509 46373
        </p>
      </section>
    </Container>
  );
}
