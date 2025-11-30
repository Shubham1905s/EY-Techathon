import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { useState } from "react";

export default function WeddingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: "Why should I hire a professional wedding anchor?",
      answer:
        "A professional emcee ensures your wedding flows smoothly — from ceremonies to performances — keeping guests entertained, engaged, and emotionally connected throughout.",
    },
    {
      question: "Do you host traditional as well as modern weddings?",
      answer:
        "Yes! I adapt my style according to the event theme, from traditional rituals to modern celebrations — balancing grace with fun energy.",
    },
    {
      question: "Can you host multilingual weddings?",
      answer:
        "Absolutely! I can host in English, Hindi, and regional languages to connect with your audience effortlessly.",
    },
    {
      question: "Do you travel for destination weddings?",
      answer:
        "Yes, I am available for destination weddings across India.",
    },
    {
      question: "How early should I book your services?",
      answer:
        "Ideally, book at least 3–4 weeks in advance to ensure availability and customized planning for your big day.",
    },
  ];

  return (
    <Container className="py-16 bg-black text-gray-200 min-h-screen">
      <Head>
        <title>Sheetal Sharma - Wedding Event Anchor</title>
        <meta
          name="description"
          content="Professional wedding anchor Sheetal Sharma - creating lively, elegant, and unforgettable wedding experiences across India."
        />
      </Head>

      {/* Hero Section */}
      <section className="text-center mb-20 max-w-4xl mx-auto pt-28">
        <h1 className="text-5xl font-bold mb-4 text-pink-400">
          Female Anchor for Wedding Events
        </h1>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Your wedding deserves a host who can create a lively, engaging, and smooth experience for you
          and your guests. As a professional wedding anchor, I bring energy, elegance, and seamless
          coordination to your special day.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-700 transition"
          >
            View Portfolio
          </Link>
          <Link
            href="/contactpage"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
          >
            Check Availability
          </Link>
        </div>
        <div className="mt-12">
          <Image
            src="/assets/ss8.jpg"
            alt="Wedding Event Hosting"
            width={800}
            height={450}
            className="mx-auto rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Why Hire Section */}
      <section className="max-w-3xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-white">
          💍 Why Hire a Wedding Emcee?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A wedding is more than just rituals—it’s about memories, emotions, and entertainment. A
          professional wedding emcee ensures:
        </p>
        <ul className="text-left inline-block text-gray-300 text-lg space-y-3">
          <li>✔ <b>Seamless Flow</b> – No awkward silences or missed moments.</li>
          <li>✔ <b>Engaging & Fun Atmosphere</b> – Keeps guests entertained with humor and games.</li>
          <li>✔ <b>Stress-Free Event</b> – Smooth transitions between ceremonies and performances.</li>
        </ul>
      </section>
      {/* Services Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-12 text-center text-pink-400">
          📌 Wedding Event Anchoring Services
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[
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
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-pink-700 hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover opacity-90"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-pink-400">{service.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {service.desc.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section className="max-w-3xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-white">📍 Locations I Serve</h2>
        <p className="text-gray-300 text-lg">
          Available for weddings in Belgaum, Bangalore, Goa, Hubli, Gadag, Mumbai, Jaipur, Udaipur and
          across India.
        
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">
          FAQs About My Wedding Anchoring Services
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div key={i} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 transition flex justify-between items-center font-medium text-gray-200"
              >
                {faq.question}
                <span>{openFaq === i ? "-" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="p-4 text-gray-300 bg-gray-900">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="text-center mb-16">
        <Link
          href="/contactpage"
          className="inline-block px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-pink-700 transition"
        >
          Book Sheetal for Your Wedding
        </Link>
      </section>
    </Container>
  );
}

