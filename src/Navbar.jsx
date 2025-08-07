import { useState } from "react";

const languages = [
  { code: "en", label: "English", flag: "/gb.svg" },
  { code: "id", label: "Bahasa Indonesia", flag: "/id.svg" },
];

function Navbar() {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code) => {
    setSelectedLang(code);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 w-screen bg-white shadow-lg z-50">
      <div className="flex justify-between items-center px-4 py-3 mr-4 ml-4">
        <div className="text-2xl font-bold">
          <a href="#" className="text-[#00abfa]">
            Bali Trips
          </a>
        </div>
        <div className="flex items-center space-x-8">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-center items-center gap-2 text-sm font-medium text-black"
              type="button"
            >
              <img
                src={languages.find((l) => l.code === selectedLang)?.flag}
                alt={selectedLang}
                className="w-6 h-auto shadow-lg rounded-full"
              />
              {languages.find((l) => l.code === selectedLang)?.label}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl shadow-xl bg-white text-black">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full px-4 py-2 flex items-center gap-2 text-sm text-left transition-colors ${
                      selectedLang === lang.code ? "font-semibold" : ""
                    }`}
                  >
                    <img
                      src={lang.flag}
                      alt={lang.code}
                      className="w-5 h-auto rounded-full"
                    />
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="flex items-center">
            <img
              src="/akhdaan.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
