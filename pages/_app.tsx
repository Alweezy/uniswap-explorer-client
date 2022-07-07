import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  const appId = process.env.NEXT_PUBLIC_MORALIS_APP_ID?.toString() || "";
  const serverUrl =
    process.env.NEXT_PUBLIC_MORALIS_SERVER_URL?.toString() || "";
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
