import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { staggerWithChildren, fadeIn } from "../Animate/utils";

const Social = () => {
  let links = [
    {
      href: "https://github.com/evanheisler",
      icon: ["fab", "github"],
    },
    {
      href: "https://www.linkedin.com/in/evanheisler/",
      icon: ["fab", "linkedin"],
    },
    {
      href: "https://twitter.com/evanheisler",
      icon: ["fab", "twitter"],
    },
    {
      href: "https://angel.co/u/evanheisler",
      icon: ["fab", "angellist"],
    },
    {
      href: "mailto:evanheisler@gmail.com",
      icon: ["fas", "at"],
    },
    {
      href: "/evan-heisler-resume.pdf",
      icon: ["fas", "file-pdf"],
    },
  ];

  return (
    <motion.section
      variants={staggerWithChildren({ delayChildren: 1 })}
      className="ml-6 md:ml-16 mt-4 text-xl"
    >
      {links.map(({ href, icon }) => (
        <motion.a
          variants={fadeIn()}
          whileHover={{ scale: 1.2 }}
          className="inline-block mr-4"
          key={icon[1]}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={icon} />
        </motion.a>
      ))}
    </motion.section>
  );
};

export default Social;
