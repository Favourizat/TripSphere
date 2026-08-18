import appdownload from "../assets/appdownload.jpg";
import googleplay1 from "../assets/googleplay1.jpg";
import googleplay2 from "../assets/googleplay2.jpg";

const Download = () => {
  return (
    <section className="bg-blue-300 px-4 py-14 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 sm:gap-12 md:flex-row md:gap-10 lg:gap-16">

        {/* Left Content */}
        <div className="w-full flex-1 text-center md:text-left">

          <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:mb-5 sm:text-4xl md:text-5xl">
            Plan Your Journey on the Go
          </h2>

          <p className="mx-auto mb-7 max-w-xl text-base font-semibold leading-7 text-white sm:mb-8 sm:text-lg md:mx-0 md:text-lg md:leading-relaxed">
            Plan your trips, discover amazing destinations, and manage every
            detail of your journey right from your phone.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start">
            
            <img
              src={googleplay1}
              alt="Download on Google Play"
              className="w-28 cursor-pointer rounded-lg object-contain transition-transform duration-300 hover:scale-105 sm:w-32 md:w-36"
            />

            <img
              src={googleplay2}
              alt="Get it on Google Play"
              className="w-28 cursor-pointer rounded-lg object-contain transition-transform duration-300 hover:scale-105 sm:w-32 md:w-36"
            />

            <img
              src={googleplay1}
              alt="Download our mobile app"
              className="w-28 cursor-pointer rounded-lg object-contain transition-transform duration-300 hover:scale-105 sm:w-32 md:w-36"
            />

          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full flex-1 justify-center">
          <img
            src={appdownload}
            alt="Travel app preview"
            className="h-64 w-64 rounded-3xl object-cover shadow-xl sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
          />
        </div>

      </div>
    </section>
  );
};

export default Download;