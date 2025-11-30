import Container from "@/components/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const services = [
    {
      id: "1️⃣",
      title: "Female Wedding Anchor",
      subtitle: "Sangeet | Reception | Engagement | Haldi | Mehendi",
      description:
        "From emotional vows to energetic sangeet nights, I bring joy, laughter, and elegance to every wedding. My hosting style blends warmth with entertainment, ensuring your special day flows seamlessly and stays unforgettable.",
      highlights: [
        "Interactive & Engaging: Keeps guests involved with games, humor, and fun banter.",
        "Personalized Hosting: Scripts and flow customized to your wedding theme.",
        "Experienced with Top Wedding Venues across cities.",
      ],
      image: "/assets/ss9.jpg",
      color: "from-pink-500 to-red-400",
    },
    {
      id: "2️⃣",
      title: "Female Corporate Event Anchor",
      subtitle: "Conferences | Award Nights | Product Launches | Team Events",
      description:
        "Corporate events need balance — professionalism with personality. I ensure smooth transitions, impactful introductions, and engaging sessions that keep audiences attentive and inspired.",
      highlights: [
        "Professional & Energetic Hosting: Perfect mix of confidence and charm.",
        "Flawless Event Flow: Coordination with tech teams, speakers, and organizers.",
        "Trusted by Leading Brands and Organizations.",
      ],
      image: "/assets/ss6.jpg",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "3️⃣",
      title: "Birthday Party Anchor",
      subtitle: "Kids’ Birthdays | Milestone Celebrations | Themed Parties",
      description:
        "Birthdays are about fun, laughter, and connection! Whether it’s a child’s big day or a milestone birthday, I bring vibrant energy and keep every guest entertained with interactive games and performances.",
      highlights: [
        "High-Energy Hosting: Engaging games and crowd interaction.",
        "Collaboration with DJs, Magicians & Performers.",
        "Perfect for All Age Groups and Themes.",
      ],
      image: "/assets/ss2.jpg",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <Container title="Projects">
      {/* 🌟 Hero Section */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Looking for a{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Professional Event Anchor
          </span>
          ?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg leading-relaxed"
        >
          Whether it’s a grand wedding, corporate gathering, or birthday
          celebration — I bring energy, elegance, and seamless flow to every
          event. With experience hosting shows across multiple cities, I ensure
          your event is engaging, memorable, and absolutely stress-free.
        </motion.p>
      </section>

      {/* 🎤 Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-24">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="object-cover w-full h-[350px] hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 space-y-5">
              <div
                className={`inline-block text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
              >
                {service.id} {service.title}
              </div>
              <p className="text-sm text-gray-400">{service.subtitle}</p>
              <p className="text-gray-300 text-base leading-relaxed">
                {service.description}
              </p>
              <ul className="list-disc text-left text-gray-400 pl-5 space-y-2">
                {service.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 📞 CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Make Your Event Unforgettable ✨
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          No matter the occasion — weddings, corporate events, or birthdays — I
          bring life, laughter, and connection to your stage.
        </p>
        <a
          href="https://wa.me/918050946373"
          target="_blank"
          className="inline-block bg-white text-indigo-600 font-semibold text-lg px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          📞 Book Your Anchor Now
        </a>
      </section>
    </Container>
  );
}
