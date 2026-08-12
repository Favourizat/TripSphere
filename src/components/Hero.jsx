import HeroImg2 from "../assets/HeroImg2.webp";
import AeroplaneHeroImg from "../assets/AeroplaneHeroImg.png";
import applelogo from "../assets/applelogo.png";
import Lexus from "../assets/Lexus.jpg"
import Mini from "../assets/Mini.jpg"
import Nissan from "../assets/Nissan.jpg"
import Audi from "../assets/Audi.jpg"
import Hero3 from "../assets/Hero3.avif"

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-175">
      {/* Background Image */}
      <div className="absolute inset-4 sm:inset-6 lg:inset-8">
        <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={Hero3}
            alt="Hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-4 rounded-3xl bg-black/20 sm:inset-6 lg:inset-8" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12">
          <div className="max-w-3xl text-center lg:text-left">
            {/* Heading */}
            <h1
              className="font-['Playfair_Display'] text-4xl font-bold leading-tight text-gray-100 sm:text-5xl lg:text-7xl"
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
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg lg:mx-0 lg:text-xl"
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
              className="mt-10 flex items-center justify-center gap-4 lg:justify-start"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <h2 className="text-5xl font-bold text-white lg:text-7xl">
                22+
              </h2>

              <div className="text-left text-white">
                <p className="text-lg font-semibold">Years of</p>
                <p className="text-lg">Experience</p>
              </div>
            </div>
          </div>

          {/* Airplane */}
          <img
            src={AeroplaneHeroImg}
            alt="Aeroplane"
            data-aos="fade-left"
            className="animate-float absolute right-4 top-1/2 hidden h-105 w-auto -translate-y-1/2 object-contain xl:h-[520px] lg:block"
          />
        </div>
      </div>

      
    </section>
  );
};

export default Hero;