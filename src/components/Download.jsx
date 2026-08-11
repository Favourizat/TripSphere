
import appdownload from "../assets/appdownload.jpg";
import googleplay1 from "../assets/googleplay1.jpg";
import googleplay2 from "../assets/googleplay2.jpg";

const Download = () => {
  return (
    <section className="py-20 px-6 bg-blue-300">
      <div className="max-w-7xl mx-auto text-white flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Plan Your Journey on the Go
          </h2>

          <p className="text-xl font-semibold md:text-lg leading-relaxed max-w-xl mb-8">
            Plan your trips, discover amazing destinations, and manage every
            detail of your journey right from your phone.
          </p>

          {/* Download Buttons */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <img
              src={googleplay1}
              alt="Download on Google Play"
              className="w-32 sm:w-36 h-auto object-contain rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />

            <img
              src={googleplay1}
              alt="Get it on Google Play"
              className="w-32 sm:w-36 h-auto object-contain rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />

            <img
              src={googleplay1}
              alt="Download our mobile app"
              className="w-32 sm:w-36 h-auto object-contain rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={appdownload}
            alt="Travel app preview"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Download;