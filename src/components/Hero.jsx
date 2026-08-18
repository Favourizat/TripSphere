import Hero3 from "../assets/Hero3.avif";
import AeroplaneHeroImg from "../assets/AeroplaneHeroImg.png";

const Hero = () => {
  return (
    <section className="relative min-h-[650px] sm:min-h-[700px] lg:h-[700px] lg:min-h-0">

      {/* Background Image */}
      <div className="absolute inset-3 sm:inset-5 md:inset-6 lg:inset-8">
        <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl">
          <img
            src={Hero3}
            alt="Hero"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-3 rounded-2xl bg-black/30 sm:inset-5 sm:rounded-3xl md:inset-6 lg:inset-8" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[650px] items-center sm:min-h-[700px] lg:min-h-0 lg:h-[700px]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 md:px-10 lg:px-12">

          <div className="max-w-3xl text-center lg:text-left">

            {/* Heading */}
            <h1
              className="font-['Playfair_Display'] text-4xl font-bold leading-[1.1] text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl"
              data-aos="fade-right"
            >
              Experience
              <br className="hidden sm:block" />
              the Magic of
              <br className="hidden sm:block" />
              Travel
            </h1>

            {/* Description */}
            <p
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white sm:mt-6 sm:text-base sm:leading-8 md:text-lg lg:mx-0 lg:text-xl"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Discover breathtaking destinations, unforgettable experiences,
              and seamless travel planning. Whether you're seeking adventure,
              relaxation, or cultural exploration, TripSphere helps you create
              unforgettable memories.
            </p>

            {/* Experience */}
            <div
              className="mt-8 flex items-center justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
                22+
              </h2>

              <div className="text-left text-white">
                <p className="text-base font-semibold sm:text-lg">
                  Years of
                </p>

                <p className="text-base sm:text-lg">
                  Experience
                </p>
              </div>
            </div>

          </div>

          {/* Airplane */}
          <img
            src={AeroplaneHeroImg}
            alt="Aeroplane"
            data-aos="fade-left"
            className="animate-float absolute right-2 top-1/2 hidden h-[360px] w-auto -translate-y-1/2 object-contain lg:block lg:h-[430px] xl:right-4 xl:h-[520px]"
          />

        </div>
      </div>
    </section>
  );
};

export default Hero;