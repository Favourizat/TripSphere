import { FaArrowRight } from "react-icons/fa";

const Mission = () => {
  const missions = [
    {
      title: "Simplify Travel Planning",
      description:
        "Make it easy for travelers to discover, compare, and book flights, hotels, transportation, and holiday experiences from one convenient platform.",
    },
    {
      title: "Create Seamless Experiences",
      description:
        "Use modern technology and thoughtful solutions to make every stage of the travel journey smooth, convenient, and stress-free.",
    },
    {
      title: "Connect People to the World",
      description:
        "Help travelers discover new destinations, cultures, and experiences while making travel more accessible and enjoyable.",
    },
    {
      title: "Build Trust Through Excellence",
      description:
        "Deliver reliable services, transparent information, and exceptional customer support that travelers can confidently depend on.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">
            What Drives Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="mt-5 max-w-2xl text-gray-600 text-lg leading-8">
            Our mission is to make travel simpler, more accessible, and more
            enjoyable by connecting travelers with the services and
            experiences they need to make every journey memorable.
          </p>
        </div>

        {/* Mission Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {missions.map((mission, index) => (
            <div key={index} className="group">

              {/* Title + Arrow */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                  <FaArrowRight size={18} />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {mission.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-4 ml-8 max-w-xl text-gray-600 leading-7">
                {mission.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mission;