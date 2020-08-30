import { useState } from "react";
import Head from "next/head";
import FitText from "@kennethormandy/react-fittext";

const Home = ({ headline, personalAttributes }) => {
  const [attr, setAttr] = useState(personalAttributes[0].personalAttribute);
  const segments = headline.split(" ");

  return (
    <div className="container h-screen">
      <Head>
        <title>Evan Heisler is a software engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen ml-6 md:ml-12">
        <h1 className="leading-none justify-center flex flex-col h-screen w-11/12 md:w-4/5">
          <FitText compressor={0.35} maxFontSize={240}>
            <div className="tracking-tight">{segments[0]}</div>
          </FitText>
          <FitText compressor={0.35} maxFontSize={240}>
            <div className="tracking-tight">{segments[1]}</div>
          </FitText>
          <FitText compressor={1.2}>
            <div className="flex flex-row mt-2 md:mt-4 ml-2">
              <span>{segments[2]}</span>
              <span className="whitespace-no-wrap ml-2 md:ml-6 flex flex-col flex-1">
                <div className="text-blue-400">{attr}.</div>
                <div className="flex">
                  {personalAttributes.map(({ id, personalAttribute }, i) => (
                    <span
                      className={`flex-1 h-4 bg-black mr-4 mt-3 cursor-pointer ${
                        i > 6 ? `hidden md:flex` : ""
                      }`}
                      key={id}
                      onClick={() => setAttr(personalAttribute)}
                    />
                  ))}
                </div>
              </span>
            </div>
          </FitText>
        </h1>
      </main>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const res = await fetch(`${process.env.STRAPI_API_URL}/home-page`);
  const props = await res.json();

  return {
    props,
  };
};

export default Home;
