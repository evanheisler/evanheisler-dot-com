import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "../index.css";

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(faGithub, faTwitter, faLinkedin, faAngellist, faAt, faFilePdf);

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
