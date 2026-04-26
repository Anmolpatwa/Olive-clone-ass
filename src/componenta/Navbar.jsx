import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(null);

  return (
    <nav className="flex items-center px-10 py-6 relative">

      {/* LEFT - Logo */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold text-[#8DB33F] cursor-pointer">
          Olive
        </h1>
      </div>

      {/* CENTER - Menu */}
      <div className="flex justify-center gap-8 text-gray-900 text-md font-light">

        {/* SOLUTIONS */}
        <div
          className="relative"
          onMouseEnter={() => setOpen("solutions")}
          onMouseLeave={() => setOpen(null)}
        >
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            Solutions

            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                open === "solutions" ? "rotate-180" : ""
              }`}
            />
          </div>

          {open === "solutions" && (
            <div className="absolute top-10 left-0 bg-white shadow-xl rounded-2xl p-6 w-[420px] border border-gray-100">

              <div className="grid grid-cols-2 gap-6">

                <div>
                  <h3 className="font-semibold">Allergy Scanning</h3>
                  <p className="text-sm text-gray-500">
                    Scan groceries for hidden ingredients
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">Gluten Free</h3>
                  <p className="text-sm text-gray-500">
                    Detect gluten ingredients instantly
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">Dairy & Lactose</h3>
                  <p className="text-sm text-gray-500">
                    Detect dairy-based ingredients
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">Ingredient Checking</h3>
                  <p className="text-sm text-gray-500">
                    Decode complex ingredient labels
                  </p>
                </div>

              </div>

            </div>
          )}
        </div>

        <a className="cursor-pointer hover:text-black">Features</a>
        <a className="cursor-pointer hover:text-black">Pricing</a>

        <Dropdown title="Blog" />
        <a className="cursor-pointer hover:text-black">Restaurants</a>
        <Dropdown title="Food" />

      </div>

      {/* RIGHT - Buttons */}
      <div className="flex-1 flex justify-end items-center gap-6">

        <button className="text-gray-700 hover:text-black cursor-pointer">
          Sign in
        </button>

        <button className="bg-[#1F3A1B] hover:bg-[#2a4d24] text-white px-6 py-3 rounded-full transition duration-200 cursor-pointer">
          Get Olive →
        </button>

      </div>

    </nav>
  );
}

function Dropdown({ title }) {

  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >

      <div className="flex items-center gap-1 cursor-pointer hover:text-black">
        {title}

        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && (
        <div className="absolute top-10 left-0 bg-white shadow-xl rounded-2xl p-6 w-[300px] border border-gray-100">
          <p className="text-gray-500">
            Example dropdown content
          </p>
        </div>
      )}

    </div>
  );
}