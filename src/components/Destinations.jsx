import { useState } from "react";
import { destinations, categories } from "../data/destinations";
import Icon from "./Icon";

function Destinations({ onNavigate, onAddToCart, selectedDestId }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDest, setSelectedDest] = useState(
    selectedDestId ? destinations.find((d) => d.id === selectedDestId) : null,
  );
  const [showDetail, setShowDetail] = useState(selectedDestId ? true : false);
  const [sortBy, setSortBy] = useState("popular");

  const filteredDestinations = destinations
    .filter(
      (dest) =>
        (selectedCategory === "all" || dest.category === selectedCategory) &&
        (searchQuery === "" ||
          dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.location.toLowerCase().includes(searchQuery.toLowerCase())),
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews; // popular
    });

  const handleViewDetail = (dest) => {
    setSelectedDest(dest);
    setShowDetail(true);
  };

  const handleBookNow = (dest) => {
    onAddToCart({
      ...dest,
      quantity: 1,
      bookingDate: new Date().toISOString().split("T")[0],
      guests: 2,
    });
    alert(`${dest.name} added to cart!`);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate("dashboard")}
            className="text-teal-700 hover:text-teal-800 font-semibold mb-4 flex items-center gap-2"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Explore Destinations
          </h1>
          <p className="text-gray-600">Discover amazing places in Bali</p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-100">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <div className="text-gray-600 flex items-center px-4">
              Found {filteredDestinations.length} destinations
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Icon name={cat.icon} className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-100"
            >
              <div
                className="relative h-56 overflow-hidden cursor-pointer"
                onClick={() => handleViewDetail(dest)}
              >
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
                <p className="text-gray-600 text-sm mb-1 flex items-center gap-2">
                  <Icon name="pin" className="w-4 h-4" />
                  {dest.location}
                </p>
                <p className="text-gray-500 text-xs mb-4 flex items-center gap-2">
                  <Icon name="clock" className="w-3.5 h-3.5" />
                  {dest.duration}
                  <span className="text-gray-300">•</span>
                  <Icon name="users" className="w-3.5 h-3.5" />
                  {dest.reviews.toLocaleString()} reviews
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-teal-700">
                      Rp {dest.price.toLocaleString("id-ID")}
                    </div>
                    <div className="text-xs text-gray-500">per person</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleViewDetail(dest)}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition-all"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => handleBookNow(dest)}
                      className="px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 hover:shadow-lg transition-all"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 flex items-center justify-center text-blue-600">
              <Icon name="search" className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No destinations found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {showDetail && selectedDest && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl">
            <div className="relative h-96">
              <img
                src={selectedDest.image}
                alt={selectedDest.name}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setShowDetail(false)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
                aria-label="Close"
              >
                <Icon name="close" className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <h2 className="text-4xl font-bold text-white mb-2">
                  {selectedDest.name}
                </h2>
                <p className="text-white/90 flex items-center gap-2">
                  <Icon name="pin" className="w-4 h-4" />
                  {selectedDest.location}
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="star" className="w-5 h-5 text-yellow-400" />
                  <span className="text-xl font-bold">
                    {selectedDest.rating}
                  </span>
                  <span className="text-gray-600">
                    ({selectedDest.reviews} reviews)
                  </span>
                </div>
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                  {selectedDest.category}
                </div>
                <div className="text-gray-600 flex items-center gap-2">
                  <Icon name="clock" className="w-4 h-4" />
                  {selectedDest.duration}
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedDest.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-lg mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {selectedDest.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <Icon
                          name="check"
                          className="w-4 h-4 mt-1 text-green-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3">What's Included</h3>
                  <ul className="space-y-2">
                    {selectedDest.included.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <Icon
                          name="check"
                          className="w-4 h-4 mt-1 text-blue-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Starting from
                  </div>
                  <div className="text-4xl font-bold text-teal-700">
                    Rp {selectedDest.price.toLocaleString("id-ID")}
                  </div>
                  <div className="text-sm text-gray-600">per person</div>
                </div>
                <button
                  onClick={() => {
                    handleBookNow(selectedDest);
                    setShowDetail(false);
                  }}
                  className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 hover:shadow-xl hover:scale-105 transition-all"
                >
                  Book This Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Destinations;
