import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-20 px-6 lg:px-12">
      {/* Left Sector: Text and Buttons */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-wide leading-tight">
            VirtualR build tools
          </h1>
          <span className="mt-4 text-3xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-teal-400 to-teal-800 text-transparent bg-clip-text block font-bold">
            for developers...
          </span>
        </div>

        <p className="mt-8 text-lg text-neutral-500 max-w-2xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-10 gap-4 sm:gap-6 w-full lg:w-auto">
          <a
            href="#"
            className="bg-gradient-to-r from-teal-400 to-teal-800 py-3 px-6 rounded-md text-white font-medium shadow-md shadow-teal-500/30 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50 text-center"
          >
            Start for free
          </a>
          <a
            href="#"
            className="py-3 px-6 rounded-md border border-teal-400 text-teal-500 font-medium transition-all duration-300 hover:bg-teal-500 hover:text-white hover:shadow-md hover:shadow-teal-400/40 text-center"
          >
            Documentation
          </a>
        </div>
      </div>

      {/* Right Sector: Videos */}
      <div className="flex-1 flex flex-col justify-center items-center mt-12 lg:mt-0 space-y-6">
        <video
          autoPlay
          loop
          muted
          className="rounded-xl w-3/4 border border-teal-400 shadow-md shadow-teal-300/30 hover:shadow-xl hover:scale-[1.02] transition-transform duration-500"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-xl w-3/4 border border-teal-400 shadow-md shadow-teal-300/30 hover:shadow-xl hover:scale-[1.02] transition-transform duration-500"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
