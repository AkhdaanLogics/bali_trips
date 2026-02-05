function Section() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 px-4 py-12 lg:px-6 lg:py-20">
      <div id="destinations" className="max-w-6xl mx-auto">
        <h2 className="mb-6 text-4xl lg:text-5xl tracking-tight font-extrabold bg-gradient-to-r from-[#00abfa] to-[#008ecf] text-center bg-clip-text text-transparent">
          Popular Destinations in Bali
        </h2>
        <p className="mb-12 text-gray-600 text-lg lg:text-xl text-center max-w-3xl mx-auto">
          Discover the most amazing places to visit while you're in Bali. From
          scenic beaches to vibrant cultural landmarks, we’ve got you covered.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition hover:scale-105 duration-300"
            >
              <img
                src="/bali.jpg"
                alt="Destination"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {["Uluwatu Temple", "Ubud Rice Terraces", "Kuta Beach"][i]}
              </h3>
              <p className="text-gray-600 text-sm">
                {
                  [
                    "A sacred clifftop temple with breathtaking ocean views.",
                    "Explore the lush green rice paddies in the heart of Bali.",
                    "Enjoy surfing, sunsets, and nightlife at Bali’s famous beach.",
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Top Bali Destinations"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126914.62243122813!2d115.09195030000002!3d-8.409517799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24707fc10d9a3%3A0x3030bfbcaf7d7f0!2sBali!5e0!3m2!1sen!2sid!4v1692962038474!5m2!1sen!2sid"
          ></iframe>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="mb-6 text-4xl lg:text-5xl tracking-tight font-extrabold bg-gradient-to-r from-[#00abfa] to-[#008ecf] text-center bg-clip-text text-transparent">
          Flights to Bali
        </h2>
        <p className="mb-12 text-gray-600 text-lg lg:text-xl text-center max-w-3xl mx-auto">
          Find the best flight deals to Bali from various destinations around
          the world.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src="/plane.jpg"
                  alt="Flight"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {["Flight to Bali", "Flight from Bali", "Round Trip"][i]}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {
                    [
                      "Book your flight to Bali with the best airlines.",
                      "Find flights departing from Bali to various destinations.",
                      "Enjoy a round trip with great deals and offers.",
                    ][i]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-gray-900 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              question: "What is the best time to visit Bali?",
              answer:
                "The best time to visit Bali is during the dry season, from April to October.",
            },
            {
              question: "Do I need a visa to visit Bali?",
              answer:
                "It depends on your nationality, but most countries do not require a visa.",
            },
            {
              question: "What currency is used in Bali?",
              answer:
                "The currency used in Bali is the Indonesian Rupiah (IDR).",
            },
            {
              question: "Is Bali safe for tourists?",
              answer:
                "Bali is generally safe for tourists, but it's always important to take usual precautions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-[#00abfa]"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {item.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
