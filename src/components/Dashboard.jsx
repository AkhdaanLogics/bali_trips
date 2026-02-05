import { destinations } from "../data/destinations";
import Icon from "./Icon";

function Dashboard({ onNavigate, cart }) {
  const featuredDestinations = destinations.slice(0, 3);

  const stats = [
    { label: "Destinations", value: "50+", icon: "map" },
    { label: "Happy Travelers", value: "10K+", icon: "users" },
    { label: "Tours Completed", value: "5K+", icon: "check" },
    { label: "Expert Guides", value: "100+", icon: "user" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[560px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30"></div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Explore the Magic of <span className="text-teal-300">Bali</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              Discover paradise with our curated tours and experiences
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => onNavigate("destinations")}
                className="px-8 py-4 bg-teal-600 rounded-lg font-semibold text-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-300"
              >
                Browse Destinations
              </button>
              <button
                onClick={() => onNavigate("destinations")}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                View Packages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div className="text-4xl mb-3 text-teal-700">
                <Icon name={stat.icon} className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          Quick Actions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => onNavigate("destinations")}
            className="bg-white/90 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-left group border border-slate-100"
          >
            <div className="text-5xl mb-4 text-teal-700 group-hover:scale-110 transition-transform">
              <Icon name="map" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Explore Tours
            </h3>
            <p className="text-gray-600">
              Browse all available destinations and experiences
            </p>
          </button>

          <button
            onClick={() =>
              cart.length > 0
                ? onNavigate("cart")
                : alert("Your cart is empty!")
            }
            className="bg-white/90 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-left group relative border border-slate-100"
          >
            {cart.length > 0 && (
              <div className="absolute top-4 right-4 bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </div>
            )}
            <div className="text-5xl mb-4 text-teal-700 group-hover:scale-110 transition-transform">
              <Icon name="cart" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">My Cart</h3>
            <p className="text-gray-600">
              View your selected tours and proceed to checkout
            </p>
          </button>

          <button
            onClick={() => onNavigate("profile")}
            className="bg-white/90 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-left group border border-slate-100"
          >
            <div className="text-5xl mb-4 text-teal-700 group-hover:scale-110 transition-transform">
              <Icon name="user" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">My Profile</h3>
            <p className="text-gray-600">
              Manage your bookings and personal information
            </p>
          </button>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">
            Featured Destinations
          </h2>
          <button
            onClick={() => onNavigate("destinations")}
            className="text-teal-700 hover:text-teal-800 font-semibold flex items-center gap-2"
          >
            View All <span>→</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer border border-slate-100"
              onClick={() => onNavigate("destinations", dest.id)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                  {dest.category}
                </div>
                <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Icon name="star" className="w-4 h-4" />
                  {dest.rating}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {dest.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex items-center gap-2">
                  <Icon name="pin" className="w-4 h-4" />
                  {dest.location}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-teal-700">
                      Rp {dest.price.toLocaleString("id-ID")}
                    </div>
                    <div className="text-xs text-gray-500">{dest.duration}</div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate("destinations", dest.id);
                    }}
                    className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 hover:shadow-lg transition-all"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-teal-700 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Bali Trips?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "money",
                title: "Best Prices",
                desc: "Guaranteed lowest prices",
              },
              {
                icon: "shield",
                title: "Safe & Secure",
                desc: "Your safety is our priority",
              },
              {
                icon: "bolt",
                title: "Instant Booking",
                desc: "Quick and easy process",
              },
              {
                icon: "target",
                title: "Expert Guides",
                desc: "Professional local guides",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center text-white">
                <div className="text-6xl mb-4 flex items-center justify-center">
                  <Icon name={item.icon} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-cyan-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
