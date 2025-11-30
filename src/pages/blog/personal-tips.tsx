import Container from "@/components/Container";
import Image from "next/image";

export default function CorporateEvent() {
  const posts = [
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
      alt: "event hosting",
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
      title: "Planner's Guide to Selecting an EMCEE",
      steps: [
        "Identify the event's energy and tone requirements.",
        "Evaluate candidates with relevant experience.",
        "Check past performances and client feedback.",
        "Ensure the EMCEE aligns with the event vision.",
      ],
      image: "/assets/s3.jpg",
      author: "Sheetal",
      alt: "Checklist for hiring an emcee",
    },
    {
      title: "Creating Unforgettable EMCEE Experiences",
      steps: [
        "Exude confidence and charisma on stage.",
        "Maintain consistent engagement with the audience.",
        "Handle challenges smoothly without disrupting flow.",
        "Bring authenticity to every interaction.",
      ],
      image: "/assets/s4.png",
      author: "Sheetal",
      alt: "Female emcee addressing audience",
    },
    {
      title: "Understanding Roles: Emcee, Anchor, Host",
      steps: [
        "Emcee: Guides the event flow and energizes attendees.",
        "Anchor: Represents the event formally, often for media or corporate purposes.",
        "Host: Welcomes guests and facilitates interaction in a friendly manner.",
      ],
      image: "/assets/s5.jpg",
      author: "Sheetal",
      alt: "Diagram comparing emcee, anchor, and host roles",
    },
    {
      title: "Top Skills of a Successful Event Anchor",
      steps: [
        "Communicate clearly with engaging voice modulation.",
        "Read the audience and adapt energy levels accordingly.",
        "Handle stage dynamics gracefully.",
        "Remain confident under pressure while improvising smoothly.",
      ],
      image: "/assets/s6.png",
      author: "Sheetal",
      alt: "Female event anchor speaking confidently",
    },
    {
      title: "Tips for Hiring the Ideal Event Anchor",
      steps: [
        "Verify previous experience with similar events.",
        "Assess stage presence and delivery style.",
        "Ensure alignment with event theme and goals.",
        "Check references and testimonials from past clients.",
        "Observe adaptability and improvisation skills.",
        "Gauge audience interaction and engagement.",
        "Confirm professionalism and punctuality.",
      ],
      image: "/assets/s7.jpg",
      author: "Sheetal",
      alt: "Checklist of tips for hiring event anchor",
    },
    {
      title: "Key Considerations for Selecting a Female Anchor",
      steps: [
        "Energy and ability to connect with attendees.",
        "Adaptability to unforeseen changes during the event.",
        "Professionalism and reliability in execution.",
        "Strong communication skills with clarity and presence.",
      ],
      image: "/assets/s8.png",
      author: "Sheetal",
      alt: "Female anchor on stage managing event",
    },
  ];

  return (
    <Container title="Corporate Event">
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">Corporate Event</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          Experience professional event hosting that captivates audiences and ensures every detail is flawlessly executed.
        </p>

        <div className="flex flex-col gap-20">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Text Section */}
              <div className="md:w-1/2 text-left">
                <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                <ul className="space-y-2 mb-4">
                  {post.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <span className="text-gray-500">{step}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 italic text-sm">by {post.author}</p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={800}
                  height={450}
                  className="rounded-2xl shadow-lg w-full max-w-md aspect-video object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}