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
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 sm:mb-12 md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
            What Drives Us
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Mission
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
            Our mission is to make travel simpler, more accessible, and more
            enjoyable by connecting travelers with the services and
            experiences they need to make every journey memorable.
          </p>
        </div>

        {/* Mission Points */}
        <div className="grid grid-cols-1 gap-y-10 sm:gap-y-12 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:gap-x-16">
          {missions.map((mission, index) => (
            <div key={index} className="group">

              {/* Title + Arrow */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 flex-shrink-0 text-blue-600 transition-transform duration-300 group-hover:translate-x-2">
                  <FaArrowRight className="text-base sm:text-lg" />
                </div>

                <h3 className="text-lg font-bold leading-7 text-gray-900 sm:text-xl md:text-2xl">
                  {mission.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-3 ml-7 max-w-xl text-sm leading-7 text-gray-600 sm:mt-4 sm:ml-8 sm:text-base">
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