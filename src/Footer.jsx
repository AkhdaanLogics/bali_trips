function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-4">
          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <p className="text-sm text-gray-800">
              Bali Trips is your travel companion to explore the wonders of
              Bali. From iconic beaches to cultural sites, we've got your dream
              vacation covered.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:underline">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm text-gray-800">Email: info@bali-trips.com</p>
            <p className="text-sm text-gray-800">Phone: +62 812 3456 7890</p>
            <p className="text-sm text-gray-800">Location: Bali, Indonesia</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-900">
          &copy; {new Date().getFullYear()} Akhdaan The Great. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
