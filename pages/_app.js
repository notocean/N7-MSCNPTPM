import "../styles/globals.css";

import { Header } from "../Components";

import { CrowdFundingProvider } from "../Context/CrowdFunding";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CrowdFundingProvider>
        <Header />
        <Component {...pageProps} />
      </CrowdFundingProvider>
    </>
  );
}
