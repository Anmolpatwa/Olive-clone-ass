export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-20 pb-20">

      {/* Avatar + Trust Text */}
      <div className="flex items-center gap-10 mb-6">

        <div className="flex -space-x-3">

          <img
            className="w-9 h-9 rounded-full border-2 border-white"
            src="https://randomuser.me/api/portraits/men/32.jpg"
          />

          <img
            className="w-9 h-9 rounded-full border-2 border-white"
            src="https://randomuser.me/api/portraits/women/44.jpg"
          />

          <img
            className="w-9 h-9 rounded-full border-2 border-white"
            src="https://randomuser.me/api/portraits/men/12.jpg"
          />

          <img
            className="w-9 h-9 rounded-full border-2 border-white"
            src="https://randomuser.me/api/portraits/women/65.jpg"
          />

          <div className="flex items-center justify-center w-9 h-9 text-xs font-medium text-gray-600 bg-gray-200 border-2 border-white rounded-full">
            3k+
          </div>

        </div>

        <p className="text-gray-500 text-sm font-medium">
          Trusted by thousands of healthy families
        </p>

      </div>

      {/* Heading */}
      <h1 className="text-[56px] md:text-[64px] font-bold leading-[1.1] text-[#1f3a1b] max-w-4xl">
        The Safest Way to
        <br />
        Shop for Groceries
      </h1>

      {/* Description */}
      <p className="mt-6 text-gray-600 max-w-xl text-lg leading-relaxed font-light">
        Use the Olive Food Scanner App to Instantly Eliminate <br/>
        Harmful Ingredients from Your Family's Diet and <br/> Get
        Expert-Backed Food Insights
      </p>

      {/* Button */}
      <div className="mt-8">
        <button className="bg-[#1f3a1b] hover:bg-[#2a4d24] text-white px-8 py-3 rounded-full text-sm font-medium transition cursor-pointer">
           Download for iOS
        </button>
      </div>

    </section>
  );
}