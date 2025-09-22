import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 font-bold tracking-wide">
        Pricing
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingOptions.map((option, index) => (
          <div key={index} className="p-2">
            <div className="flex flex-col p-8 bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-md hover:shadow-teal-400/30 hover:scale-105 transition-transform duration-300">
              {/* Title */}
              <p className="text-4xl font-bold mb-4 flex items-center justify-center lg:justify-start">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-teal-400 to-teal-800 text-transparent bg-clip-text text-xl ml-3">
                    (Most Popular)
                  </span>
                )}
              </p>

              {/* Price */}
              <p className="mb-6 text-center lg:text-left">
                <span className="text-5xl font-bold">{option.price}</span>
                <span className="text-neutral-400 text-lg ml-1">/Month</span>
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-4 mb-8">
                {option.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-neutral-300"
                  >
                    <CheckCircle2 className="text-teal-400 w-6 h-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Subscribe Button */}
              <a
                href="#"
                className="mt-auto bg-gradient-to-r from-teal-400 to-teal-800 text-white font-medium text-lg py-3 px-6 rounded-lg text-center hover:scale-105 hover:shadow-lg hover:shadow-teal-400/40 transition-all duration-300"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
