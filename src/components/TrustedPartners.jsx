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
    <section className="overflow-hidden py-10 bg-white">
      <div className="marquee flex items-center">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-10">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-20 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;