import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] px-4 sm:px-6 lg:px-12">
      {/* Title Section */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="bg-neutral-900 text-teal-400 rounded-full h-6 text-sm font-medium px-3 py-1 uppercase tracking-wider">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-16 tracking-wide font-bold">
          Easily build{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
        <p className="mt-6 text-neutral-400 text-lg sm:text-xl">
          Discover powerful tools and features that help you build, scale, and
          deliver faster.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-md hover:shadow-teal-500/20 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center p-8"
          >
            {/* Icon */}
            <div className="flex h-16 w-16 mb-6 bg-neutral-800 text-teal-400 justify-center items-center rounded-full shadow-lg">
              {feature.icon}
            </div>

            {/* Text */}
            <h5 className="mb-3 text-xl font-semibold text-white">
              {feature.text}
            </h5>
            <p className="text-md text-neutral-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
