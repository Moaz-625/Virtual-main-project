import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 bg-neutral-900 px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
            Resources
          </h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-400 hover:text-teal-400 transition-colors duration-300"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
            Platform
          </h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-400 hover:text-teal-400 transition-colors duration-300"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
            Community
          </h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-400 hover:text-teal-400 transition-colors duration-300"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-neutral-700 pt-6 text-center text-neutral-500 text-sm">
        &copy; {new Date().getFullYear()} VirtualR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
