import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const aboutStats = [
  { label: "Years of experience", value: "5+" },
  { label: "Event Types", value: "15+" },
  { label: "Events hosted", value: "100+" },
];

export default function About() {
  return (
    <Container>
      {/* Intro Section */}
      <section className="my-24 flex flex-col items-center space-y-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl xl:text-5xl font-bold tracking-tight leading-snug">
          From <span className="text-indigo-400">Grand Weddings</span> to{" "}
          <span className="text-pink-400">Social Events</span> — Explore My
          Hosting Journey
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl">
          Experience the energy, charm, and passion that I bring to every
          occasion. From emotional wedding moments to vibrant cultural shows —
          here’s a glimpse into my world of hosting and entertainment.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-8">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <span className="text-gradient text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-gray-400 text-base mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 📸 Photo Gallery */}
      <section className="py-20 bg-black/60 text-center">
        <h3 className="text-3xl font-bold mb-10 text-white">
          📸 Captured Moments
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            "/assets/ss1.jpg",
            "/assets/ss2.jpg",
            "/assets/ss3.jpg",
            "/assets/ss4.jpg",
            "/assets/ss5.jpg",
            "/assets/ss6.jpg",
            "/assets/ss7.jpg",
            "/assets/ss8.jpg",
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={src}
                alt={`Event photo ${index + 1}`}
                width={700}
                height={500}
                className="object-cover w-full h-80 hover:brightness-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="mt-28 text-center">
        <h2 className="text-4xl font-semibold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              quote:
                "Aapne Arav ke janamdin ko ek aisi yaadgar aur masti bhari raat banaya jo hamare parivaar aur dosto ke liye hamesha yaad rahegi. You rocked the stage with your charisma and energy!",
              author: "Arav’s Mother (Birthday Event)",
            },
            {
              quote:
                "From the lively sangeet night to the beautiful wedding ceremony, every moment was made perfect by your incredible hosting skills.",
              author: "Sarita (Wedding Event)",
            },
            {
              quote:
                "Your blend of English and Hindi kept the teachers engaged and entertained throughout the event. Thank you for making Teacher’s Day truly special!",
              author: "Smita (Teacher’s Day Event)",
            },
            {
              quote:
                "She is an amazing anchor. Her energy is on fire and her vibes are full party type. She motivates everyone and engages them in fun games.",
              author: "Kirti Chawla",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl bg-background border"
            >
              <p className="italic text-muted-foreground">“{t.quote}”</p>
              <p className="mt-3 font-semibold text-foreground">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🎥 Video Section */}
      <section className="py-20 bg-black/70 text-center">
        <h3 className="text-3xl font-bold mb-8 text-white">
          
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
        
        </p>
     
      </section>

      {/* 📞 Call To Action */}
      <section className="py-20 text-center bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          📞 Ready to Elevate Your Event?
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Whether it’s a wedding, corporate gathering, or special celebration —
          I’m here to make it unforgettable. Let’s create memories together!
        </p>

        {/* this is the updated version */}
        <Link
          href="https://wa.me/918050946373"
          target="_blank"
          className="inline-block bg-white text-indigo-600 font-semibold text-lg px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          WhatsApp Now
        </Link>
      </section>
    </Container>
  );
}
