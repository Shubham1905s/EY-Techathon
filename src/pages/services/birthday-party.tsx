import Container from "@/components/Container";
import Image from "next/image";

export default function BirthdayEvent() {
  return (
    <Container title="Birthday Event Anchor">
    
      <section className="py-32 text-center bg-gradient-to-b from-pink-600/20 to-purple-800/20 text-white">
        <h1 className="text-5xl font-bold mb-4">🎉 Birthday Party Anchor</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Planning a birthday celebration that everyone remembers? As a
          professional birthday party anchor, I bring high-energy hosting,
          interactive games, and laughter-filled moments — making your event
          vibrant, seamless, and unforgettable!
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-white">
          🎈 Why Hire a Professional Birthday Host?
        </h2>
        <p className="text-gray-300 mb-10 text-lg leading-relaxed">
          Every birthday deserves the perfect vibe — excitement, fun, and
          flawless flow! Whether it’s for kids, teens, or milestone birthdays, I
          ensure your guests are entertained from start to finish.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            "Keeps guests engaged — laughter, games, and endless smiles!",
            "Creates tailored experiences for every age group and party theme.",
            "Coordinates games, activities, and performances smoothly.",
            "Takes care of flow — you enjoy the celebration stress-free!",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gray-900/70 rounded-xl border border-gray-800 hover:border-pink-500 transition"
            >
              <p className="text-gray-200 text-lg">✔ {item}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-3xl font-semibold mb-12 text-center text-white">
          🎂 Birthday Event Hosting Services
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
       
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-700 transition-transform hover:scale-[1.02]">
            <Image
              src="/assets/ss7.jpg"
              alt="Kids Birthday Party Hosting"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                1️⃣ Kids’ Birthday Party Hosting
              </h3>
              <p className="text-gray-400 mb-4">
                Perfect for: 1st Birthdays | Cartoon Themes | Outdoor or Indoor
                Celebrations
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Fun-filled games, storytelling, and high-energy interaction.</li>
                <li>Engages kids with music, movement, and laughter.</li>
                <li>Works with magicians, clowns & DJs for a complete experience.</li>
              </ul>
            </div>
          </div>

          {/* 2️⃣ Teen & Adult Birthdays */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-700 transition-transform hover:scale-[1.02]">
            <Image
              src="/assets/ss2.jpg"
              alt="Teen and Adult Birthday Party Hosting"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                2️⃣ Teen & Adult Birthday Party Hosting
              </h3>
              <p className="text-gray-400 mb-4">
                Perfect for: Sweet 16 | 18th | 21st | 25th Birthdays
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>
                  Modern & engaging hosting with themed games and challenges.
                </li>
                <li>Music-based activities that keep the vibe alive.</li>
                <li>Energetic and friendly style, perfect for all crowd types.</li>
              </ul>
            </div>
          </div>

          {/* 3️⃣ Milestone Celebrations */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-700 transition-transform hover:scale-[1.02]">
            <Image
              src="/assets/ss14.jpg"
              alt="Milestone Birthday Party Hosting"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                3️⃣ 40th, 50th & Milestone Celebrations
              </h3>
              <p className="text-gray-400 mb-4">
                Perfect for: 30th | 40th | 50th | 60th Birthdays
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>
                  Elegant yet fun hosting style suitable for all family events.
                </li>
                <li>Interactive trivia, storytelling, and special moments.</li>
                <li>Creates a warm, nostalgic, and celebratory atmosphere.</li>
              </ul>
            </div>
          </div>

          {/* 4️⃣ Themed Parties */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-700 transition-transform hover:scale-[1.02]">
            <Image
              src="/assets/ss15.jpg"
              alt="Themed Birthday Party Hosting"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                4️⃣ Themed Birthday Party Hosting
              </h3>
              <p className="text-gray-400 mb-4">
                Perfect for: Bollywood | Retro | Carnival | Glow | Celebrity Themes
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Custom hosting style tailored to your party theme.</li>
                <li>Special entries, props, and games that match your vibe.</li>
                <li>
                  Collaborates with decorators, DJs & performers for seamless
                  execution.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     
      <section className="text-center py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <h3 className="text-3xl font-bold mb-6">
          🎁 Ready to Make Your Birthday Unforgettable?
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Whether it’s your little one’s special day or a milestone celebration,
          I’ll make sure it’s full of joy, laughter, and magical memories!
        </p>
        <a
          href="https://wa.me/918050946373"
          target="_blank"
          className="inline-block bg-white text-pink-600 font-semibold text-lg px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          🎂 Let’s Plan Your Event
        </a>
      </section>
    </Container>
  );
}
