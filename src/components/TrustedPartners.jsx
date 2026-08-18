import applelogo from "../assets/applelogo.png";
import Lexus from "../assets/Lexus.jpg";
import Audi from "../assets/Audi.jpg";
import Mini from "../assets/Mini.jpg";
import Nissan from "../assets/Nissan.jpg";

const logos = [
  applelogo,
  Lexus,
  Mini,
  Audi,
  Nissan,
];

const TrustedPartners = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12">
      <div className="marquee flex w-max items-center">

        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-5 flex shrink-0 items-center sm:mx-7 md:mx-10 lg:mx-12"
          >
            <img
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="h-12 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:h-14 md:h-16 lg:h-20"
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default TrustedPartners;