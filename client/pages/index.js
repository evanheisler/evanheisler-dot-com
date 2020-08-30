import { useState } from "react";
import Head from "next/head";

const Home = ({ headline, personalAttributes }) => {
  const [attr, setAttr] = useState(personalAttributes[0].personalAttribute);
  const segments = headline.split(" ");

  return (
    <div>
      <Head>
        <title>Evan Heisler is a software engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>{segments[0]}</div>
        <div>{segments[1]}</div>
        <div>
          {segments[2]} {attr}
        </div>
        <div>
          {personalAttributes.map(({ id, personalAttribute }) => (
            <span key={id} onClick={() => setAttr(personalAttribute)}>
              -
            </span>
          ))}
        </div>
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
