import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-bold">
        What People are{" "}
        <span className="bg-gradient-to-r from-teal-400 to-teal-800 text-transparent bg-clip-text">
          saying
        </span>
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-lg hover:shadow-teal-400/20 transition-all duration-300 hover:-translate-y-2"
          >
            {/* User Info */}
            <div className="flex items-center mb-6">
              <img
                className="w-14 h-14 mr-4 rounded-full border-2 border-teal-400 shadow-md"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6 className="font-semibold text-lg">{testimonial.user}</h6>
                <span className="text-sm italic text-neutral-500">
                  {testimonial.company}
                </span>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-neutral-300 leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
