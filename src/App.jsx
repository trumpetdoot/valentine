import { useState } from "react";
import { motion } from "motion/react";

import Header from "./components/Header";
import Request from "./components/Request";
import PdfModal from "./components/PdfModal";

import "@fontsource-variable/sour-gummy";
import "./app.css";

function App() {
  const [swapped, setSwapped] = useState(false);

  return (
    <>
      <Header />
      <div className="flex flex-col gap-2 p-8 sm:flex-row items-center sm:gap-6 sm:py-4">
        <img
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="public/profile.jpg"
          alt="Andy Yin"
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Andy Yin</p>
          </div>
          <PdfModal />
        </div>

        {/* Buttons with Smooth Swap Animation */}
        <Request></Request>
      </div>
    </>
  );
}

export default App;
