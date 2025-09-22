import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-12">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-bold">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-teal-400 to-teal-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-12 gap-12">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={codeImg}
            alt="Coding"
            className="rounded-xl shadow-lg shadow-teal-400/20 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Checklist */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-neutral-900/50 backdrop-blur-md rounded-2xl border border-neutral-800 hover:shadow-lg hover:shadow-teal-400/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 flex justify-center items-center h-12 w-12 p-2 bg-neutral-800 text-teal-400 rounded-full shadow-md">
                <CheckCircle2 />
              </div>

              {/* Text */}
              <div>
                <h5 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
