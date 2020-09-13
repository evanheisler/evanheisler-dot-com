import { useState } from "react";
import { motion } from "framer-motion";
import HtmlHead from "../components/HtmlHead";
import Social from "../components/Social";
import { fadeIn, staggerWithChildren } from "../components/Animate/utils";
import AttributesScroller from "../components/AttributesScroller";
import { useInterval } from "../utils/hooks";

const Home = ({ headline, personalAttributes }) => {
  const [attr, setAttr] = useState(personalAttributes[0].personalAttribute);
  const [attrDelay, setAttrDelay] = useState(4000);

  const segments = headline.split(" ");

  const handleInterval = () => {
    const randomInt = Math.floor(
      Math.random() * (personalAttributes.length - 1 - 0 + 1) + 0
    );
    setAttr(personalAttributes[randomInt].personalAttribute);
  };

  useInterval(() => {
    handleInterval();
  }, attrDelay);

  const handleSelectAttr = (attr) => {
    setAttr(attr);
    setAttrDelay(null);

    setTimeout(() => {
      setAttrDelay(4000);
    }, 0);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="container h-screen flex flex-col"
    >
      <HtmlHead title={`Evan Heisler is ${attr}`} />

      <Social />

      <main className="ml-6 md:ml-12 flex flex-1">
        <motion.h1
          variants={staggerWithChildren()}
          className="leading-none justify-center flex flex-col w-11/12 lg:w-4/5"
        >
          <motion.div
            variants={fadeIn({ y: 100 })}
            className="tracking-tight text-6xl md:text-8xl lg:text-10xl"
          >
            {segments[0]}
          </motion.div>

          <motion.div
            variants={fadeIn({ y: 100 })}
            className="tracking-tight text-6xl md:text-8xl lg:text-10xl"
          >
            {segments[1]}
          </motion.div>

          <motion.div
            variants={fadeIn({ y: 100 })}
            className="flex flex-row mt-2 md:mt-4 ml-2 relative overflow-hidden text-2xl md:text-5xl lg:text-6xl"
          >
            <span>{segments[2]}</span>

            <AttributesScroller
              attr={attr}
              selectAttr={handleSelectAttr}
              personalAttributes={personalAttributes}
            />
          </motion.div>
        </motion.h1>
      </main>
    </motion.div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.STRAPI_API_URL}/home-page`);
  const props = await res.json();

  return {
    props,
  };
};

export default Home;
