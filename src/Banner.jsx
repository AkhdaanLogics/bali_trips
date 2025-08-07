function Banner() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/bali.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>

      <div className="z-10 text-white text-5xl font-bold text-center">
        <p className="drop-shadow-xl">
          Welcome to
          <span className="hover:bg-gradient-to-r from-[#00abfa] to-[#008ecf] hover:bg-clip-text hover:text-transparent duration-300">
            {" "}
            Bali Trips
          </span>
        </p>
        <p className="mt-4 text-lg font-normal drop-shadow-md">
          Experience the beauty of Bali with us!
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="px-4 py-2 bg-gradient-to-br from-[#00abfa] to-[#008ecf] text-white rounded-full shadow-lg text-sm font-medium hover:from-[#008ecf] hover:to-[#1796d1] transition"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
