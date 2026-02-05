function Banner() {
  return (
    <div
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/bali.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50"></div>

      <div className="z-10 text-white px-4 text-center animate-fade-in">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-2xl">
          Welcome to
          <span className="block mt-2 bg-gradient-to-r from-[#00abfa] to-[#008ecf] bg-clip-text text-transparent">
            Bali Trips
          </span>
        </p>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl font-light drop-shadow-lg max-w-2xl mx-auto">
          Experience the beauty of Bali with us!
        </p>
        <div className="mt-8">
          <a
            href="#destinations"
            className="inline-block px-8 py-3 bg-gradient-to-br from-[#00abfa] to-[#008ecf] text-white rounded-full shadow-xl text-base font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
