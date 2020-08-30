import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <section className="ml-6 md:ml-16 mt-4 text-lg">
      {links.map(({ href, icon }) => (
        <a
          className="inline-block mr-2 duration-200 ease-out transition transform hover:scale-150"
          key={icon[1]}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={icon} />
        </a>
      ))}
    </section>
  );
};

export default Social;
