import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "../Animate/utils";

const AttributesScroller = ({ attr, personalAttributes, selectAttr }) => {
  return (
    <span className="whitespace-no-wrap ml-2 md:ml-6 flex flex-col flex-1">
      <AnimatePresence>
        <motion.div
          key={attr}
          initial={{ opacity: 0, y: 100, position: "absolute" }}
          animate={{ opacity: 1, y: 0, position: "relative" }}
          exit={{ opacity: 0, y: -100, position: "absolute" }}
          transition={{ ease }}
          className="text-blue-400"
        >
          {attr}.
        </motion.div>
      </AnimatePresence>
      <div className="flex">
        {personalAttributes.map(({ id, personalAttribute }, i) => (
          <motion.span
            className={`flex-1 h-4 bg-black mr-4 mt-3 cursor-pointer ${
              i > 6 ? `hidden md:flex` : ""
            }`}
            style={{
              flexGrow: attr === personalAttribute ? 4 : 1,
              transition: "flex-grow 0.33s linear",
            }}
            key={id}
            onClick={() => selectAttr(personalAttribute)}
          />
        ))}
      </div>
    </span>
  );
};

export default AttributesScroller;
