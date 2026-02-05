import Icon from "./components/Icon";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-4">
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-200">
              Bali Trips
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted travel companion to explore the wonders of Bali. From
              iconic beaches to cultural sites, we've got your dream vacation
              covered.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-200">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-emerald-200 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="hover:text-emerald-200 transition-colors duration-200"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-200 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-emerald-200 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-200">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Icon name="landmark" className="w-4 h-4" />
                Cultural Tours
              </li>
              <li className="flex items-center gap-2">
                <Icon name="sun" className="w-4 h-4" />
                Beach Experiences
              </li>
              <li className="flex items-center gap-2">
                <Icon name="leaf" className="w-4 h-4" />
                Nature Adventures
              </li>
              <li className="flex items-center gap-2">
                <Icon name="target" className="w-4 h-4" />
                Hiking & Trekking
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-200">
              Contact Us
            </h3>
            <p className="text-sm text-gray-300 mb-2 flex items-center gap-2">
              <Icon name="mail" className="w-4 h-4" />
              info@bali-trips.com
            </p>
            <p className="text-sm text-gray-300 mb-2 flex items-center gap-2">
              <Icon name="phone" className="w-4 h-4" />
              +62 812 3456 7890
            </p>
            <p className="text-sm text-gray-300 mb-4 flex items-center gap-2">
              <Icon name="location" className="w-4 h-4" />
              Bali, Indonesia
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-emerald-400/20 text-emerald-200 rounded-full flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Icon name="facebook" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-emerald-400/20 text-emerald-200 rounded-full flex items-center justify-center transition-all"
                aria-label="X"
              >
                <Icon name="x" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-emerald-400/20 text-emerald-200 rounded-full flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-emerald-900/60 pt-6 text-center text-sm text-slate-300">
          <p>
            &copy; {new Date().getFullYear()} Akhdaan The Great. All rights
            reserved.
          </p>
          <p className="mt-2 text-xs flex items-center justify-center gap-2">
            Made with
            <Icon name="heart" className="w-4 h-4 text-rose-400" />
            in Bali
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
