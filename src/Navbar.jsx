import { useState } from "react";
import Icon from "./components/Icon";

const languages = [
  { code: "en", label: "English", flag: "/gb.svg" },
  { code: "id", label: "Bahasa Indonesia", flag: "/id.svg" },
];

function Navbar({ onNavigate, cart = [], currentPage = "dashboard" }) {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code) => {
    setSelectedLang(code);
    setIsOpen(false);
  };

  const navItems = [
    { id: "dashboard", label: "Home", icon: "home" },
    { id: "destinations", label: "Destinations", icon: "map" },
    { id: "cart", label: "Cart", icon: "cart", badge: cart.length },
    { id: "profile", label: "Profile", icon: "user" },
  ];

  return (
    <div className="fixed top-0 w-screen bg-white/80 backdrop-blur-md border-b border-slate-200/70 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          <button
            onClick={() => onNavigate("dashboard")}
            className="text-slate-900 hover:text-teal-700 transition-colors"
          >
            Bali Trips
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                currentPage === item.id
                  ? "bg-teal-600 text-white shadow-md"
                  : "text-slate-700 hover:bg-teal-50"
              }`}
            >
              <Icon name={item.icon} className="w-5 h-5" />
              <span className="hidden lg:inline">{item.label}</span>
              {item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100/80 hover:bg-slate-200 px-3 py-2 rounded-full transition-all"
              type="button"
            >
              <img
                src={languages.find((l) => l.code === selectedLang)?.flag}
                alt={selectedLang}
                className="w-5 h-5 rounded-full object-cover ring-2 ring-white"
              />
              <span className="hidden lg:inline">
                {languages.find((l) => l.code === selectedLang)?.label}
              </span>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-2xl shadow-2xl bg-white text-slate-800 border border-slate-100 overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full px-4 py-3 flex items-center gap-3 text-sm text-left transition-colors hover:bg-slate-50 ${
                      selectedLang === lang.code
                        ? "font-semibold bg-emerald-50 text-emerald-700"
                        : ""
                    }`}
                  >
                    <img
                      src={lang.flag}
                      alt={lang.code}
                      className="w-5 h-5 rounded-full object-cover ring-2 ring-white"
                    />
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Profile Icon */}
          <button
            onClick={() => onNavigate("profile")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-200"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-slate-200 px-4 py-2 flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`relative flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
              currentPage === item.id ? "text-teal-700" : "text-slate-600"
            }`}
          >
            <Icon name={item.icon} className="w-6 h-6" />
            <span className="text-xs font-semibold">{item.label}</span>
            {item.badge > 0 && (
              <span className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
