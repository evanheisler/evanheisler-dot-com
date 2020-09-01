import { useState } from "react";
import FitText from "@kennethormandy/react-fittext";
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
          className="leading-none justify-center flex flex-col w-11/12 md:w-4/5"
        >
          <FitText compressor={0.35} maxFontSize={200}>
            <motion.div
              variants={fadeIn({ y: 100 })}
              className="tracking-tight"
            >
              {segments[0]}
            </motion.div>
          </FitText>

          <FitText compressor={0.35} maxFontSize={200}>
            <motion.div
              variants={fadeIn({ y: 100 })}
              className="tracking-tight"
            >
              {segments[1]}
            </motion.div>
          </FitText>

          <FitText compressor={1.4}>
            <motion.div
              variants={fadeIn({ y: 100 })}
              className="flex flex-row mt-2 md:mt-4 ml-2 relative overflow-y-hidden"
            >
              <span>{segments[2]}</span>

              <AttributesScroller
                attr={attr}
                selectAttr={handleSelectAttr}
                personalAttributes={personalAttributes}
              />
            </motion.div>
          </FitText>
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
