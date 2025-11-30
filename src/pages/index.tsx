import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { useRef, useState } from "react";

/* ----------------------------------------------------
   UPDATED VIDEO CARD (Title hides when playing)
---------------------------------------------------- */
const VideoCard = ({ title, video }: { title: string; video: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showTitle, setShowTitle] = useState(true);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-800 bg-gray-900 hover:scale-[1.02] transition-all duration-300">

      {/* TITLE OVERLAY (HIDES WHEN PLAYING) */}
      {showTitle && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-2 z-10 text-center">
          <p className="text-white text-base font-semibold">{title}</p>
        </div>
      )}

      {/* VIDEO */}
      <video
        ref={videoRef}
        src={video}
        controls
        playsInline
        onPlay={() => setShowTitle(false)}
        className="w-full h-[320px] md:h-[380px] lg:h-[430px] object-cover"
      />
    </div>
  );
};

/* ----------------------------------------------------
   MAIN PAGE
---------------------------------------------------- */
export default function IndexPage() {
  const portfolioImages = [
    "/assets/ss1.jpg",
    "/assets/ss2.jpg",
    "/assets/ss3.jpg",
    "/assets/ss4.jpg",
    "/assets/ss5.jpg",
    "/assets/ss6.jpg",
    "/assets/ss7.jpg",
    "/assets/ss8.jpg",
  ];

  const corporatePosts = [
    {
      title: "Mastering Pre-Event Preparation",
      steps: [
        "Plan the schedule meticulously to anticipate every moment.",
        "Visualize the event flow to prepare for smooth transitions.",
        "Practice key announcements and introductions.",
        "Coordinate with technical and support teams for seamless execution.",
      ],
      image: "/assets/s1.png",
      author: "Sheetal",
      alt: "Event hosting",
    },
    {
      title: "Adapting with Grace During Live Events",
      steps: [
        "Familiarize yourself with the script but remain flexible.",
        "Keep calm when unexpected situations arise.",
        "Engage the audience with genuine energy.",
        "Turn surprises into engaging moments for attendees.",
      ],
      image: "/assets/s2.jpg",
      author: "Sheetal",
      alt: "Host smiling on stage during live event",
    },
    {
      title: "Planner’s Guide to Selecting an Emcee",
      steps: [
        "Identify the event’s energy and tone requirements.",
        "Evaluate candidates with relevant experience.",
        "Check past performances and client feedback.",
        "Ensure the emcee aligns with the event vision.",
      ],
      image: "/assets/s3.jpg",
      author: "Sheetal",
      alt: "Checklist for hiring an emcee",
    },
  ];

  const weddingServices = [
    {
      title: "Sangeet, Mehendi & Haldi Hosting",
      img: "/assets/ss13.jpg",
      desc: [
        "High-energy hosting with music, dance interactions, and fun contests.",
        "Seamless coordination with DJs, choreographers, and performers.",
        "Keeps the energy alive throughout the evening!",
      ],
    },
    {
      title: "Engagement & Reception Hosting",
      img: "/assets/ss14.png",
      desc: [
        "Personalized hosting that reflects your love story.",
        "Engaging activities like couple Q&A and storytelling.",
        "Smooth transitions between entries, dances, and speeches.",
      ],
    },
    {
      title: "Wedding Ceremony Hosting",
      img: "/assets/ss9.jpg",
      desc: [
        "Culturally adaptive hosting to blend tradition with modern storytelling.",
        "Explains rituals in a fun, engaging way for all guests.",
        "Ensures the entire ceremony flows on time and emotionally connects everyone.",
      ],
    },
  ];

  const birthdayServices = [
    {
      title: "Kids’ Birthday Party Hosting",
      img: "/assets/ss7.jpg",
      bullets: [
        "Fun-filled games, storytelling, and high-energy interaction.",
        "Engages kids with music, movement, and laughter.",
        "Works with magicians, clowns & DJs for a complete experience.",
      ],
    },
    {
      title: "Teen & Adult Birthday Hosting",
      img: "/assets/ss2.jpg",
      bullets: [
        "Modern & engaging hosting with themed games and challenges.",
        "Music-based activities that keep the vibe alive.",
        "Energetic and friendly style, perfect for all crowd types.",
      ],
    },
    {
      title: "Milestone & Themed Parties",
      img: "/assets/ss14.jpg",
      bullets: [
        "Elegant yet fun hosting for milestone birthdays.",
        "Custom hosting tailored to party themes.",
        "Collaborates with decorators, DJs & performers for seamless execution.",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Sheetal Sharma — Anchor & Emcee</title>
        <meta
          name="description"
          content="Sheetal Sharma — professional event anchor, emcee, and host. Weddings, corporate events, birthdays & more. Available PAN India."
        />
      </Head>

      <Container>
        {/* HERO */}
        <header className="mt-28 xl:mt-40">
          <section className="flex flex-col-reverse xl:flex-row items-center gap-10">
            <div className="max-w-2xl text-center xl:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-indigo-500">Sheetal Sharma</span>
                <br />
                Transforming Events into{" "}
                <span className="text-indigo-500">Unforgettable Experiences</span>
              </h1>

              <p className="mt-4 text-lg text-muted-foreground">
                Anchor | Emcee | Speaker | Host — 5+ years of hosting diverse events across India.
              </p>

              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                Charismatic storyteller and professional host — bringing warmth, energy, and seamless flow to weddings, corporate events, and parties.
              </p>

              {/* WHATSAPP BUTTON */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center xl:justify-start">
                <Link
                  href="https://wa.me/918050946373"
                  target="_blank"
                >
                  <Button className="flex items-center gap-2 text-lg py-3 px-3">
                    <FaWhatsapp className="text-3xl text-green-500" />
                    +91 8050946373
                  </Button>
                </Link>

                <a href="#services">
                  <Button variant="outline">View Services</Button>
                </a>
              </div>
            </div>

            <div className="w-full xl:w-1/2 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/ss5.jpg"
                alt="Sheetal hosting an event"
                width={900}
                height={700}
                className="object-cover w-full h-[320px] md:h-[360px] xl:h-[420px] rounded-2xl"
              />
            </div>
          </section>
        </header>

        {/* ABOUT */}
        <section id="about" className="mt-28 text-center max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Experience the{" "}
            <span className="text-indigo-500">Energy</span>,{" "}
            <span className="text-pink-500">Charm</span> &{" "}
            <span className="text-indigo-400">Passion</span> I Bring to Every Event
          </motion.h2>

          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
            From emotional wedding moments to vibrant cultural shows — here’s a glimpse into my world of hosting and entertainment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-center mt-8">
            {[
              { value: "5+", label: "Years of Experience" },
              { value: "15+", label: "Event Types" },
              { value: "250+", label: "Events Hosted" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-gray-400 mt-2 text-base">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* POPULAR SERVICES */}
        <section id="services" className="mt-28 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Popular Services
          </motion.h2>

          <p className="text-muted-foreground max-w-3xl mx-auto mb-10">
            Weddings, corporate events, birthday parties and more — tailored hosting to match your vibe.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Wedding Event Emcee", icon: "💍" },
              { title: "Birthday Party Anchor", icon: "🎉" },
              { title: "Corporate Event Emcee", icon: "🏢" },
              { title: "Product Launch & Team Meets", icon: "🚀" },
              { title: "Cultural & Social Events", icon: "🎭" },
              { title: "Themed Parties & Carnivals", icon: "🎪" },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="rounded-2xl shadow-md p-6 border bg-background"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMPANIES */}
        <section id="companies" className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Popular Companies I Worked For</h2>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {[
              "Pidilite",
              "AdityaBirla",
              "Redmi",
              "JITO",
              "Ambuja",
              "Reliance",
              "Rotary",
            ].map((c) => (
              <span
                key={c}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-full border border-gray-700 text-gray-200"
              >
                <Image
                  src={`/assets/logos/${c}.png`}
                  alt={c}
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="mt-28">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold text-center mb-8"
          >
            Captured Moments
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            {portfolioImages.map((src, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Portfolio ${idx + 1}`}
                  width={800}
                  height={600}
                  className="object-cover w-full h-56"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* VIDEOS */}
        <section id="videos" className="mt-28 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Event Videos</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto px-4">
            {[
              { title: "Social Event", video: "/assets/video1.mp4" },
              { title: "Birthday Event", video: "/assets/birthdayparty.mp4" },
              { title: "Marriage Event", video: "/assets/sangeetvideo.mp4" },
            ].map((v, i) => (
              <VideoCard key={i} title={v.title} video={v.video} />
            ))}
          </div>
        </section>

        {/* CORPORATE */}
        <section id="corporate" className="mt-28">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold text-center mb-6"
          >
            Corporate Event Hosting
          </motion.h2>

          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            Professional, confident and seamless hosting for conferences, award nights, product
            launches and corporate gatherings.
          </p>

          <div className="space-y-12 max-w-6xl mx-auto px-4">
            {corporatePosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
              >
                <div className="md:w-1/2">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={700}
                    height={420}
                    className="rounded-2xl w-full object-cover"
                  />
                </div>

                <div className="md:w-1/2 text-left">
                  <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {post.steps.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-gray-400 italic">by {post.author}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services/corporate-event">
              <Button
                variant="outline"
                className="border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition"
              >
                Read More →
              </Button>
            </Link>
          </div>
        </section>

        {/* WEDDING */}
        <section id="wedding" className="mt-28">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold text-center mb-6"
          >
            Wedding Event Anchoring
          </motion.h2>

          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            Elegant, emotional and energetic hosting to make each wedding moment flow perfectly.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {weddingServices.map((s, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -6 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  width={600}
                  height={380}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-indigo-500 mb-2">{s.title}</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {s.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services/wedding-event">
              <Button
                variant="outline"
                className="border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition"
              >
                Read More →
              </Button>
            </Link>
          </div>
        </section>

        {/* BIRTHDAY */}
        <section id="birthday" className="mt-28">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold text-center mb-6"
          >
            Birthday & Party Hosting
          </motion.h2>

          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            High-energy, fun and memorable hosting for kids, teens, adults and themed parties.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {birthdayServices.map((b, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -6 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={b.img}
                  alt={b.title}
                  width={600}
                  height={380}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-indigo-500 mb-2">{b.title}</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {b.bullets.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services/birthday-party">
              <Button
                variant="outline"
                className="border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition"
              >
                Read More →
              </Button>
            </Link>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="mt-28 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            ❤️ What My Clients Say
          </motion.h2>

          <p className="text-muted-foreground max-w-3xl mx-auto mb-10">
            Hear from some of the amazing couples, event planners, and organizers I’ve had the
            pleasure of hosting for.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {[
              {
                name: "Rohit & Priya (Wedding Couple)",
                text: "Sheetal made our wedding celebrations magical — from the sangeet to the reception, every moment was perfectly hosted!",
              },
              {
                name: "Ankit Sharma (Corporate Client)",
                text: "Professional, confident, and always in control. Our annual awards night ran seamlessly thanks to Sheetal’s presence on stage.",
              },
              {
                name: "Sneha Patil (Birthday Host)",
                text: "Her energy and warmth lit up the entire party! Everyone — kids and adults — were engaged the whole time.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800"
              >
                <p className="text-gray-300 italic mb-4 leading-relaxed">“{t.text}”</p>
                <h4 className="text-indigo-400 font-semibold">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LOCATIONS */}
        <section id="locations" className="mt-28 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-4"
          >
            📍 Locations I Serve
          </motion.h2>

          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            Available in Belgaum, Bangalore, Mumbai and PAN India.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Belgaum",
              "Bangalore",
              "Hubli",
              "Gadag",
              "Mumbai",
              "Goa",
              "Jaipur",
              "Udaipur",
              "Pan India",
            ].map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-indigo-500/10 text-indigo-500 rounded-full border border-indigo-600/20"
              >
                {city}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-28 mb-20 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl md:text-4xl font-semibold mb-4"
            >
              📞 Ready to Elevate Your Event?
            </motion.h2>

            <p className="text-muted-foreground mb-8">
              Whether it’s a wedding, corporate gathering, or special celebration — let’s make it
              unforgettable. Reach out for availability, pricing, and custom plans.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="https://wa.me/918050946373" target="_blank">
                <Button className="flex items-center gap-2">
                  <FaWhatsapp className="text-xl" />
                  +91 8050946373
                </Button>
              </Link>

              <Link href="mailto:7sheetal86@gmail.com">
                <Button variant="outline">Email Me</Button>
              </Link>
            </div>

            <div className="mt-8 flex justify-center gap-8 text-4xl">
              <Link href="https://wa.me/918050946373" target="_blank">
                <FaWhatsapp className="text-green-500" />
              </Link>

              <Link href="https://www.instagram.com/anchor_sheetalsharma?utm_source=qr&igsh=MWdrcmFuZW9ua3hwbg==" target="_blank">
                <FaInstagram className="text-pink-500" />
              </Link>


            </div>

          </div>
        </section>
      </Container>
    </>
  );
}
