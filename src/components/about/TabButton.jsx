import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonActive = active ? "text-white" : "text-slate-600";

  return (
    <button onClick={selectTab}>
      <div className={`mr-3 font-semibold hover:text-white ${buttonActive}`}>
        {children}
      </div>

      {/* garis underline biru */}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-600 mt-1 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
