import React from "react";
import { useState } from "react";
import { motion } from "motion/react";

import "./Request.css";

const Request = () => {
  const [swapped, setSwapped] = useState(false);

  return (
    <div className="flex flex-row gap-4 absolute justify-end items-end right-4">
      <motion.button
        layout
        transition={{ type: "spring", duration: 0.25, bounce: 0.25 }}
        className={`border-[#522930] border rounded-full text-[#522930] hover:border-transparent hover:text-[#e1c8c7] hover:bg-[#522930] pr-2 pl-2 p-1.5 ${
          !swapped ? "order-1" : "order-2"
        }`}
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/1Dc8AlusjX0qa2xXozkFSOqQ6gDWAtQ--ILX1XIBNKe4/edit",
            "_blank"
          )
        }
      >
        Accept
      </motion.button>
      <motion.button
        layout
        transition={{ type: "spring", duration: 0.25, bounce: 0.25 }}
        className={` border-[#522930] border rounded-full text-[#522930] hover:border-transparent hover:text-[#e1c8c7] hover:bg-[#522930] pr-2 pl-2 p-1.5 ${
          swapped ? "order-1" : "order-2"
        }`}
        onMouseEnter={() => setSwapped(!swapped)}
      >
        Decline
      </motion.button>
    </div>
  );
};

export default Request;
