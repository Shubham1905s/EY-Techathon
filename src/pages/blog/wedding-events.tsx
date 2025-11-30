import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export default function WeddingPage() {
  const faqData = [
    {
      q: "How much does a wedding anchor charge?",
      a: "The cost depends on the event type, duration, and location. Contact me for a custom quote.",
    },
    {
      q: "Can you customize the hosting style to match our wedding theme?",
      a: "Absolutely! I personalize my approach to reflect your wedding tone, rituals, and guest expectations.",
    },
    {
      q: "Do you host in multiple languages?",
      a: "Yes! I can host in English, Hindi, and regional languages as needed.",
    },
    {
      q: "Can you manage last-minute changes?",
      a: "Yes, I’m experienced in handling schedule adjustments, performances, and flow changes seamlessly.",
    },
    {
      q: "When should we book?",
      a: "For weddings and related functions, it’s best to book at least 3–4 weeks in advance.",
    },
  ];

  return (
    <Container className="bg-black text-white min-h-screen py-20">
      <Head>
        <title>Sheetal Sharma - Wedding Event Anchor</title>
        <meta
          name="description"
          content="Professional wedding anchor Sheetal Sharma - bringing elegance, energy, and seamless flow to your special day."
        />
      </Head>

      {/* Hero Section */}
      <section className="text-center mb-20 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 text-white mt-16 tracking-wide">
          Female Anchor for Wedding Events
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Your wedding deserves a host who can create a lively, engaging, and smooth experience for you and your guests.
          I bring elegance, fun, and perfect coordination to make your day truly memorable.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
          >
            View Portfolio
          </Link>
          <Link
            href="/contactpage"
            className="px-6 py-3 border border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            Check Availability
          </Link>
        </div>
        <div className="mt-12">
          <Image
            src="/assets/ss8.jpg"
            alt="Sheetal Sharma hosting a wedding event"
            width={800}
            height={450}
            className="mx-auto rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Hire Section */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
          Why Hire a Wedding Emcee?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          A wedding is more than just rituals — it’s about memories, emotions, and entertainment.
          A professional emcee ensures your celebration flows beautifully, keeping the audience connected and entertained.
        </p>
        <ul className="text-gray-200 text-left space-y-3 max-w-2xl mx-auto">
          <li>✔ Seamless Flow – No awkward silences or missed moments.</li>
          <li>✔ Engaging Atmosphere – Fun games, humor, and emotional storytelling.</li>
          <li>✔ Stress-Free Event – Smooth transitions between rituals and ceremonies.</li>
        </ul>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-12 text-center text-yellow-400">
          Wedding Event Anchoring Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Sangeet, Mehendi & Haldi Hosting",
              img: "/assets/ss9.jpg",
              desc: [
                "High-energy hosting with music, dance, and fun contests.",
                "Smooth coordination with DJs, choreographers, and performers.",
                "Keeps energy alive throughout the evening.",
              ],
            },
            {
              title: "Engagement & Reception Hosting",
              img: "/assets/ss6.jpg",
              desc: [
                "Personalized hosting that reflects your love story.",
                "Interactive games, Q&A, and heartfelt storytelling.",
                "Ensures smooth transitions and engaging flow.",
              ],
            },
            {
              title: "Wedding Ceremony Hosting",
              img: "/assets/ss5.jpg",
              desc: [
                "Culturally adaptive hosting blending tradition with fun.",
                "Explains rituals meaningfully and keeps guests engaged.",
                "Manages timing and flow with grace and precision.",
              ],
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                  {service.title}
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {service.desc.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
          Locations I Serve
        </h2>
        <p className="text-gray-300">
          Available for weddings in Belagavi, Bangalore, Hyderabad, and
          across India.  
          Also available for destination weddings worldwide 🌍
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-8 text-center text-yellow-400">
          FAQs About My Wedding Anchoring
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div key={i} className="border border-yellow-700 rounded-lg overflow-hidden">
              <details className="bg-zinc-900 p-4 open:bg-zinc-800 transition">
                <summary className="cursor-pointer text-lg font-medium text-yellow-300">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-300">{faq.a}</p>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-16">
        <Link
          href="/contactpage"
          className="inline-block px-8 py-4 bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
        >
          Book Sheetal for Your Wedding
        </Link>
      </section>
    </Container>
  );
}
